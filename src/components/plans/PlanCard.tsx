import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Plan } from '@/data/plans';
import { Button } from '@/components/ui/button';

interface PlanCardProps {
  plan: Plan;
  index?: number;
}

export const PlanCard = ({ plan, index = 0 }: PlanCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className={`relative rounded-2xl overflow-hidden ${
        plan.popular
          ? 'bg-gradient-to-br from-primary/20 via-card to-card border-2 border-primary'
          : 'glass-card'
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-bl-xl">
          MOST POPULAR
        </div>
      )}

      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
          <p className="text-sm text-muted-foreground">{plan.description}</p>
        </div>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-black">${plan.price}</span>
            <span className="text-muted-foreground">/{plan.period}</span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          className={`w-full h-12 font-semibold ${
            plan.popular
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          }`}
        >
          {plan.popular ? 'Get Started Now' : 'Choose Plan'}
        </Button>
      </div>
    </motion.div>
  );
};
