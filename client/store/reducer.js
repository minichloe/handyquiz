import axios from 'axios';

// Actions
const GOT_PROFESSIONALS = 'GOT_PROFESSIONALS';
const GOT_TEST = 'GOT_TEST';
const GOT_NEW_PROFESSIONAL = 'GOT_NEW_PROFESSIONAL';
const GOT_ADMIN = 'GOT_ADMIN';
const STARTED_APPLICATION = 'STARTED_APPLICATION';

const initialState = {
  professionals: [],
  admin: false,
  currApplicant: {},
  test: {},
};

// Action creators
const gotProfessionals = professionals => ({ type: GOT_PROFESSIONALS, professionals });

const gotNewProfessional = professional => ({ type: GOT_NEW_PROFESSIONAL, professional });

const gotTest = test => ({ type: GOT_TEST, test });

const gotAdmin = admin => ({ type: GOT_ADMIN, admin });

// This saves the applicant on state but not on the database as the test has not been completed
export const createdApplicant = currApplicant => ({ type: STARTED_APPLICATION, currApplicant });

// Saves the applicant in the database and adds it to the professionals array
const createApplicant = professional => async (dispatch, getState) => {
  try {
    const { data } = await axios.post('/api/professional', professional);
    const test = getState().test;
    if (data.service === 'cleaner') {
      data.testCleaning = test;
    } else data.testHandyman = test;
    dispatch(gotNewProfessional(data));
  } catch (err) {
    console.error(err);
  }
};

// Getting all submitted applicants
export const getProfessionals = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/professional');
    dispatch(gotProfessionals(data));
  } catch (err) {
    console.error(err);
  }
};

// Submits test and applicant to the database
export const submitApplication = test => async (dispatch, getState) => {
  try {
    const applicant = getState().currApplicant;
    const testType = applicant.service;
    const { data } = await axios.post(`/api/${testType}`, test);
    const testId = testType === 'cleaner' ? 'testCleaningId' : 'testHandymanId';
    applicant[testId] = data.id;
    dispatch(createApplicant(applicant));
    dispatch(gotTest(data));
  } catch (err) {
    console.error(err);
  }
};

export const login = formData => async dispatch => {
  try {
    const { data } = await axios.put('/auth/login', formData);
    dispatch(gotAdmin(data));
  } catch (err) {
    console.error(err);
  }
};

// Checks if logged in on session
export const getAdmin = () => async dispatch => {
  try {
    const { data } = await axios.get('/auth/admin');
    dispatch(gotAdmin(data));
  } catch (err) {}
};

export const logout = () => async dispatch => {
  try {
    await axios.delete('/auth/logout');
    dispatch(gotAdmin(false));
  } catch (err) {
    console.error(err);
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_PROFESSIONALS:
      return {
        ...state,
        professionals: action.professionals,
      };
    case GOT_TEST:
      return {
        ...state,
        test: action.test,
      };
    case STARTED_APPLICATION:
      return {
        ...state,
        currApplicant: action.currApplicant,
      };
    case GOT_NEW_PROFESSIONAL:
      return {
        ...state,
        currApplicant: {},
        test: {},
        professionals: [...state.professionals, action.professional],
      };
    case GOT_ADMIN:
      return {
        ...state,
        admin: action.admin,
      };
    default:
      return state;
  }
};

export default reducer;
