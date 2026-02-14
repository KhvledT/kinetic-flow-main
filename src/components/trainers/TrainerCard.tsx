import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Users, PlayCircle } from 'lucide-react';
import { Trainer } from '@/data/trainers';

interface TrainerCardProps {
  trainer: Trainer;
  index?: number;
}

export const TrainerCard = ({ trainer, index = 0 }: TrainerCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link to={`/trainer/${trainer.slug}`} className="block">
        <div className="glass-card overflow-hidden workout-card-hover">
          {/* Photo */}
          <div className="relative aspect-[4/5] bg-muted overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
              <p className="text-sm text-primary font-medium">{trainer.title}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Stats */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-energy fill-energy" />
                <span className="font-semibold text-foreground">{trainer.rating}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                <span>{(trainer.followers / 1000).toFixed(0)}K</span>
              </div>
              <div className="flex items-center gap-1.5">
                <PlayCircle className="w-4 h-4" />
                <span>{trainer.workoutCount} workouts</span>
              </div>
            </div>

            {/* Expertise */}
            <div className="flex flex-wrap gap-2">
              {trainer.expertise.slice(0, 3).map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
