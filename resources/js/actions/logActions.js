import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from './types';

import { proxy } from '../utils/proxy';

// export const getLogs = () => {
//   return async (dispatch, getState) => {
//     setLoading();
//     const res = await fetch(proxy('/logs'));
//     const data = await res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     });
//   };
// };

// Get logs form server
export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch(proxy('/logs'));
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};
// Add new log
export const addLog = log => async dispatch => {
  try {
    setLoading();
    const res = await fetch(proxy('/logs'), {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
