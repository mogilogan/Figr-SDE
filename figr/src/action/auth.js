import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router('/Home');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router('/Home');
  } catch (error) {
    console.log(error);
  }
};

export const updatedetails = (formData, setMessage) => async (dispatch) => {
    try {
      console.log(formData);
      const { data } = await api.updateDetails(formData);
      dispatch({ type: AUTH, data });
      setMessage(data?.message);
      console.log(data);
  
  
     
    } catch (error) {
      console.log(error);
    }
  };

  export const updatepass = (formData, setMessage) => async (dispatch) => {
    try {
      const { data } = await api.updatePass(formData);
   
      setMessage(data?.message);
      console.log(data?.message);
    } catch (error) {
      console.log(error);
    }
  };