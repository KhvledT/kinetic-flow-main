import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Zap, Users, Trophy, Flame, Clock, Star } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { PlanCard } from '@/components/plans/PlanCard';
import { WorkoutCard } from '@/components/workout/WorkoutCard';
import { TrainerCard } from '@/components/trainers/TrainerCard';
import { CommunityChallenge } from '@/components/challenges/CommunityChallenge';
import { AIWorkoutBuilder } from '@/components/ai/AIWorkoutBuilder';
import { plans } from '@/data/plans';
import { workouts } from '@/data/workouts';
import { trainers } from '@/data/trainers';
import heroImage from '@/assets/hero-fitness.jpg';

const stats = [
  { value: '500+', label: 'Workouts', icon: Flame },
  { value: '50K+', label: 'Members', icon: Users },
  { value: '25+', label: 'Expert Trainers', icon: Trophy },
  { value: '24/7', label: 'Access', icon: Clock },
];

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Lost 30 lbs in 3 months',
    quote: 'PulseFit changed my life. The trainers are incredible and the workouts keep me motivated every single day.',
    rating: 5,
  },
  {
    name: 'James K.',
    role: 'Marathon Runner',
    quote: 'The variety of workouts and the quality of instruction is unmatched. I\'ve improved my endurance significantly.',
    rating: 5,
  },
  {
    name: 'Michelle T.',
    role: 'Fitness Enthusiast',
    quote: 'Finally a platform that understands what real fitness looks like. The AI workout builder is a game-changer!',
    rating: 5,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Fitness Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                #1 Fitness Platform for Results
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Get Stronger.
                <br />
                <span className="gradient-text">Get Faster.</span>
                <br />
                Get Results.
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                Transform your body with expert-led workouts, personalized training plans, 
                and a community that pushes you to be your best.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg font-semibold glow-effect" asChild>
                  <Link to="/subscription">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold border-border bg-background/50 backdrop-blur-sm" asChild>
                  <Link to="/workouts">
                    <Play className="w-5 h-5 mr-2" />
                    Browse Workouts
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {stats.map((stat, i) => (
                <div key={i} className="glass-card p-4 text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-black">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Workouts */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Featured <span className="gradient-text">Workouts</span>
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Expertly designed programs to help you reach your fitness goals, no matter your level.
              </p>
            </div>
            <Button variant="ghost" className="mt-4 md:mt-0" asChild>
              <Link to="/workouts">
                View All Workouts
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workouts.slice(0, 3).map((workout, i) => (
              <WorkoutCard key={workout.id} workout={workout} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Workout Builder */}
      <AIWorkoutBuilder />

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Choose Your <span className="gradient-text">Plan</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible plans designed to fit your fitness journey, from beginners to elite athletes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <PlanCard key={plan.id} plan={plan} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Community Challenges */}
      <CommunityChallenge />

      {/* Trainers */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Meet Our <span className="gradient-text">Trainers</span>
              </h2>
              <p className="text-muted-foreground max-w-xl">
                World-class coaches dedicated to helping you achieve your fitness goals.
              </p>
            </div>
            <Button variant="ghost" className="mt-4 md:mt-0" asChild>
              <Link to="/trainers">
                View All Trainers
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((trainer, i) => (
              <TrainerCard key={trainer.id} trainer={trainer} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Real <span className="gradient-text">Results</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands who have transformed their lives with PulseFit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-energy fill-energy" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-primary">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-card to-card p-12 md:p-20 text-center"
          >
            {/* Glow effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-coral/20 blur-[120px] rounded-full" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Ready to Transform?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start your 7-day free trial today. No credit card required.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-lg font-semibold glow-effect" asChild>
                <Link to="/subscription">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
