import { GET_PRODUCTS } from '../actions/products';

const initialState = []

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return [...state,
      ...action.products
      ];
    default:
      return state;
  };
};

export default productsReducer;