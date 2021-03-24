import { combineReducers } from 'redux';
import userReducer from "../reducers/user";
import productsReducer from "../reducers/products";
import sortReducer from "../reducers/sort";


const Reducers = combineReducers({
  user: userReducer,
  products: productsReducer,
  sort: sortReducer  
  });
  
  export default Reducers;