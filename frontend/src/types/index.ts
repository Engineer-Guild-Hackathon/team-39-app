export interface Problem {
  id: string;
  title: string;
  os: string;
  hardware: string;
  language: string;
  description: string;
  solution: string;
  tags: string[];
  createdAt: string;
  userId: string;
  author: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  defaultEnvironment: {
    os: string;
    hardware: string;
    language: string;
  };
  favorites: string[];
}

export interface SearchFilters {
  query: string;
  os: string;
  hardware: string;
  language: string;
}