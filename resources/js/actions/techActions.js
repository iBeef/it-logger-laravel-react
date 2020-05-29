import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from './types';

import { proxy } from '../utils/proxy';

// Get techs from server
export const getTechs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch(proxy('/techs'));
    const data = await res.json();
    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Add a technician to server
export const addTech = tech => async dispatch => {
  try {
    setLoading();
    const res = await fetch(proxy('/techs'), {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    dispatch({
      type: ADD_TECH,
      payload: data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Delete a technician to server
export const deleteTech = id => async dispatch => {
  try {
    setLoading();
    const res = await fetch(proxy(`/techs/${id}`), {
      method: 'DELETE'
    });
    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
