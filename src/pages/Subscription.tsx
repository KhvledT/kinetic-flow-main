import { motion } from 'framer-motion';
import { Check, CreditCard, Calendar, AlertCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { plans } from '@/data/plans';
import { userSubscription } from '@/data/user';

const Subscription = () => {
  const currentPlan = plans.find((p) => p.name === userSubscription.plan);

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h1 className="text-4xl font-black mb-2">Subscription</h1>
            <p className="text-muted-foreground">Manage your plan and billing</p>
          </motion.div>

          {/* Current Plan */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-bold">{userSubscription.plan} Plan</h2>
                  <Badge className="bg-success/20 text-success border-success/30">Active</Badge>
                </div>
                <p className="text-muted-foreground">${userSubscription.price}/month</p>
              </div>
              <Button variant="outline">Change Plan</Button>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span>Next billing: {userSubscription.nextBillingDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-muted-foreground" />
                <span>•••• 4242</span>
              </div>
            </div>

            {currentPlan && (
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="font-semibold mb-4">Your Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {currentPlan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Billing History */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card p-6">
            <h2 className="text-xl font-bold mb-6">Billing History</h2>
            <div className="space-y-3">
              {userSubscription.billingHistory.map((entry) => (
                <div key={entry.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <div>
                    <div className="font-medium">{entry.invoice}</div>
                    <div className="text-sm text-muted-foreground">{entry.date}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold">${entry.amount}</span>
                    <Badge variant="secondary" className="capitalize">{entry.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cancel */}
          <div className="mt-8 p-4 rounded-xl border border-destructive/20 bg-destructive/5 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-destructive mt-0.5" />
            <div>
              <p className="text-sm font-medium">Cancel subscription</p>
              <p className="text-sm text-muted-foreground mb-3">You can cancel anytime. Your access will continue until the end of your billing period.</p>
              <Button variant="outline" size="sm" className="border-destructive/30 text-destructive hover:bg-destructive/10">Cancel Subscription</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Subscription;
