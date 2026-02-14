import { motion } from 'framer-motion';
import { Flame, Clock, Trophy, Target, TrendingUp, Calendar, Zap } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Progress } from '@/components/ui/progress';
import { userProgress } from '@/data/user';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const Dashboard = () => {
  const { totalWorkouts, currentStreak, totalMinutes, totalCalories, weeklyGoal, weeklyCompleted, badges, recentWorkouts, weeklyProgress, habits } = userProgress;

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h1 className="text-4xl font-black mb-2">Welcome back! 💪</h1>
            <p className="text-muted-foreground">You're on a {currentStreak}-day streak. Keep pushing!</p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total Workouts', value: totalWorkouts, icon: Flame, color: 'text-coral' },
              { label: 'Current Streak', value: `${currentStreak} days`, icon: Zap, color: 'text-primary' },
              { label: 'Minutes Trained', value: totalMinutes.toLocaleString(), icon: Clock, color: 'text-energy' },
              { label: 'Calories Burned', value: totalCalories.toLocaleString(), icon: TrendingUp, color: 'text-success' },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card p-6">
                <stat.icon className={`w-6 h-6 ${stat.color} mb-3`} />
                <div className="text-2xl font-black">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Weekly Goal */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Weekly Goal</h3>
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div className="text-3xl font-black mb-2">{weeklyCompleted}/{weeklyGoal}</div>
              <Progress value={(weeklyCompleted / weeklyGoal) * 100} className="h-3 mb-2" />
              <p className="text-sm text-muted-foreground">{weeklyGoal - weeklyCompleted} more workouts to reach your goal</p>
            </motion.div>

            {/* Weekly Chart */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card p-6 lg:col-span-2">
              <h3 className="font-semibold mb-4">This Week</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyProgress}>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                    <YAxis hide />
                    <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 8 }} />
                    <Bar dataKey="minutes" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Habits */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card p-6">
              <h3 className="font-semibold mb-4">Daily Habits</h3>
              <div className="space-y-4">
                {habits.map((habit) => (
                  <div key={habit.id}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">{habit.icon} {habit.name}</span>
                      <span className="text-xs text-muted-foreground">{habit.completed.filter(Boolean).length}/{habit.target}</span>
                    </div>
                    <div className="flex gap-1">
                      {habit.completed.map((done, i) => (
                        <div key={i} className={`h-2 flex-1 rounded-full ${done ? 'bg-primary' : 'bg-secondary'}`} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Badges */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Badges</h3>
                <Trophy className="w-5 h-5 text-energy" />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {badges.map((badge) => (
                  <div key={badge.id} className="text-center">
                    <div className="text-3xl mb-1">{badge.icon}</div>
                    <div className="text-xs text-muted-foreground truncate">{badge.name}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Workouts */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Recent Activity</h3>
                <Calendar className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="space-y-3">
                {recentWorkouts.slice(0, 4).map((workout) => (
                  <div key={workout.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div>
                      <div className="font-medium text-sm">{workout.title}</div>
                      <div className="text-xs text-muted-foreground">{workout.date}</div>
                    </div>
                    <div className="text-sm text-primary font-medium">{workout.duration}min</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
