import { AUTH, CREATE_PROJECT, FETCH_PROJECT, FETCH_PROJECTS } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const createproject = (formData) => async (dispatch) => {
   console.log(formData)
  try {
    const { data } = await api.creatProjects(formData);
 
    dispatch({ type: CREATE_PROJECT, data });
   
  } catch (error) {
    console.log(error);
  }
};

export const fetchprojects = (formData,setProjects) => async (dispatch) => {
   
    try {
      const { data } = await api.fetchProjects(formData);
   
    //   setMessage(data?.message);
    dispatch({ type: FETCH_PROJECTS, data });
     
    } catch (error) {
      console.log(error);
    }
  };

  export const fetchproject = (formData) => async (dispatch) => {
    console.log(formData)
    try {
      const { data } = await api.fetchProject(formData);
   
    //   setMessage(data?.message);
    dispatch({ type: FETCH_PROJECT, data });
     
    } catch (error) {
      console.log(error);
    }
  };