export type ProjectCategory = 'agriculture' | 'industrial' | 'service' | 'livestock';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: ProjectCategory;
  capital: number;
  monthlyProfit: number;
  studyCost: number;
}