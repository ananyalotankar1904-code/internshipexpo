import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Step1StudentDetails from './registration/Step1StudentDetails';
import Step2ResumeUpload from './registration/Step2ResumeUpload';
import Step3BrowsePositions from './registration/Step3BrowsePositions';
import Step4ApplicationSummary from './registration/Step4ApplicationSummary';
import Step5Confirmation from './registration/Step5Confirmation';

const RegistrationFlow = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register/step1" replace />} />
      <Route path="/step1" element={<Step1StudentDetails />} />
      <Route path="/step2" element={<Step2ResumeUpload />} />
      <Route path="/step3" element={<Step3BrowsePositions />} />
      <Route path="/step4" element={<Step4ApplicationSummary />} />
      <Route path="/step5" element={<Step5Confirmation />} />
      {/* Fallback for the old paths */}
      <Route path="/resume" element={<Navigate to="/register/step2" replace />} />
      <Route path="/positions" element={<Navigate to="/register/step3" replace />} />
      <Route path="/summary" element={<Navigate to="/register/step4" replace />} />
      <Route path="/confirmation" element={<Navigate to="/register/step5" replace />} />
    </Routes>
  );
};

export default RegistrationFlow;
