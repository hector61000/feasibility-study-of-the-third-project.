import { Project, ProjectCategory } from './types';

export const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: 'agriculture', label: 'مشروعات الزراعية' },
  { id: 'industrial', label: 'مشروعات صناعية' },
  { id: 'service', label: 'مشروعات خدمية' },
  { id: 'livestock', label: 'مشروعات حيوانية' },
];

export const SAMPLE_PROJECTS: Project[] = [
  // مشروعات زراعية
  {
    id: 1,
    title: 'مشروع زراعة البرتقال',
    description: '',
    capital: 50000,
    monthlyProfit: 10000,
    studyCost: 150,
    category: 'agriculture',
    imageUrl: '/images/مشروعات الزراعيه/البرتقال.png',
  },
  {
    id: 2,
    title: 'مشروع زراعة البطاطس',
    description: '',
    capital: 40000,
    monthlyProfit: 8000,
    studyCost: 150,
    category: 'agriculture',
    imageUrl: '/images/مشروعات الزراعيه/زراعة-البطاطس.png',
  },
  {
    id: 3,
    title: 'مشروع زراعة الموز',
    description: '',
    capital: 45000,
    monthlyProfit: 9000,
    studyCost: 150,
    category: 'agriculture',
    imageUrl: '/images/مشروعات الزراعيه/زراعة-الموز.png',
  },
  // مشروعات صناعية
  {
    id: 4,
    title: 'مشروع تصنيع الصابون',
    description: '',
    capital: 30000,
    monthlyProfit: 6000,
    studyCost: 150,
    category: 'industrial',
    imageUrl: '/images/مشروعات صناعيه/تصنيع-الصابون.png',
  },
  {
    id: 5,
    title: 'مشروع تصنيع العطور',
    description: '',
    capital: 35000,
    monthlyProfit: 7000,
    studyCost: 150,
    category: 'industrial',
    imageUrl: '/images/مشروعات صناعيه/تصنيع-العطور-ومستحضرات-التجميل.png',
  },
  {
    id: 6,
    title: 'مشروع تصنيع المجوهرات',
    description: '',
    capital: 60000,
    monthlyProfit: 12000,
    studyCost: 150,
    category: 'industrial',
    imageUrl: '/images/مشروعات صناعيه/تصنيع-المجوهرات.png',
  },
  // مشروعات خدمية
  {
    id: 7,
    title: 'مشروع خدمات التسويق',
    description: '',
    capital: 20000,
    monthlyProfit: 5000,
    studyCost: 150,
    category: 'service',
    imageUrl: '/images/المشاريع الخدمية/التسويق-والأعلانات.png',
  },
  {
    id: 8,
    title: 'صالون تجميل',
    description: '',
    capital: 25000,
    monthlyProfit: 6000,
    studyCost: 150,
    category: 'service',
    imageUrl: '/images/المشاريع الخدمية/صالون-تجميل.png',
  },
  {
    id: 9,
    title: 'مركز تدريب مهارات',
    description: '',
    capital: 40000,
    monthlyProfit: 8000,
    studyCost: 150,
    category: 'service',
    imageUrl: '/images/المشاريع الخدمية/مركز-تدريب-المهارات.png',
  },
  // مشروعات حيوانية
  {
    id: 10,
    title: 'مشروع تربية الأرانب',
    description: '',
    capital: 15000,
    monthlyProfit: 4000,
    studyCost: 150,
    category: 'livestock',
    imageUrl: '/images/مشاريع حيوانية ونباتيه/تربية-الأرانب.png',
  },
  {
    id: 11,
    title: 'مشروع تربية النحل',
    description: '',
    capital: 20000,
    monthlyProfit: 5000,
    studyCost: 150,
    category: 'livestock',
    imageUrl: '/images/مشاريع حيوانية ونباتيه/تربية-النحل.png',
  },
  {
    id: 12,
    title: 'مشروع تربية الدواجن',
    description: '',
    capital: 35000,
    monthlyProfit: 7000,
    studyCost: 150,
    category: 'livestock',
    imageUrl: '/images/مشاريع حيوانية ونباتيه/مشروع الدواجن.jpg',
  },
];