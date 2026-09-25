import React, { createContext, useContext, useState, useEffect } from 'react';
import { applicationsApi } from '../api/client';

const RegistrationContext = createContext();

export const useRegistration = () => useContext(RegistrationContext);

export const RegistrationProvider = ({ children }) => {
  const [studentDetails, setStudentDetails] = useState(() => {
    const saved = sessionStorage.getItem('studentDetails');
    return saved ? JSON.parse(saved) : {
      fullName: '',
      college: 'FRCRCE',
      branch: '',
      year: '3',
      studentClass: '',
      division: '',
      email: '',
      phone: '',
    };
  });

  const [resumeLink, setResumeLink] = useState(() => {
    return sessionStorage.getItem('resumeLink') || '';
  });

  const [selectedPositions, setSelectedPositions] = useState(() => {
    const saved = sessionStorage.getItem('selectedPositions');
    return saved ? JSON.parse(saved) : [];
  });

  const [taskLinks, setTaskLinks] = useState(() => {
    const saved = sessionStorage.getItem('taskLinks');
    return saved ? JSON.parse(saved) : {};
  });

  const [editModeReturnUrl, setEditModeReturnUrl] = useState('');

  useEffect(() => {
    sessionStorage.setItem('studentDetails', JSON.stringify(studentDetails));
  }, [studentDetails]);

  useEffect(() => {
    sessionStorage.setItem('resumeLink', resumeLink);
  }, [resumeLink]);

  useEffect(() => {
    sessionStorage.setItem('selectedPositions', JSON.stringify(selectedPositions));
  }, [selectedPositions]);

  useEffect(() => {
    sessionStorage.setItem('taskLinks', JSON.stringify(taskLinks));
  }, [taskLinks]);

  const hasCompletedDetails = studentDetails.fullName.trim() !== '' && studentDetails.email.trim() !== '' && studentDetails.rollNo?.trim() !== '';
  const hasUploadedResume = resumeLink.trim() !== '';

  const updateStudentDetails = (details) => setStudentDetails((prev) => ({ ...prev, ...details }));
  
  const togglePosition = (positionId) => {
    setSelectedPositions((prev) => {
      const isSelected = prev.includes(positionId);
      if (isSelected) {
        return prev.filter((id) => id !== positionId);
      } else {
        if (prev.length >= 3) return prev;
        return [...prev, positionId];
      }
    });
  };

  const reorderPositions = (newOrder) => {
    setSelectedPositions(newOrder);
  };

  const submitApplication = async () => {
    try {
      // Create student entry
      const response = await applicationsApi.start({
        email: studentDetails.email,
        rollNo: studentDetails.rollNo,
        fullName: studentDetails.fullName,
        branch: studentDetails.branch,
        year: parseInt(studentDetails.year) || 3,
        class: studentDetails.studentClass,
        division: studentDetails.division
      });
      
      if (response.data?.sessionToken) {
        sessionStorage.setItem('studentToken', response.data.sessionToken);
      }
      
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

      const applications = selectedPositions.map((item, index) => {
        const actualId = (typeof item === 'object' && item !== null) ? item.id : item;
        return {
          positionId: actualId,
          taskLink: taskLinks[actualId] || '',
          priority: index + 1
        };
      });
      
      // Final submit
      await applicationsApi.submit({
        email: studentDetails.email,
        applications
      });

      return true;
    } catch (error) {
      console.error('Submission error:', error);
      throw error;
    }
  };

  const clearRegistration = () => {
    setStudentDetails({
      fullName: '',
      rollNo: '',
      college: 'FRCRCE',
      branch: '',
      year: '3',
      studentClass: '',
      division: '',
      email: '',
      phone: '',
    });
    setResumeLink('');
    setSelectedPositions([]);
    setTaskLinks({});
    sessionStorage.removeItem('studentDetails');
    sessionStorage.removeItem('resumeLink');
    sessionStorage.removeItem('selectedPositions');
    sessionStorage.removeItem('taskLinks');
    sessionStorage.removeItem('editModeReturnUrl');
    sessionStorage.removeItem('studentToken');
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
        reorderPositions,
        taskLinks,
        setTaskLinks,
        hasCompletedDetails,
        hasUploadedResume,
        editModeReturnUrl,
        setEditModeReturnUrl,
        submitApplication,
        clearRegistration,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};
