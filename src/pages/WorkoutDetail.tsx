import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Flame, Dumbbell, Play, ChevronRight, User, Star } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { workouts } from '@/data/workouts';
import { trainers } from '@/data/trainers';

const typeColors = {
  strength: 'bg-coral/20 text-coral border-coral/30',
  cardio: 'bg-energy/20 text-energy border-energy/30',
  hiit: 'bg-primary/20 text-primary border-primary/30',
  yoga: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  mobility: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
};

const WorkoutDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const workout = workouts.find((w) => w.slug === slug);
  const trainer = workout ? trainers.find((t) => t.slug === workout.trainer) : null;

  if (!workout) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Workout not found</h1>
          <Button asChild>
            <Link to="/workouts">Back to Workouts</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/workouts">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Workouts
          </Link>
        </Button>
      </div>

      {/* Hero */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl bg-muted overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Badge className={`${typeColors[workout.type]} border`}>
                      {workout.type.toUpperCase()}
                    </Badge>
                    <span className="text-muted-foreground">•</span>
                    <span className="capitalize">{workout.difficulty}</span>
                  </div>
                </div>
              </div>

              {/* Chapters */}
              <div className="mt-6 glass-card p-4">
                <h3 className="font-semibold mb-4">Chapters</h3>
                <div className="space-y-2">
                  {workout.chapters.map((chapter, i) => (
                    <button
                      key={i}
                      className="w-full flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold text-primary">
                          {i + 1}
                        </div>
                        <div>
                          <div className="font-medium">{chapter.title}</div>
                          <div className="text-xs text-muted-foreground">
                            {Math.floor(chapter.startTime / 60)}:00 - {Math.floor(chapter.endTime / 60)}:00
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-3xl md:text-4xl font-black mb-4">{workout.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{workout.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="glass-card p-4 text-center">
                  <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{workout.duration}</div>
                  <div className="text-sm text-muted-foreground">Minutes</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <Flame className="w-6 h-6 text-coral mx-auto mb-2" />
                  <div className="text-2xl font-bold">{workout.calories}</div>
                  <div className="text-sm text-muted-foreground">Calories</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <Dumbbell className="w-6 h-6 text-energy mx-auto mb-2" />
                  <div className="text-2xl font-bold">{workout.exercises.length}</div>
                  <div className="text-sm text-muted-foreground">Exercises</div>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Target Muscles</h3>
                <div className="flex flex-wrap gap-2">
                  {workout.muscleGroups.map((group) => (
                    <Badge key={group} variant="secondary">{group}</Badge>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Equipment Needed</h3>
                <div className="flex flex-wrap gap-2">
                  {workout.equipment.map((item) => (
                    <Badge key={item} variant="outline">{item}</Badge>
                  ))}
                </div>
              </div>

              {/* Trainer */}
              {trainer && (
                <Link to={`/trainer/${trainer.slug}`} className="glass-card p-4 flex items-center gap-4 mb-8 hover:border-primary/50 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-muted overflow-hidden flex items-center justify-center">
                    <User className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{trainer.name}</div>
                    <div className="text-sm text-muted-foreground">{trainer.title}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-energy fill-energy" />
                    <span className="font-semibold">{trainer.rating}</span>
                  </div>
                </Link>
              )}

              {/* CTA */}
              <Button size="lg" className="w-full h-14 bg-primary text-primary-foreground text-lg font-semibold glow-effect">
                <Play className="w-5 h-5 mr-2 fill-primary-foreground" />
                Start Workout
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exercises */}
      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Exercises</h2>

          <div className="space-y-4">
            {workout.exercises.map((exercise, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-xl font-bold text-primary flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{exercise.name}</h3>
                    <p className="text-muted-foreground mb-4">{exercise.instructions}</p>

                    <div className="flex flex-wrap gap-4 text-sm">
                      {exercise.sets && (
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">Sets:</span>
                          <span className="font-medium">{exercise.sets}</span>
                        </div>
                      )}
                      {exercise.reps && (
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">Reps:</span>
                          <span className="font-medium">{exercise.reps}</span>
                        </div>
                      )}
                      {exercise.duration && (
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-medium">{exercise.duration}</span>
                        </div>
                      )}
                      {exercise.restTime && (
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">Rest:</span>
                          <span className="font-medium">{exercise.restTime}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WorkoutDetail;
