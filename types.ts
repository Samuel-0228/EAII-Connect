
export enum UserRole {
  PUBLIC = 'public',
  TRAINEE = 'trainee',
  TRAINER = 'trainer',
  ADMIN = 'admin'
}

export interface User {
  email: string;
  role: UserRole;
  name: string;
}

export interface Course {
  id: string;
  title: string;
  category: 'Kids' | 'Youth' | 'General';
  progress: number;
  image: string;
}

export interface Contribution {
  id: string;
  type: 'image' | 'text' | 'voice';
  status: 'pending' | 'approved' | 'rejected';
  date: string;
  label?: string;
}

export interface Startup {
  id: string;
  title: string;
  founder: string;
  description: string;
  tags: string[];
}
