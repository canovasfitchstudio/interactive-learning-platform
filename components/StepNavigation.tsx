
import React from 'react';

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  isCompletable?: boolean;
  onComplete?: () => void;
}

const StepNavigation: React.FC<StepNavigationProps> = ({ currentStep, totalSteps, onNext, onPrevious, isCompletable, onComplete }) => {
  return (
    <div className="mt-8 flex justify-between items-center">
      <button
        onClick={onPrevious}
        disabled={currentStep === 0}
        className="px-6 py-2 bg-secondary text-white rounded-lg shadow hover:bg-secondary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Previous
      </button>
      <span className="text-secondary-dark font-medium">Step {currentStep + 1} of {totalSteps}</span>
      {currentStep < totalSteps - 1 ? (
        <button
          onClick={onNext}
          className="px-6 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary-dark transition-colors"
        >
          Next
        </button>
      ) : (
        isCompletable && onComplete ? (
            <button
            onClick={onComplete}
            className="px-6 py-2 bg-accent text-white rounded-lg shadow hover:bg-emerald-600 transition-colors"
            >
            Show Summary
            </button>
        ) : (
            <span className="px-6 py-2 text-gray-400">End of Course</span>
        )
      )}
    </div>
  );
};

export default StepNavigation;
