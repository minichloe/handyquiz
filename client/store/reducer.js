import axios from 'axios';

const GOT_PROFESSIONALS = 'GOT_PROFESSIONALS';
const GOT_TEST = 'GOT_TEST';
const GOT_NEW_PROFESSIONAL = 'GOT_NEW_PROFESSIONAL';
const GOT_ADMIN = 'GOT_ADMIN';

const initialState = {
  professionals: [],
  admin: false,
  currApplicant: {},
};

const gotProfessionals = professionals => ({ type: GOT_PROFESSIONALS, professionals });

const gotTest = test => ({ type: GOT_TEST, test });

const gotAdmin = admin => ({ type: GOT_ADMIN, admin });

export const createdApplicant = currApplicant => ({ type: GOT_NEW_PROFESSIONAL, currApplicant });

const createApplicant = professional => async dispatch => {
  try {
    const { data } = await axios.post('/api/professional', professional);
    dispatch(createdApplicant(data));
  } catch (err) {
    console.error(err);
  }
};

export const getProfessionals = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/professional');
    dispatch(gotProfessionals(data));
  } catch (err) {
    console.error(err);
  }
};

export const submitApplication = test => async (dispatch, state) => {
  try {
    const applicant = state().currApplicant;
    const testType = applicant.service;
    const { data } = await axios.post(`/api/${testType}`, test);
    const testId = testType === 'cleaner' ? 'testCleaningId' : 'testHandymanId';
    applicant[testId] = data.id;
    console.log(applicant);
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

export const getAdmin = () => async dispatch => {
  try {
    const { data } = await axios.get('/auth/admin');
    dispatch(gotAdmin(data));
  } catch (err) {
    console.error(err);
  }
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
    case GOT_NEW_PROFESSIONAL:
      return {
        ...state,
        currApplicant: action.currApplicant,
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
