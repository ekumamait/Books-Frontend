import {
    GET_ERRORS
  } from '../constants/ActionTypes';
//   import { toast } from 'react-toastify';
  
  const token = window.localStorage.getItem('token');
  
  const API_HOST_URL = process.env.API_URL;
  
  export const getBooks = (url = undefined) => dispatch => {
  
    let path = url;
    if (!path) {
      path = `${API_HOST_URL}/books/`;
    }
    return fetch(path, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          payload: data
        });
      });
  };
  
  export const getSingleBook = slug => dispatch => {
    return fetch(`${API_HOST_URL}/articles/${slug}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(articles => {
        dispatch({
          payload: articles.article
        });
      });
  };
  
  export const addBook = payload => dispatch => {
    return fetch(`${API_HOST_URL}/book/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`
      },
      CORS: 'no-cors',
      body: JSON.stringify({ article: payload })
    })
      .then(res => res.json())
      .then(response => {
        if (response.article.errors) {
          dispatch({
            type: GET_ERRORS,
            payload: response
          });
        } else if (response.article.title) {
          dispatch({
            payload: response
          });
        }
      });
  };
  
  export const editBook = (slug, payload) => dispatch => {
    return fetch(`${API_HOST_URL}/articles/${slug}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`
      },
      CORS: 'no-cors',
      body: JSON.stringify({ article: payload })
    })
      .then(res => res.json())
      .then(response => {
        if (response.article.errors) {
          dispatch({
            payload: response
          });
        } else if (response.article.title) {
          dispatch({
            payload: response
          });
        }
      });
  };
  
  export const deleteBook = slug => dispatch => {
    return fetch(`${API_HOST_URL}/book/${slug}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`
      },
      CORS: 'no-cors',
      body: JSON.stringify({ article: slug })
    })
      .then(res => res.json())
      .then(response => {
        dispatch({
          payload: response
        });
      });
  };
  