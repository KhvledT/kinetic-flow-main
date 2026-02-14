import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Users, PlayCircle, Instagram, Youtube, Twitter, Award, Quote } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { WorkoutCard } from '@/components/workout/WorkoutCard';
import { trainers } from '@/data/trainers';
import { workouts } from '@/data/workouts';

const TrainerDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const trainer = trainers.find((t) => t.slug === slug);
  const trainerWorkouts = trainer ? workouts.filter((w) => w.trainer === trainer.slug) : [];

  if (!trainer) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Trainer not found</h1>
          <Button asChild>
            <Link to="/trainers">Back to Trainers</Link>
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
          <Link to="/trainers">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Trainers
          </Link>
        </Button>
      </div>

      {/* Hero */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="aspect-[3/4] rounded-2xl bg-muted overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-6">
                {trainer.socialLinks.instagram && (
                  <a
                    href={trainer.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
                {trainer.socialLinks.youtube && (
                  <a
                    href={trainer.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                )}
                {trainer.socialLinks.twitter && (
                  <a
                    href={trainer.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <h1 className="text-3xl md:text-4xl font-black">{trainer.name}</h1>
                <div className="flex items-center gap-1 bg-energy/20 text-energy px-3 py-1 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4 fill-energy" />
                  {trainer.rating}
                </div>
              </div>

              <p className="text-xl text-primary font-medium mb-6">{trainer.title}</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="glass-card p-4 text-center">
                  <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{(trainer.followers / 1000).toFixed(0)}K</div>
                  <div className="text-sm text-muted-foreground">Followers</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <PlayCircle className="w-6 h-6 text-coral mx-auto mb-2" />
                  <div className="text-2xl font-bold">{trainer.workoutCount}</div>
                  <div className="text-sm text-muted-foreground">Workouts</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <Award className="w-6 h-6 text-energy mx-auto mb-2" />
                  <div className="text-2xl font-bold">{trainer.credentials.length}</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
              </div>

              {/* Expertise */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {trainer.expertise.map((skill) => (
                    <Badge key={skill} className="bg-primary/20 text-primary border border-primary/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <div className="mb-8">
                <h3 className="font-semibold mb-3">About</h3>
                <p className="text-muted-foreground leading-relaxed">{trainer.bio}</p>
              </div>

              {/* Philosophy */}
              <div className="glass-card p-6 relative overflow-hidden">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20" />
                <div className="relative">
                  <h3 className="font-semibold mb-3">Training Philosophy</h3>
                  <p className="text-muted-foreground italic leading-relaxed">"{trainer.philosophy}"</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Credentials & Certifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {trainer.credentials.map((credential, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium">{credential}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer's Workouts */}
      {trainerWorkouts.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Workouts by {trainer.name}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainerWorkouts.map((workout, i) => (
                <WorkoutCard key={workout.id} workout={workout} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default TrainerDetail;
