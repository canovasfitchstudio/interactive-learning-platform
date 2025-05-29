
import React from 'react';
import { CHOKING_FIRST_AID_STEPS, CHOKING_SUMMARY } from '../constants';
import CourseDisplayPage from './CourseDisplayPage';

const ChokingFirstAidPage: React.FC = () => {
  return (
    <CourseDisplayPage 
      title="First Aid for Choking" 
      steps={CHOKING_FIRST_AID_STEPS}
      summary={CHOKING_SUMMARY}
    />
  );
};

export default ChokingFirstAidPage;
