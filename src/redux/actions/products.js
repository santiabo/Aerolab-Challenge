import axios from "axios";
import { startRequest, successRequest, setError } from '../actions/loading';

//--------------put in "constants" folder ! !
export const GET_PRODUCTS = "GET_PRODUCTS"



export const getProductsData = (products) => {
  return {
    type: GET_PRODUCTS,
    products
  }
}

//-----------put in "services" folder ! !

// Axios instance for making petitions with headers including the token.
export const authAxios = axios.create({
  baseURL: 'https://coding-challenge-api.aerolab.co'
});

export const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(startRequest());
      const res = await authAxios.get(`https://coding-challenge-api.aerolab.co/products`, {
        headers: {
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDRmYWNmMDdlNzE4NzAwMjBlMzhmOGIiLCJpYXQiOjE2MTU4MzQzNTJ9.fBvgjWDMXYCOOAxpEqsrIAs3wC0OKb_tn8MQ4oZ_W8s"}`
        }
      });
      dispatch(getProductsData(res.data));
      dispatch(successRequest());
    } catch (err) {
      console.log(err);
      dispatch(setError(err));
    }
  };
};