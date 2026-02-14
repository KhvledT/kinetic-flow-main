import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Flame, Dumbbell, Play } from 'lucide-react';
import { Workout } from '@/data/workouts';
import { Badge } from '@/components/ui/badge';

interface WorkoutCardProps {
  workout: Workout;
  index?: number;
}

const typeColors = {
  strength: 'bg-coral/20 text-coral border-coral/30',
  cardio: 'bg-energy/20 text-energy border-energy/30',
  hiit: 'bg-primary/20 text-primary border-primary/30',
  yoga: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  mobility: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
};

const difficultyColors = {
  beginner: 'text-success',
  intermediate: 'text-energy',
  advanced: 'text-coral',
};

export const WorkoutCard = ({ workout, index = 0 }: WorkoutCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link to={`/workout/${workout.slug}`} className="block">
        <div className="glass-card overflow-hidden workout-card-hover">
          {/* Thumbnail */}
          <div className="relative aspect-video bg-muted overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-primary fill-primary" />
              </div>
            </div>
            <div className="absolute top-3 left-3 z-20">
              <Badge className={`${typeColors[workout.type]} border`}>
                {workout.type.toUpperCase()}
              </Badge>
            </div>
            <div className="absolute top-3 right-3 z-20">
              <span className={`text-xs font-semibold ${difficultyColors[workout.difficulty]}`}>
                {workout.difficulty.charAt(0).toUpperCase() + workout.difficulty.slice(1)}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
              {workout.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {workout.description}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{workout.duration} min</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-coral" />
                <span>{workout.calories} cal</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Dumbbell className="w-4 h-4" />
                <span>{workout.equipment[0]}</span>
              </div>
            </div>

            {/* Muscle Groups */}
            <div className="flex flex-wrap gap-2 mt-4">
              {workout.muscleGroups.slice(0, 3).map((group) => (
                <span
                  key={group}
                  className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                >
                  {group}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
