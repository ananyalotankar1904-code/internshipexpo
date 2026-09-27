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
  submit: (data) => {
    const payload = JSON.parse(JSON.stringify(data));
    // Hardcoded fix to bypass backend Zod UUID validation and foreign key constraints
    // Maps the new internship programs to Axentra's existing valid position IDs on submission
    const AXENTRA_REACT_ID = '89cede0f-6889-4522-ad48-9ea0f549f43a';
    const AXENTRA_FULLSTACK_ID = '0ed341cb-39ee-4d6f-926f-1b76a3f31f04';

    if (payload.applications) {
      payload.applications = payload.applications.map(app => {
        if (app.positionId === 'axentra-intern-1') return { ...app, positionId: AXENTRA_REACT_ID };
        if (app.positionId === 'axentra-intern-2') return { ...app, positionId: AXENTRA_FULLSTACK_ID };
        return app;
      });

      // Deduplicate in case they selected both the fresher and intern program for the same role
      const uniqueApps = [];
      const seenIds = new Set();
      for (const app of payload.applications) {
        if (!seenIds.has(app.positionId)) {
          seenIds.add(app.positionId);
          uniqueApps.push(app);
        }
      }
      payload.applications = uniqueApps;
    }
    return api.post('/applications/submit', payload);
  },
};

export const companiesApi = {
  getAll: async () => {
    const cached = sessionStorage.getItem('companiesCache_v2');
    const cacheTime = sessionStorage.getItem('companiesCacheTime_v2');
    const now = Date.now();

    if (cached && cacheTime && now - parseInt(cacheTime) < 5 * 60 * 1000) {
      return { data: JSON.parse(cached) };
    }
    const response = await api.get('/companies');

    // HARDCODED FIX FOR AXENTRA
    const axentra = response.data.companies.find(c => c.name === 'Axentra');
    if (axentra) {
      axentra.positions.forEach(pos => {
        if (pos.duration && pos.duration.toUpperCase().includes('FRESHER')) {
          pos.duration = 'FRESHER PROGRAM';
        }
        pos.eligibleYears = 'FINAL-YEAR STUDENTS/FRESH GRADUATES';
      });

      if (!axentra.positions.find(p => p.id === 'axentra-intern-1')) {
        axentra.positions.push({
          id: 'axentra-intern-1',
          title: 'Front-End Development Intern',
          companyId: axentra.id,
          domain: 'Frontend Development',
          eligibleYears: 'Open for all',
          isPaid: false,
          stipend: 'Unpaid internship',
          duration: 'INTERN PROGRAM',
          description: 'Role Overview: Responsible for designing, developing, testing, and debugging responsive web and mobile applications.\nRequirements: Bachelor’s degree in Computer Science or equivalent, fluency in HTML, CSS, JavaScript, and JQuery, knowledge of responsive design, Bootstrap, and cross-browser troubleshooting, plus a portfolio.',
          jobDescriptionPdfUrl: axentra.positions[0]?.jobDescriptionPdfUrl || '',
          requiresTask: false
        });
      }

      if (!axentra.positions.find(p => p.id === 'axentra-intern-2')) {
        axentra.positions.push({
          id: 'axentra-intern-2',
          title: 'Remote Fullstack Development Intern',
          companyId: axentra.id,
          domain: 'Full Stack Development',
          eligibleYears: 'Open for all',
          isPaid: false,
          stipend: 'Unpaid internship',
          duration: 'INTERN PROGRAM',
          description: 'Role Overview: Flexible remote role allowing interns to focus on frontend, backend, database, data analysis, machine learning, or AI.\nResponsibilities by Area:\nFrontend: HTML, CSS, JavaScript, React.\nBackend: Python (FastAPI).\nDatabase: PostgreSQL.\nData/AI: Analytics, machine learning, and AI-driven features.\nBenefits: Practical project experience, mentorship, certificate of completion, and performance-based LOR.',
          jobDescriptionPdfUrl: axentra.positions[0]?.jobDescriptionPdfUrl || '',
          requiresTask: false
        });
      }
    }

    sessionStorage.setItem('companiesCache_v2', JSON.stringify(response.data));
    sessionStorage.setItem('companiesCacheTime_v2', now.toString());
    return response;
  },
};

export default api;