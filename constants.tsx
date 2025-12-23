
import React from 'react';
import { UserRole, Course, Startup } from './types';

export const THEME = {
  green: '#00885a',
  yellow: '#fcd116',
  red: '#da121a',
  slate: '#334155'
};

export const COURSES: Course[] = [
  { id: '1', title: 'Intro to AI for Kids', category: 'Kids', progress: 80, image: 'https://picsum.photos/seed/kids/400/250' },
  { id: '2', title: 'Python for Data Science', category: 'Youth', progress: 45, image: 'https://picsum.photos/seed/py/400/250' },
  { id: '3', title: 'Machine Learning Basics', category: 'Youth', progress: 10, image: 'https://picsum.photos/seed/ml/400/250' },
  { id: '4', title: 'Digital Literacy 101', category: 'General', progress: 100, image: 'https://picsum.photos/seed/dig/400/250' },
];

export const STARTUPS: Startup[] = [
  { id: 's1', title: 'AgriTech AI', founder: 'Abebe B.', description: 'Using computer vision to detect crop diseases in Teff.', tags: ['Agriculture', 'Vision'] },
  { id: 's2', title: 'HealthSync', founder: 'Marta K.', description: 'AI-driven diagnostic tool for remote health clinics.', tags: ['Healthcare', 'NLP'] },
  { id: 's3', title: 'Amharic Voice', founder: 'Yonas S.', description: 'High-quality TTS for local languages.', tags: ['Speech', 'Amharic'] },
];

export const NAV_LINKS = [
  { name: 'Home', path: '#home' },
  { name: 'Support', path: '#support' },
  { name: 'Education', path: '#education' },
  { name: 'Contribute', path: '#contribute' },
  { name: 'Innovation', path: '#innovation' },
];
