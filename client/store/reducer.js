import axios from 'axios';

const GOT_PROFESSIONALS = 'GOT_PROFESSIONALS';
const GOT_TEST = 'GOT_TEST';
const GOT_NEW_PROFESSIONAL = 'GOT_NEW_PROFESSIONAL';

const initialState = {
  professionals: [],
  admin: false,
  currApplicant: {},
};

const gotProfessionals = professionals => ({ type: GOT_PROFESSIONALS, professionals });

const gotTest = test => ({ type: GOT_TEST, test });

export const createdApplicant = currApplicant => ({ type: GOT_NEW_PROFESSIONAL, currApplicant });

export const getProfessionals = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/professional');
    dispatch(gotProfessionals(data));
  } catch (err) {
    console.error(err);
  }
};

export const getTest = test => async dispatch => {
  const testType = test.type;
  delete test.type;
  const { data } = await axios.post(`/api/${testType}`, test);
  dispatch(gotTest(data));
};

export const createApplicant = professional => async dispatch => {
  const { data } = await axios.post('/api/professional', professional);
  dispatch(createdApplicant(data));
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
    default:
      return state;
  }
};

export default reducer;
