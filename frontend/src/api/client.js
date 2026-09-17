import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
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
