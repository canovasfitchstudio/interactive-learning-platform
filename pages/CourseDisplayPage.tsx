
import React, { useState } from 'react';
import { StepContent } from '../types';
import StepNavigation from '../components/StepNavigation';
import { CheckCircleIcon, InformationCircleIcon, XCircleIcon } from '../components/IconComponents';

interface CourseDisplayPageProps {
  title: string;
  steps: StepContent[];
  summary?: string; // Optional summary for courses like Choking First Aid
}

const CourseDisplayPage: React.FC<CourseDisplayPageProps> = ({ title, steps, summary }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    if(summary) {
        setShowSummary(true);
    }
  };

  const currentStepContent = steps[currentStep];
  const StepIcon = currentStepContent.icon;

  if (showSummary && summary) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="bg-white p-8 rounded-xl shadow-2xl">
          <h1 className="text-3xl font-bold text-primary-dark mb-6 text-center">{title} - Summary</h1>
          <div className="prose prose-lg max-w-none text-secondary-dark mb-6 whitespace-pre-wrap">
            {summary}
          </div>
          <button
            onClick={() => setShowSummary(false)}
            className="mt-6 w-full px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary-dark transition-colors"
          >
            Back to Steps
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-2 text-center">{title}</h1>
        <p className="text-center text-secondary mb-8">Follow the steps below to learn.</p>
        
        <div className="border-2 border-primary-light p-6 rounded-lg bg-slate-50">
          <div className="flex items-start mb-4">
            {StepIcon && <StepIcon className="h-8 w-8 text-primary mr-3 flex-shrink-0 mt-1" />}
            <h2 className="text-2xl font-semibold text-primary-dark">{currentStepContent.title}</h2>
          </div>

          {currentStepContent.image && (
            <img 
              src={currentStepContent.image} 
              alt={currentStepContent.title} 
              className="w-full h-auto max-h-80 object-cover rounded-lg mb-6 shadow-md border border-gray-200" 
            />
          )}
          
          {typeof currentStepContent.details === 'string' ? (
            <p className="text-secondary-dark leading-relaxed">{currentStepContent.details}</p>
          ) : (
            <ul className="list-disc list-inside text-secondary-dark space-y-2 leading-relaxed">
              {currentStepContent.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          )}

          {currentStepContent.specialConsiderations && (
            <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <div className="flex">
                <div className="flex-shrink-0">
                  <InformationCircleIcon className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-blue-700">Special Considerations</h3>
                  <p className="text-sm text-blue-600">{currentStepContent.specialConsiderations}</p>
                </div>
              </div>
            </div>
          )}

          {currentStepContent.whatNotToDo && (
             <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded">
              <div className="flex">
                <div className="flex-shrink-0">
                  <XCircleIcon className="h-6 w-6 text-red-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-red-700">What NOT To Do</h3>
                  {Array.isArray(currentStepContent.whatNotToDo) ? (
                     <ul className="list-disc list-inside text-sm text-red-600 space-y-1">
                        {currentStepContent.whatNotToDo.map((item, idx) => <li key={idx}>{item}</li>)}
                     </ul>
                  ) : (
                     <p className="text-sm text-red-600">{currentStepContent.whatNotToDo}</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <StepNavigation
          currentStep={currentStep}
          totalSteps={steps.length}
          onNext={handleNext}
          onPrevious={handlePrevious}
          isCompletable={!!summary}
          onComplete={handleComplete}
        />
      </div>
    </div>
  );
};

export default CourseDisplayPage;

