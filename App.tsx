
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ChokingFirstAidPage from './pages/ChokingFirstAidPage';
import InterviewPrepPage from './pages/InterviewPrepPage';
import InterviewSimulatorPage from './pages/InterviewSimulatorPage';
import HabitFormationPage from './pages/HabitFormationPage';
import VideoGenPage from './pages/VideoGenPage';
import { Page } from './types';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path={Page.Home} element={<HomePage />} />
          <Route path={Page.ChokingFirstAid} element={<ChokingFirstAidPage />} />
          <Route path={Page.InterviewPrep} element={<InterviewPrepPage />} />
          <Route path={Page.InterviewSimulator} element={<InterviewSimulatorPage />} />
          <Route path={Page.HabitFormation} element={<HabitFormationPage />} />
          <Route path={Page.VideoGen} element={<VideoGenPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
