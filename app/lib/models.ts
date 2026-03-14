export interface Topic {
  id: string;
  slug: string;
  title: string;
  description: string;
}

export interface Problem {
  id: string;
  topicId: string;
  slug: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}
