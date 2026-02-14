import { motion } from 'framer-motion';
import { Trophy, Users, Medal, ArrowRight } from 'lucide-react';
import { challenges } from '@/data/plans';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export const CommunityChallenge = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Community <span className="gradient-text">Challenges</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of members in monthly fitness challenges. Compete, earn badges, and stay motivated together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 relative overflow-hidden group hover:border-primary/50 transition-colors"
            >
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors" />

              {/* Badge icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-2">{challenge.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {challenge.description}
              </p>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-muted-foreground">Days remaining</span>
                  <span className="text-primary font-semibold">{challenge.daysRemaining} days</span>
                </div>
                <Progress 
                  value={((30 - challenge.daysRemaining) / 30) * 100} 
                  className="h-2 bg-secondary"
                />
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{challenge.participants.toLocaleString()} joined</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Medal className="w-4 h-4 text-energy" />
                  <span className="text-energy font-medium">Reward</span>
                </div>
              </div>

              {/* Reward */}
              <div className="text-xs text-muted-foreground bg-secondary/50 rounded-lg px-3 py-2 mb-4">
                🏆 {challenge.reward}
              </div>

              {/* CTA */}
              <Button 
                variant="ghost" 
                className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              >
                Join Challenge
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
