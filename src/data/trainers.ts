export interface Trainer {
  id: string;
  slug: string;
  name: string;
  title: string;
  expertise: string[];
  bio: string;
  philosophy: string;
  photo: string;
  credentials: string[];
  workoutCount: number;
  followers: number;
  rating: number;
  socialLinks: {
    instagram?: string;
    youtube?: string;
    twitter?: string;
  };
}

export const trainers: Trainer[] = [
  {
    id: '1',
    slug: 'marcus-chen',
    name: 'Marcus Chen',
    title: 'HIIT & Strength Specialist',
    expertise: ['HIIT', 'Strength Training', 'Athletic Performance'],
    bio: 'Marcus is a certified personal trainer with over 10 years of experience in high-intensity training and athletic conditioning. Former competitive athlete turned fitness coach, he brings intensity and precision to every workout.',
    philosophy: 'I believe in pushing limits while respecting your body. Every rep counts, every second matters. My goal is to help you discover strength you never knew you had.',
    photo: '/placeholder.svg',
    credentials: ['NASM Certified Personal Trainer', 'CrossFit Level 2', 'Sports Nutrition Specialist'],
    workoutCount: 45,
    followers: 125000,
    rating: 4.9,
    socialLinks: {
      instagram: 'https://instagram.com/marcuschen',
      youtube: 'https://youtube.com/marcuschen',
    },
  },
  {
    id: '2',
    slug: 'sarah-williams',
    name: 'Sarah Williams',
    title: 'Strength & Conditioning Coach',
    expertise: ['Strength Training', 'Powerlifting', 'Body Recomposition'],
    bio: 'Sarah is a competitive powerlifter and strength coach who has helped hundreds of clients transform their physiques. She specializes in building lean muscle and functional strength.',
    philosophy: 'Strong is the new beautiful. I focus on progressive overload and proper form to help you build lasting strength. No shortcuts, just consistent hard work.',
    photo: '/placeholder.svg',
    credentials: ['CSCS Certified', 'USA Powerlifting Coach', 'Precision Nutrition Level 1'],
    workoutCount: 38,
    followers: 98000,
    rating: 4.8,
    socialLinks: {
      instagram: 'https://instagram.com/sarahwilliams',
      youtube: 'https://youtube.com/sarahwilliams',
    },
  },
  {
    id: '3',
    slug: 'jake-morrison',
    name: 'Jake Morrison',
    title: 'Athletic Performance Coach',
    expertise: ['Athletic Training', 'Explosiveness', 'Sports Performance'],
    bio: 'Jake trained professional athletes before bringing his elite methods to everyday fitness enthusiasts. His workouts are designed to build explosive power and athletic ability.',
    philosophy: 'Train like an athlete, move like an athlete. Every workout should make you more capable in life, not just in the gym.',
    photo: '/placeholder.svg',
    credentials: ['EXOS Performance Specialist', 'ACE Certified', 'TRX Certified'],
    workoutCount: 32,
    followers: 76000,
    rating: 4.9,
    socialLinks: {
      instagram: 'https://instagram.com/jakemorrison',
    },
  },
  {
    id: '4',
    slug: 'emma-davis',
    name: 'Emma Davis',
    title: 'Yoga & Wellness Instructor',
    expertise: ['Yoga', 'Mobility', 'Mindfulness', 'Recovery'],
    bio: 'Emma is a 500-hour certified yoga teacher who combines traditional yoga practices with modern fitness science. She helps clients find balance between intensity and recovery.',
    philosophy: 'Movement is medicine. I believe in honoring your body through mindful practice while still challenging yourself to grow. Balance is key to long-term success.',
    photo: '/placeholder.svg',
    credentials: ['RYT 500', 'Mobility Specialist', 'Meditation Teacher'],
    workoutCount: 52,
    followers: 145000,
    rating: 4.9,
    socialLinks: {
      instagram: 'https://instagram.com/emmadavis',
      youtube: 'https://youtube.com/emmadavis',
      twitter: 'https://twitter.com/emmadavis',
    },
  },
];
