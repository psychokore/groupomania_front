/*
import axios from "axios";

export const GET_USER = 'GET_USER';

export const getUser = (uid) => {
    return (dispatch) => {
        return axios.post(
            `http://localhost:3000/api/auth/login`,
            {
                email,
                password
            }
          )
          .then ((res) => {
            dispatch({ type: GET_USER, payload: res.data})
          })
          .catch ((err) => console.log(err))
    }
}
*/