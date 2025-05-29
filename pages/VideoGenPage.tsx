
import React, { useState } from 'react';
import { VideoCameraIcon } from '../components/IconComponents';
import LoadingSpinner from '../components/LoadingSpinner';

const VideoGenPage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideoPlaceholder, setGeneratedVideoPlaceholder] = useState<string | null>(null);

  const handleGenerateVideo = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setGeneratedVideoPlaceholder(null);
    // Simulate AI video generation
    setTimeout(() => {
      setIsGenerating(false);
      // Placeholder for a generated video - using a relevant image from picsum
      setGeneratedVideoPlaceholder(`https://picsum.photos/seed/${encodeURIComponent(prompt)}/800/450`);
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl">
        <div className="flex items-center justify-center mb-6">
            <VideoCameraIcon className="h-12 w-12 text-primary mr-3" />
            <h1 className="text-3xl sm:text-4xl font-bold text-primary-dark text-center">AI Video Generation (Conceptual)</h1>
        </div>
        
        <p className="text-center text-secondary-dark mb-8">
          This feature conceptualizes AI-powered video generation (e.g., using Veo 2 in AI Studio) to create short video clips for learning. 
          Enter a prompt below to simulate the process.
        </p>

        <div className="mb-6">
          <label htmlFor="videoPrompt" className="block text-lg font-medium text-secondary-dark mb-2">Video Prompt:</label>
          <textarea
            id="videoPrompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-shadow"
            placeholder="e.g., 'Demonstration of proper hand placement for Heimlich maneuver'"
          />
        </div>

        <button
          onClick={handleGenerateVideo}
          disabled={isGenerating || !prompt.trim()}
          className="w-full mb-6 px-6 py-3 bg-accent text-white font-semibold rounded-lg shadow hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isGenerating ? <LoadingSpinner /> : 'Generate Video (Simulated)'}
        </button>

        {isGenerating && (
          <div className="text-center text-secondary-dark my-4">
            <p>Simulating video generation... please wait.</p>
          </div>
        )}

        {generatedVideoPlaceholder && !isGenerating && (
          <div className="mt-8 p-4 border-2 border-dashed border-primary-light rounded-lg bg-slate-50">
            <h3 className="text-xl font-semibold text-primary-dark mb-4 text-center">Generated Video Placeholder:</h3>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md overflow-hidden shadow-lg">
              <img 
                src={generatedVideoPlaceholder} 
                alt={`Placeholder for video: ${prompt}`} 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-secondary-dark mt-2 text-center">
              This is a static image representing the AI-generated video for your prompt: "{prompt}".
            </p>
          </div>
        )}
         <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700">
            <p className="font-bold">Note:</p>
            <p>Actual integration with AI video generation models like Veo 2 would require backend infrastructure and API access beyond the scope of this frontend demonstration.</p>
        </div>
      </div>
    </div>
  );
};

export default VideoGenPage;
