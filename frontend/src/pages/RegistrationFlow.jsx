import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Step1StudentDetails from './registration/Step1StudentDetails';
import Step2ResumeUpload from './registration/Step2ResumeUpload';
import Step3BrowsePositions from './registration/Step3BrowsePositions';
import Step4ApplicationSummary from './registration/Step4ApplicationSummary';
import Step5Confirmation from './registration/Step5Confirmation';

const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem('studentToken');
  if (!token) {
    return <Navigate to="/register/step1" replace />;
  }
  return children;
};

const RegistrationFlow = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register/step1" replace />} />
      <Route path="/step1" element={<Step1StudentDetails />} />
      <Route path="/step2" element={<ProtectedRoute><Step2ResumeUpload /></ProtectedRoute>} />
      <Route path="/step3" element={<ProtectedRoute><Step3BrowsePositions /></ProtectedRoute>} />
      <Route path="/step4" element={<ProtectedRoute><Step4ApplicationSummary /></ProtectedRoute>} />
      <Route path="/step5" element={<ProtectedRoute><Step5Confirmation /></ProtectedRoute>} />
      
      {/* Fallback for the old paths */}
      <Route path="/resume" element={<ProtectedRoute><Navigate to="/register/step2" replace /></ProtectedRoute>} />
      <Route path="/positions" element={<ProtectedRoute><Navigate to="/register/step3" replace /></ProtectedRoute>} />
      <Route path="/summary" element={<ProtectedRoute><Navigate to="/register/step4" replace /></ProtectedRoute>} />
      <Route path="/confirmation" element={<ProtectedRoute><Navigate to="/register/step5" replace /></ProtectedRoute>} />
    </Routes>
  );
};

export default RegistrationFlow;
