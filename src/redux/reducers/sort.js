import {  SORT_ASCENDANT, SORT_DESCENDANT, SORT_BY_DATE } from '../actions/sort';


const initialState = {sort: "date" }

const sortReducer = (state = initialState, action) => {

  switch (action.type) {

    case SORT_ASCENDANT:
      return {...state,
        sort: "ascendant"
      };

      case SORT_DESCENDANT:
        return {...state,
          sort: "descendant"
        };
        
      case SORT_BY_DATE:
        return {...state,
          sort: "date"
        };

    default:
      return state;
  };
};

export default sortReducer;