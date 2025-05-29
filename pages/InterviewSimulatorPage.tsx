
import React, { useState, useEffect, useCallback } from 'react';
import { INTERVIEW_QUESTIONS } from '../constants';
import { getInterviewFeedback } from '../services/geminiService';
import LoadingSpinner from '../components/LoadingSpinner';
import { ChatBubbleIcon } from '../components/IconComponents';

const InterviewSimulatorPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const currentQuestion = INTERVIEW_QUESTIONS[currentQuestionIndex];

  const fetchFeedback = useCallback(async () => {
    if (!answer.trim()) {
      setError('Please provide an answer before getting feedback.');
      setFeedback('');
      return;
    }
    setIsLoading(true);
    setError('');
    setFeedback('');
    try {
      const result = await getInterviewFeedback(currentQuestion, answer);
      setFeedback(result);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Failed to get feedback: ${errorMessage}`);
      setFeedback(''); // Clear previous feedback on new error
    } finally {
      setIsLoading(false);
    }
  }, [currentQuestion, answer]);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % INTERVIEW_QUESTIONS.length);
    setAnswer('');
    setFeedback('');
    setError('');
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex - 1 + INTERVIEW_QUESTIONS.length) % INTERVIEW_QUESTIONS.length);
    setAnswer('');
    setFeedback('');
    setError('');
  };
  
  // Clear feedback when question changes
  useEffect(() => {
    setFeedback('');
    setError('');
  }, [currentQuestionIndex]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl">
        <div className="flex items-center justify-center mb-6">
            <ChatBubbleIcon className="h-12 w-12 text-primary mr-3" />
            <h1 className="text-3xl sm:text-4xl font-bold text-primary-dark text-center">Interview Simulator</h1>
        </div>
        
        <div className="mb-6 p-6 bg-primary-light rounded-lg shadow">
          <h2 className="text-xl font-semibold text-primary-dark mb-2">Question {currentQuestionIndex + 1} of {INTERVIEW_QUESTIONS.length}:</h2>
          <p className="text-lg text-gray-800">{currentQuestion}</p>
        </div>

        <div className="mb-6">
          <label htmlFor="answer" className="block text-lg font-medium text-secondary-dark mb-2">Your Answer:</label>
          <textarea
            id="answer"
            value={answer}
            onChange={(e) => {
              setAnswer(e.target.value);
              if (error && e.target.value.trim()) setError(''); // Clear "provide answer" error on typing
            }}
            rows={6}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-shadow"
            placeholder="Type your answer here..."
          />
        </div>

        <button
          onClick={fetchFeedback}
          disabled={isLoading || !answer.trim()}
          className="w-full mb-4 px-6 py-3 bg-accent text-white font-semibold rounded-lg shadow hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? <LoadingSpinner /> : 'Get AI Feedback'}
        </button>

        <div className="flex justify-between mb-6">
            <button
                onClick={handlePreviousQuestion}
                className="px-6 py-2 bg-secondary text-white rounded-lg shadow hover:bg-secondary-dark transition-colors"
            >
                Previous Question
            </button>
            <button
                onClick={handleNextQuestion}
                className="px-6 py-2 bg-secondary text-white rounded-lg shadow hover:bg-secondary-dark transition-colors"
            >
                Next Question
            </button>
        </div>
        
        {error && (
          <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            <p className="font-semibold">Error</p>
            <p>{error}</p>
          </div>
        )}

        {feedback && !isLoading && (
          <div className="mt-6 p-6 bg-blue-50 border border-blue-300 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">AI Feedback:</h3>
            <div className="prose prose-sm max-w-none text-secondary-dark whitespace-pre-wrap">
              {feedback}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewSimulatorPage;
