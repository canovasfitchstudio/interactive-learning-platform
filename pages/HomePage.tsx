
import React from 'react';
import CourseCard from '../components/CourseCard';
import { COURSES } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-primary-dark mb-4">Welcome to CanovitasTraining</h1>
        <p className="text-xl text-secondary-dark max-w-2xl mx-auto">
          Explore interactive micro-courses, practice with AI-powered simulators, and visualize complex concepts.
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COURSES.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <footer className="text-center mt-16 py-8 border-t border-gray-200">
        <p className="text-secondary-dark">&copy; ${new Date().getFullYear()} CanovitasTraining. Empowering Your Growth.</p>
      </footer>
    </div>
  );
};

export default HomePage;