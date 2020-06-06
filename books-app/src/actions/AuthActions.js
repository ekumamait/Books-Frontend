import { GET_ERRORS } from '../constants/ActionTypes';
import dotenv from 'dotenv';

dotenv.config();
const baseUrl = process.env.baseUrl;

const localStorage = window.localStorage;

export const loginUser = (userData, history) => dispatch => {
  return fetch(`http://localhost:4000/api/auth/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    CORS: 'no-cors',
    body: JSON.stringify(userData)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.error) {
        return dispatch({
          type: GET_ERRORS,
          payload: data.error
        });
      }
      if (data){
        console.log(data);
        const token = data;
        localStorage.setItem('token', token);
        history.push('/books');
      }
    });
};

export const registerUser = (userData, history) => dispatch => {
  console.log(userData);
  return fetch(`http://localhost:4000/api/auth/signup`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    CORS: 'no-cors',
    body: JSON.stringify(userData)
  })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        return dispatch({
          type: GET_ERRORS,
          payload: data.error
        });
      }
      if (data) {
        console.log(data);
        const token = data.token;
        localStorage.setItem('token', token);
        history.push('/');
      }
    });
};