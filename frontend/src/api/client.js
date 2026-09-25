import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '/api' : 'http://localhost:3000/api'),
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
  getAll: async () => {
    const cached = sessionStorage.getItem('companiesCache');
    const cacheTime = sessionStorage.getItem('companiesCacheTime');
    const now = Date.now();

    if (cached && cacheTime && now - parseInt(cacheTime) < 5 * 60 * 1000) {
      return { data: JSON.parse(cached) };
    }

    const response = await api.get('/companies');
    sessionStorage.setItem('companiesCache', JSON.stringify(response.data));
    sessionStorage.setItem('companiesCacheTime', now.toString());
    return response;
  },
};

export default api;