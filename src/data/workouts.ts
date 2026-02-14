export interface Workout {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: 'strength' | 'cardio' | 'hiit' | 'yoga' | 'mobility';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
  calories: number;
  muscleGroups: string[];
  equipment: string[];
  thumbnail: string;
  videoUrl: string;
  trainer: string;
  exercises: Exercise[];
  chapters: Chapter[];
}

export interface Exercise {
  name: string;
  sets?: number;
  reps?: string;
  duration?: string;
  restTime?: string;
  instructions: string;
}

export interface Chapter {
  title: string;
  startTime: number;
  endTime: number;
}

export const workouts: Workout[] = [
  {
    id: '1',
    slug: 'full-body-hiit-blast',
    title: 'Full Body HIIT Blast',
    description: 'High-intensity interval training to torch calories and build endurance. This explosive workout combines cardio bursts with strength moves.',
    type: 'hiit',
    difficulty: 'intermediate',
    duration: 30,
    calories: 400,
    muscleGroups: ['Full Body', 'Core', 'Legs'],
    equipment: ['None'],
    thumbnail: '/placeholder.svg',
    videoUrl: 'https://example.com/video1.mp4',
    trainer: 'marcus-chen',
    exercises: [
      { name: 'Jumping Jacks', duration: '45s', restTime: '15s', instructions: 'Start with feet together, jump and spread legs while raising arms overhead.' },
      { name: 'Burpees', reps: '10', restTime: '20s', instructions: 'Drop to the floor, do a push-up, jump feet forward and explode upward.' },
      { name: 'Mountain Climbers', duration: '45s', restTime: '15s', instructions: 'In plank position, drive knees toward chest alternately at a fast pace.' },
      { name: 'Squat Jumps', reps: '15', restTime: '20s', instructions: 'Squat down then explode upward, landing softly back into squat position.' },
      { name: 'High Knees', duration: '45s', restTime: '15s', instructions: 'Run in place, driving knees high toward chest with each step.' },
    ],
    chapters: [
      { title: 'Warm-up', startTime: 0, endTime: 300 },
      { title: 'Main Workout', startTime: 300, endTime: 1500 },
      { title: 'Cool Down', startTime: 1500, endTime: 1800 },
    ],
  },
  {
    id: '2',
    slug: 'upper-body-strength',
    title: 'Upper Body Strength Builder',
    description: 'Build powerful shoulders, chest, and arms with this focused strength session using dumbbells.',
    type: 'strength',
    difficulty: 'intermediate',
    duration: 45,
    calories: 350,
    muscleGroups: ['Chest', 'Shoulders', 'Arms', 'Back'],
    equipment: ['Dumbbells', 'Bench'],
    thumbnail: '/placeholder.svg',
    videoUrl: 'https://example.com/video2.mp4',
    trainer: 'sarah-williams',
    exercises: [
      { name: 'Dumbbell Bench Press', sets: 4, reps: '10-12', restTime: '60s', instructions: 'Lie on bench, press dumbbells up from chest level until arms are extended.' },
      { name: 'Bent Over Rows', sets: 4, reps: '10-12', restTime: '60s', instructions: 'Hinge at hips, pull dumbbells to your sides, squeeze shoulder blades together.' },
      { name: 'Shoulder Press', sets: 3, reps: '12', restTime: '45s', instructions: 'Press dumbbells overhead from shoulder height until arms are fully extended.' },
      { name: 'Bicep Curls', sets: 3, reps: '12', restTime: '45s', instructions: 'Keep elbows stationary, curl dumbbells toward shoulders with controlled motion.' },
      { name: 'Tricep Dips', sets: 3, reps: '15', restTime: '45s', instructions: 'Lower body by bending elbows, then push back up to starting position.' },
    ],
    chapters: [
      { title: 'Warm-up', startTime: 0, endTime: 420 },
      { title: 'Chest & Back', startTime: 420, endTime: 1500 },
      { title: 'Shoulders & Arms', startTime: 1500, endTime: 2400 },
      { title: 'Cool Down', startTime: 2400, endTime: 2700 },
    ],
  },
  {
    id: '3',
    slug: 'core-crusher',
    title: 'Core Crusher',
    description: 'Sculpt and strengthen your entire core with this intense ab-focused workout.',
    type: 'strength',
    difficulty: 'advanced',
    duration: 20,
    calories: 200,
    muscleGroups: ['Core', 'Abs', 'Obliques'],
    equipment: ['Mat'],
    thumbnail: '/placeholder.svg',
    videoUrl: 'https://example.com/video3.mp4',
    trainer: 'marcus-chen',
    exercises: [
      { name: 'Plank Hold', duration: '60s', restTime: '15s', instructions: 'Maintain a straight line from head to heels, engage your core throughout.' },
      { name: 'Bicycle Crunches', reps: '20 each side', restTime: '15s', instructions: 'Twist to bring opposite elbow to knee while extending the other leg.' },
      { name: 'Leg Raises', reps: '15', restTime: '20s', instructions: 'Keep legs straight and lower back pressed to floor as you raise and lower legs.' },
      { name: 'Russian Twists', reps: '20 each side', restTime: '15s', instructions: 'Lean back slightly, rotate torso side to side while keeping core engaged.' },
    ],
    chapters: [
      { title: 'Activation', startTime: 0, endTime: 180 },
      { title: 'Main Core Work', startTime: 180, endTime: 1020 },
      { title: 'Stretch', startTime: 1020, endTime: 1200 },
    ],
  },
  {
    id: '4',
    slug: 'leg-day-power',
    title: 'Leg Day Power',
    description: 'Build powerful legs and glutes with this comprehensive lower body strength session.',
    type: 'strength',
    difficulty: 'advanced',
    duration: 50,
    calories: 450,
    muscleGroups: ['Quads', 'Hamstrings', 'Glutes', 'Calves'],
    equipment: ['Barbell', 'Dumbbells', 'Squat Rack'],
    thumbnail: '/placeholder.svg',
    videoUrl: 'https://example.com/video4.mp4',
    trainer: 'jake-morrison',
    exercises: [
      { name: 'Barbell Squats', sets: 5, reps: '8', restTime: '90s', instructions: 'Keep chest up, squat until thighs are parallel to floor, drive through heels.' },
      { name: 'Romanian Deadlifts', sets: 4, reps: '10', restTime: '75s', instructions: 'Hinge at hips with slight knee bend, lower weight along legs, feel hamstring stretch.' },
      { name: 'Walking Lunges', sets: 3, reps: '12 each leg', restTime: '60s', instructions: 'Step forward into lunge, keeping front knee over ankle, push through to next step.' },
      { name: 'Calf Raises', sets: 4, reps: '15', restTime: '45s', instructions: 'Rise onto toes, pause at top, lower slowly with control.' },
    ],
    chapters: [
      { title: 'Dynamic Warm-up', startTime: 0, endTime: 480 },
      { title: 'Heavy Compound Lifts', startTime: 480, endTime: 1800 },
      { title: 'Accessory Work', startTime: 1800, endTime: 2700 },
      { title: 'Cool Down & Stretch', startTime: 2700, endTime: 3000 },
    ],
  },
  {
    id: '5',
    slug: 'cardio-endurance',
    title: 'Cardio Endurance Builder',
    description: 'Improve your cardiovascular fitness and stamina with this steady-state cardio session.',
    type: 'cardio',
    difficulty: 'beginner',
    duration: 35,
    calories: 320,
    muscleGroups: ['Full Body', 'Heart'],
    equipment: ['None'],
    thumbnail: '/placeholder.svg',
    videoUrl: 'https://example.com/video5.mp4',
    trainer: 'emma-davis',
    exercises: [
      { name: 'March in Place', duration: '3 min', instructions: 'Lift knees high while swinging opposite arms, maintain steady pace.' },
      { name: 'Step Touch', duration: '3 min', instructions: 'Step side to side, adding arm movements to increase heart rate.' },
      { name: 'Low Impact Jacks', duration: '3 min', instructions: 'Step one foot out at a time while raising arms, gentler than jumping jacks.' },
      { name: 'Power Walk', duration: '15 min', instructions: 'Fast-paced walking with arm pumps, maintaining elevated heart rate.' },
    ],
    chapters: [
      { title: 'Warm-up', startTime: 0, endTime: 300 },
      { title: 'Main Cardio', startTime: 300, endTime: 1800 },
      { title: 'Cool Down', startTime: 1800, endTime: 2100 },
    ],
  },
  {
    id: '6',
    slug: 'yoga-flow',
    title: 'Energizing Yoga Flow',
    description: 'Balance strength and flexibility with this dynamic vinyasa yoga session.',
    type: 'yoga',
    difficulty: 'beginner',
    duration: 40,
    calories: 180,
    muscleGroups: ['Full Body', 'Core', 'Flexibility'],
    equipment: ['Yoga Mat'],
    thumbnail: '/placeholder.svg',
    videoUrl: 'https://example.com/video6.mp4',
    trainer: 'emma-davis',
    exercises: [
      { name: 'Sun Salutation A', reps: '5 rounds', instructions: 'Flow through mountain pose, forward fold, plank, cobra, downward dog sequence.' },
      { name: 'Warrior Sequence', duration: '10 min', instructions: 'Move through Warrior I, II, and III on each side, holding each pose for 5 breaths.' },
      { name: 'Balance Series', duration: '8 min', instructions: 'Practice tree pose and eagle pose, focusing on steady breath and core engagement.' },
      { name: 'Savasana', duration: '5 min', instructions: 'Lie flat on back, let all muscles relax, focus on deep breathing.' },
    ],
    chapters: [
      { title: 'Centering', startTime: 0, endTime: 300 },
      { title: 'Sun Salutations', startTime: 300, endTime: 900 },
      { title: 'Standing Poses', startTime: 900, endTime: 1800 },
      { title: 'Cool Down', startTime: 1800, endTime: 2400 },
    ],
  },
];

export const workoutTypes = ['strength', 'cardio', 'hiit', 'yoga', 'mobility'] as const;
export const difficultyLevels = ['beginner', 'intermediate', 'advanced'] as const;
export const muscleGroups = ['Full Body', 'Core', 'Legs', 'Chest', 'Back', 'Shoulders', 'Arms', 'Glutes', 'Abs'] as const;
export const equipmentOptions = ['None', 'Dumbbells', 'Barbell', 'Kettlebell', 'Resistance Bands', 'Mat', 'Bench', 'Pull-up Bar'] as const;
