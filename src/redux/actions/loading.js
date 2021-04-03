export const START_REQUEST = "START_REQUEST";
export const SUCCESS_REQUEST = "SUCCESS_REQUEST";
export const SET_ERROR = "SET_ERROR";

export const startRequest = () => {
  return {
    type: START_REQUEST
  };
};

export const successRequest = () => {
  return {
    type: SUCCESS_REQUEST,
  };
};

export const setError = (error) => {
  return {
    type: SET_ERROR,
    error
  };
};