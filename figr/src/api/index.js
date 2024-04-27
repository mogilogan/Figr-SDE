import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});


export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const updateDetails = (formData) => API.post('/user/update', formData);
export const updatePass = (formData) => API.post('/user/updatepass', formData);

export const creatProjects = (formData) => API.post('/project/create', formData);
export const fetchProjects = (formData) => API.post('/project/fetchprojects', formData);
export const fetchProject = (formData) => API.post('/project/fetchproject', formData);
export const updateProject = (formData) => API.post('/project/updateproject', formData);

