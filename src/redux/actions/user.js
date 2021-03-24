import axios from "axios";


//--------------put in "constants" folder ! !
export const GET_USER = "GET_USER"





export const getUserData = (user) => {
  return {
    type: GET_USER,
    user
  }
}



//-----------put in "services" folder ! !

//instancia de axios para realizar peticiones con headers que contengan el token
export const authAxios = axios.create({
  baseURL: 'https://coding-challenge-api.aerolab.co',
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem("token")}`
  // }
});


export const getUser = (id) => {
  return async (dispatch) => {
    try {
      const res = await authAxios.get(`https://coding-challenge-api.aerolab.co/user/me`, {
        headers: {
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDRmYWNmMDdlNzE4NzAwMjBlMzhmOGIiLCJpYXQiOjE2MTU4MzQzNTJ9.fBvgjWDMXYCOOAxpEqsrIAs3wC0OKb_tn8MQ4oZ_W8s"}`
        }
      });
      dispatch(getUserData(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};