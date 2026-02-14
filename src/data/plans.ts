export interface Plan {
  id: string;
  name: string;
  price: number;
  period: 'month' | 'year';
  description: string;
  features: string[];
  popular?: boolean;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export const plans: Plan[] = [
  {
    id: 'beginner',
    name: 'Starter',
    price: 19,
    period: 'month',
    level: 'beginner',
    description: 'Perfect for fitness beginners looking to build healthy habits.',
    features: [
      'Access to 50+ beginner workouts',
      'Basic progress tracking',
      'Weekly workout plans',
      'Community forum access',
      'Mobile app access',
    ],
  },
  {
    id: 'intermediate',
    name: 'Pro',
    price: 39,
    period: 'month',
    level: 'intermediate',
    description: 'For dedicated athletes ready to take their training to the next level.',
    features: [
      'All Starter features',
      '200+ workouts across all levels',
      'Advanced progress analytics',
      'Custom workout builder',
      'Live group sessions',
      'Nutrition guidance',
      'Priority support',
    ],
    popular: true,
  },
  {
    id: 'advanced',
    name: 'Elite',
    price: 79,
    period: 'month',
    level: 'advanced',
    description: 'The ultimate experience for serious athletes and competitors.',
    features: [
      'All Pro features',
      'Unlimited access to all content',
      '1-on-1 trainer consultations',
      'Personalized training programs',
      'Advanced AI workout builder',
      'Recovery & mobility programs',
      'Exclusive challenges & rewards',
      'Early access to new features',
    ],
  },
];

export const challenges = [
  {
    id: '1',
    title: '30-Day Shred Challenge',
    description: 'Transform your body in 30 days with daily workouts and nutrition tips.',
    participants: 12453,
    daysRemaining: 18,
    reward: 'Elite Badge + 1 Month Free',
  },
  {
    id: '2',
    title: 'Core Crusher Challenge',
    description: 'Build a rock-solid core with our 2-week intensive ab program.',
    participants: 8721,
    daysRemaining: 6,
    reward: 'Core Master Badge',
  },
  {
    id: '3',
    title: 'January Strength Sprint',
    description: 'Hit your 2024 strength goals with this 4-week progressive program.',
    participants: 15892,
    daysRemaining: 24,
    reward: 'Strength Pioneer Badge + Merch Discount',
  },
];
