export interface UserProgress {
  totalWorkouts: number;
  currentStreak: number;
  longestStreak: number;
  totalMinutes: number;
  totalCalories: number;
  weeklyGoal: number;
  weeklyCompleted: number;
  badges: Badge[];
  recentWorkouts: RecentWorkout[];
  weeklyProgress: WeeklyData[];
  habits: Habit[];
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  earnedDate: string;
}

export interface RecentWorkout {
  id: string;
  workoutId: string;
  title: string;
  date: string;
  duration: number;
  calories: number;
}

export interface WeeklyData {
  day: string;
  workouts: number;
  minutes: number;
  calories: number;
}

export interface Habit {
  id: string;
  name: string;
  icon: string;
  completed: boolean[];
  target: number;
}

export const userProgress: UserProgress = {
  totalWorkouts: 147,
  currentStreak: 12,
  longestStreak: 28,
  totalMinutes: 8420,
  totalCalories: 89500,
  weeklyGoal: 5,
  weeklyCompleted: 3,
  badges: [
    { id: '1', name: 'Early Bird', icon: '🌅', earnedDate: '2024-01-05' },
    { id: '2', name: '7 Day Streak', icon: '🔥', earnedDate: '2024-01-10' },
    { id: '3', name: 'Century Club', icon: '💯', earnedDate: '2024-01-15' },
    { id: '4', name: 'Iron Will', icon: '💪', earnedDate: '2024-01-18' },
  ],
  recentWorkouts: [
    { id: '1', workoutId: '1', title: 'Full Body HIIT Blast', date: '2024-01-20', duration: 30, calories: 400 },
    { id: '2', workoutId: '2', title: 'Upper Body Strength', date: '2024-01-19', duration: 45, calories: 350 },
    { id: '3', workoutId: '3', title: 'Core Crusher', date: '2024-01-18', duration: 20, calories: 200 },
    { id: '4', workoutId: '5', title: 'Cardio Endurance', date: '2024-01-17', duration: 35, calories: 320 },
  ],
  weeklyProgress: [
    { day: 'Mon', workouts: 1, minutes: 45, calories: 400 },
    { day: 'Tue', workouts: 1, minutes: 30, calories: 350 },
    { day: 'Wed', workouts: 0, minutes: 0, calories: 0 },
    { day: 'Thu', workouts: 1, minutes: 50, calories: 450 },
    { day: 'Fri', workouts: 0, minutes: 0, calories: 0 },
    { day: 'Sat', workouts: 0, minutes: 0, calories: 0 },
    { day: 'Sun', workouts: 0, minutes: 0, calories: 0 },
  ],
  habits: [
    { id: '1', name: 'Workout', icon: '💪', completed: [true, true, false, true, false, false, false], target: 5 },
    { id: '2', name: 'Water', icon: '💧', completed: [true, true, true, true, true, false, false], target: 7 },
    { id: '3', name: 'Sleep 7h+', icon: '😴', completed: [true, false, true, true, true, false, false], target: 7 },
    { id: '4', name: 'Stretch', icon: '🧘', completed: [true, true, true, false, false, false, false], target: 5 },
  ],
};

export interface Subscription {
  plan: string;
  status: 'active' | 'cancelled' | 'expired';
  nextBillingDate: string;
  price: number;
  billingHistory: BillingEntry[];
}

export interface BillingEntry {
  id: string;
  date: string;
  amount: number;
  status: 'paid' | 'pending' | 'failed';
  invoice: string;
}

export const userSubscription: Subscription = {
  plan: 'Pro',
  status: 'active',
  nextBillingDate: '2024-02-20',
  price: 39,
  billingHistory: [
    { id: '1', date: '2024-01-20', amount: 39, status: 'paid', invoice: 'INV-001' },
    { id: '2', date: '2023-12-20', amount: 39, status: 'paid', invoice: 'INV-002' },
    { id: '3', date: '2023-11-20', amount: 39, status: 'paid', invoice: 'INV-003' },
    { id: '4', date: '2023-10-20', amount: 39, status: 'paid', invoice: 'INV-004' },
  ],
};
