
import React from 'react';
import { Link } from 'react-router-dom';
import { CourseInfo } from '../types';

interface CourseCardProps {
  course: CourseInfo;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const IconComponent = course.icon;

  return (
    <Link to={course.path} className="block group">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:scale-105">
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center mb-4">
            {IconComponent && <IconComponent className="h-10 w-10 text-primary mr-4" />}
            <h3 className="text-xl font-semibold text-primary-dark group-hover:text-primary">{course.title}</h3>
          </div>
          <p className="text-secondary-dark text-sm mb-4 flex-grow">{course.description}</p>
          <div className="mt-auto">
             <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full group-hover:bg-primary-dark transition-colors duration-300">
              Learn More &rarr;
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
