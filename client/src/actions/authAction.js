import { SET_CURRENT_USER , GET_ERRORS } from './../constants/ActionType';
import * as api from './../constants/url';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import setAuthtoken from './../utils/setAuthToken';
import { LOGIN_SUCCESS } from './../constants/ActionType';
export const loginAdmin = (adminData) => dispatch => {
  axios.post(`${api.BASE_URL_ADMIN}/login`, adminData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken',token)
      setAuthtoken(token);
      const decoded = jwt_decode(token);
      dispatch(SetCurrentUser(decoded))
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    })
}

export const SetCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  }
}
