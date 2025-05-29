
import React from 'react';
import { INTERVIEW_PREP_STEPS } from '../constants';
import CourseDisplayPage from './CourseDisplayPage';

const InterviewPrepPage: React.FC = () => {
  return (
    <CourseDisplayPage 
      title="Interview Preparation Guide" 
      steps={INTERVIEW_PREP_STEPS} 
    />
  );
};

export default InterviewPrepPage;
