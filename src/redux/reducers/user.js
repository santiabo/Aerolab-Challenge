import { GET_USER } from '../actions/user';


const initialState= {};

const userReducer = (state = initialState, action) => {
  const { user } = action;
  switch (action.type) {

    case GET_USER:
      return {
        ...state,
       ...user
      };
  
    default:
      return state;
  };
};

export default userReducer;