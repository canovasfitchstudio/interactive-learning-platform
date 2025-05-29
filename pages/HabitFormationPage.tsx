
import React, { useState } from 'react';
import { HABIT_FORMATION_STEPS } from '../constants';
import { BrainIcon, CheckCircleIcon } from '../components/IconComponents';

const HabitFormationPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNextStep = () => {
    setActiveStep(prev => (prev < HABIT_FORMATION_STEPS.length - 1 ? prev + 1 : prev));
  };

  const handlePreviousStep = () => {
    setActiveStep(prev => (prev > 0 ? prev - 1 : prev));
  };

  const handleReset = () => {
    setActiveStep(0);
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl">
        <div className="flex items-center justify-center mb-6">
            <BrainIcon className="h-12 w-12 text-primary mr-3" />
            <h1 className="text-3xl sm:text-4xl font-bold text-primary-dark text-center">Habit Formation in the Brain</h1>
        </div>
        <p className="text-center text-secondary-dark mb-8">
          Visualize the step-by-step process of how habits are formed. Click through the stages.
        </p>

        <div className="relative min-h-[450px] sm:min-h-[500px] p-4 border-2 border-primary-light rounded-lg bg-slate-50 overflow-hidden">
          {HABIT_FORMATION_STEPS.map((step, index) => {
            const StepIcon = step.icon || BrainIcon; // Default to BrainIcon if specific not provided
            const isActive = index === activeStep;
            return (
              <div
                key={step.title}
                className={`absolute inset-0 p-6 flex flex-col items-center justify-center text-center transition-all duration-700 ease-in-out ${
                  isActive ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 -translate-x-full z-0'
                } ${index < activeStep && !isActive ? 'translate-x-full' : ''} `}
                style={{transitionDelay: isActive ? '0.3s' : '0s'}} // Delay entry animation
              >
                {step.image && (
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="max-w-xs sm:max-w-sm w-full h-auto max-h-60 object-contain rounded-lg mb-4 shadow-md"
                  />
                )}
                <div className="flex items-center text-primary mb-2">
                   <StepIcon className="h-8 w-8 mr-2" />
                   <h2 className="text-xl sm:text-2xl font-semibold">{step.title}</h2>
                </div>
                <p className="text-secondary-dark text-sm sm:text-base mb-2">{step.details}</p>
                {step.visualDescription && (
                  <p className="text-sm text-primary-dark italic">Visual Cue: {step.visualDescription}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={handlePreviousStep}
            disabled={activeStep === 0}
            className="w-full sm:w-auto px-6 py-3 bg-secondary text-white rounded-lg shadow hover:bg-secondary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous Stage
          </button>
          <div className="text-secondary-dark font-medium">
            Stage {activeStep + 1} of {HABIT_FORMATION_STEPS.length}
          </div>
          {activeStep < HABIT_FORMATION_STEPS.length -1 ? (
            <button
                onClick={handleNextStep}
                className="w-full sm:w-auto px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary-dark transition-colors"
            >
                Next Stage
            </button>
          ) : (
            <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 bg-accent text-white rounded-lg shadow hover:bg-emerald-600 transition-colors flex items-center justify-center"
            >
                <CheckCircleIcon className="h-5 w-5 mr-2"/> Restart Visualization
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HabitFormationPage;
