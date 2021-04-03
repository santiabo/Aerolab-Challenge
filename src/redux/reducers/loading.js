import { START_REQUEST, SUCCESS_REQUEST, SET_ERROR } from '../actions/loading';

const initialState = {}

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
     case START_REQUEST:
      return {
        ...state,
        loading: true
      };
    case SUCCESS_REQUEST:
      return {
        ...state,
       loading:false
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  };
};

export default loadingReducer;