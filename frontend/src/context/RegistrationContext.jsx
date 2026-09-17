import React, { createContext, useContext, useState, useEffect } from 'react';
import { applicationsApi } from '../api/client';

const RegistrationContext = createContext();

export const useRegistration = () => useContext(RegistrationContext);

export const RegistrationProvider = ({ children }) => {
  const [studentDetails, setStudentDetails] = useState(() => {
    const saved = localStorage.getItem('studentDetails');
    return saved ? JSON.parse(saved) : {
      fullName: '',
      college: 'FCRCE',
      branch: '',
      year: '3',
      email: '',
      phone: '',
    };
  });

  const [resumeLink, setResumeLink] = useState(() => {
    return localStorage.getItem('resumeLink') || '';
  });

  const [selectedPositions, setSelectedPositions] = useState(() => {
    const saved = localStorage.getItem('selectedPositions');
    return saved ? JSON.parse(saved) : [];
  });

  const [editModeReturnUrl, setEditModeReturnUrl] = useState('');

  useEffect(() => {
    localStorage.setItem('studentDetails', JSON.stringify(studentDetails));
  }, [studentDetails]);

  useEffect(() => {
    localStorage.setItem('resumeLink', resumeLink);
  }, [resumeLink]);

  useEffect(() => {
    localStorage.setItem('selectedPositions', JSON.stringify(selectedPositions));
  }, [selectedPositions]);

  const hasCompletedDetails = studentDetails.fullName.trim() !== '' && studentDetails.email.trim() !== '';
  const hasUploadedResume = resumeLink.trim() !== '';

  const updateStudentDetails = (details) => setStudentDetails((prev) => ({ ...prev, ...details }));
  
  const togglePosition = (position) => {
    setSelectedPositions((prev) => {
      const isSelected = prev.find((p) => p.id === position.id);
      if (isSelected) {
        return prev.filter((p) => p.id !== position.id);
      } else {
        if (prev.length >= 3) return prev;
        return [...prev, position];
      }
    });
  };

  const submitApplication = async () => {
    try {
      // Create student entry
      await applicationsApi.start({
        email: studentDetails.email,
        fullName: studentDetails.fullName,
        branch: studentDetails.branch,
        year: parseInt(studentDetails.year) || 3
      });
      
      // Update with phone/step
      if (studentDetails.phone) {
         await applicationsApi.step({
           email: studentDetails.email,
           phone: studentDetails.phone,
           lastStepCompleted: 5
         });
      }

      if (resumeLink) {
         await applicationsApi.verifyResume({
           email: studentDetails.email,
           driveLink: resumeLink
         });
      }

      const positionIds = selectedPositions.map(p => p.id);
      
      // Final submit
      await applicationsApi.submit({
        email: studentDetails.email,
        positionIds
      });

      localStorage.removeItem('studentDetails');
      localStorage.removeItem('resumeLink');
      localStorage.removeItem('selectedPositions');
      return true;
    } catch (error) {
      console.error('Submission error:', error);
      throw error;
    }
  };

  return (
    <RegistrationContext.Provider
      value={{
        studentDetails,
        updateStudentDetails,
        resumeLink,
        setResumeLink,
        selectedPositions,
        togglePosition,
        hasCompletedDetails,
        hasUploadedResume,
        editModeReturnUrl,
        setEditModeReturnUrl,
        submitApplication,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};
