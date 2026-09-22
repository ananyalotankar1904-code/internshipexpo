import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const adminToken = localStorage.getItem('adminToken');
  const studentToken = sessionStorage.getItem('studentToken');
  
  if (adminToken && config.url?.startsWith('/admin')) {
    config.headers.Authorization = `Bearer ${adminToken}`;
  } else if (studentToken) {
    config.headers.Authorization = `Bearer ${studentToken}`;
  }
  return config;
});

export const applicationsApi = {
  start: (data) => api.post('/applications/start', data),
  step: (data) => api.patch('/applications/step', data),
  verifyResume: (data) => api.post('/applications/verify-resume', data),
  submit: (data) => api.post('/applications/submit', data),
};

export const companiesApi = {
  getAll: () => api.get('/companies'),
};

export default api;
