
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Page } from '../types';
import { HomeIcon } from './IconComponents';

const Navbar: React.FC = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }): string =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      isActive ? 'bg-primary-dark text-white' : 'text-primary-light hover:bg-primary hover:text-white'
    }`;

  return (
    <nav className="bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to={Page.Home} className="flex-shrink-0 flex items-center text-white">
              <HomeIcon className="h-8 w-8 mr-2 text-primary-light" />
              <span className="font-bold text-xl">LearnSphere</span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to={Page.ChokingFirstAid} className={navLinkClasses}>First Aid</NavLink>
              <NavLink to={Page.InterviewPrep} className={navLinkClasses}>Interview Prep</NavLink>
              <NavLink to={Page.InterviewSimulator} className={navLinkClasses}>Simulator</NavLink>
              <NavLink to={Page.HabitFormation} className={navLinkClasses}>Habit Formation</NavLink>
              <NavLink to={Page.VideoGen} className={navLinkClasses}>Video Gen</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
