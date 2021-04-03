import { combineReducers } from 'redux';
import userReducer from "../reducers/user";
import productsReducer from "../reducers/products";
import sortReducer from "../reducers/sort";
import loadingReducer from "../reducers/loading"


const Reducers = combineReducers({
  user: userReducer,
  products: productsReducer,
  sort: sortReducer,
  loading: loadingReducer  
  });
  
  export default Reducers;