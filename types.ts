
import { SVGProps, FC } from 'react';

export interface StepContent {
  title: string;
  details: string | string[];
  image?: string; // URL for an image (e.g., from picsum)
  specialConsiderations?: string;
  whatNotToDo?: string | string[]; // Updated to allow string array
  visualDescription?: string; // For habit formation visualization
  icon?: FC<SVGProps<SVGSVGElement>>;
}

export interface CourseInfo {
  id: string;
  title: string;
  description: string;
  path: string;
  steps?: StepContent[];
  summary?: string; 
  interviewQuestions?: string[];
  icon?: FC<SVGProps<SVGSVGElement>>;
}

export interface FeedbackResponse {
  question: string;
  answer: string;
  feedback: string;
}

export enum Page {
  Home = '/',
  ChokingFirstAid = '/choking-first-aid',
  InterviewPrep = '/interview-prep',
  InterviewSimulator = '/interview-simulator',
  HabitFormation = '/habit-formation',
  VideoGen = '/video-gen',
}