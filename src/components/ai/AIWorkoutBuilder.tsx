import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Target, Dumbbell, Zap, ChevronRight, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const goals = [
  { id: 'fat-loss', label: 'Fat Loss', icon: '🔥' },
  { id: 'muscle-gain', label: 'Muscle Gain', icon: '💪' },
  { id: 'endurance', label: 'Endurance', icon: '🏃' },
  { id: 'flexibility', label: 'Flexibility', icon: '🧘' },
];

const levels = [
  { id: 'beginner', label: 'Beginner', description: 'New to fitness' },
  { id: 'intermediate', label: 'Intermediate', description: '6+ months experience' },
  { id: 'advanced', label: 'Advanced', description: '2+ years experience' },
];

const equipment = [
  { id: 'none', label: 'No Equipment' },
  { id: 'dumbbells', label: 'Dumbbells' },
  { id: 'barbell', label: 'Barbell' },
  { id: 'kettlebell', label: 'Kettlebell' },
  { id: 'bands', label: 'Resistance Bands' },
  { id: 'full-gym', label: 'Full Gym' },
];

const generatedPlan = {
  name: 'Custom 4-Week Shred',
  description: 'A personalized fat loss program designed for your fitness level and available equipment.',
  weeks: [
    { week: 1, focus: 'Foundation', workouts: ['Full Body HIIT', 'Upper Body Strength', 'Core & Cardio', 'Active Recovery'] },
    { week: 2, focus: 'Building', workouts: ['Lower Body Power', 'HIIT Circuits', 'Push Day', 'Yoga Flow'] },
    { week: 3, focus: 'Intensity', workouts: ['Total Body Burn', 'Leg Day', 'Pull Day', 'HIIT Finisher'] },
    { week: 4, focus: 'Peak', workouts: ['Max Effort', 'Full Body Strength', 'Cardio Blast', 'Recovery'] },
  ],
};

export const AIWorkoutBuilder = () => {
  const [step, setStep] = useState(0);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleEquipmentToggle = (id: string) => {
    setSelectedEquipment((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowResult(true);
    }, 2000);
  };

  const handleReset = () => {
    setStep(0);
    setSelectedGoal(null);
    setSelectedLevel(null);
    setSelectedEquipment([]);
    setShowResult(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background via-card/50 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            AI-Powered
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Smart Workout <span className="gradient-text">Builder</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tell us your goals and we'll create a personalized training program just for you.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8">
            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key="builder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Progress */}
                  <div className="flex items-center gap-2 mb-8">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className={`h-1.5 flex-1 rounded-full transition-colors ${
                          i <= step ? 'bg-primary' : 'bg-secondary'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Step 0: Goal */}
                  {step === 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                          <Target className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold">What's your goal?</h3>
                          <p className="text-sm text-muted-foreground">Select your primary fitness objective</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {goals.map((goal) => (
                          <button
                            key={goal.id}
                            onClick={() => setSelectedGoal(goal.id)}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${
                              selectedGoal === goal.id
                                ? 'border-primary bg-primary/10'
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            <span className="text-2xl mb-2 block">{goal.icon}</span>
                            <span className="font-medium">{goal.label}</span>
                          </button>
                        ))}
                      </div>

                      <Button
                        onClick={() => setStep(1)}
                        disabled={!selectedGoal}
                        className="w-full bg-primary text-primary-foreground"
                      >
                        Continue
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>
                  )}

                  {/* Step 1: Level */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                          <Zap className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold">Experience level?</h3>
                          <p className="text-sm text-muted-foreground">This helps us calibrate intensity</p>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        {levels.map((level) => (
                          <button
                            key={level.id}
                            onClick={() => setSelectedLevel(level.id)}
                            className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                              selectedLevel === level.id
                                ? 'border-primary bg-primary/10'
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            <span className="font-medium">{level.label}</span>
                            <span className="text-sm text-muted-foreground block">{level.description}</span>
                          </button>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Button variant="outline" onClick={() => setStep(0)} className="flex-1">
                          Back
                        </Button>
                        <Button
                          onClick={() => setStep(2)}
                          disabled={!selectedLevel}
                          className="flex-1 bg-primary text-primary-foreground"
                        >
                          Continue
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Equipment */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                          <Dumbbell className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold">Available equipment?</h3>
                          <p className="text-sm text-muted-foreground">Select all that apply</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {equipment.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => handleEquipmentToggle(item.id)}
                            className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                              selectedEquipment.includes(item.id)
                                ? 'border-primary bg-primary/10 text-primary'
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                          Back
                        </Button>
                        <Button
                          onClick={handleGenerate}
                          disabled={selectedEquipment.length === 0 || isGenerating}
                          className="flex-1 bg-primary text-primary-foreground"
                        >
                          {isGenerating ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              >
                                <Sparkles className="w-4 h-4 mr-2" />
                              </motion.div>
                              Generating...
                            </>
                          ) : (
                            <>
                              Generate Plan
                              <Sparkles className="w-4 h-4 ml-2" />
                            </>
                          )}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                      <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{generatedPlan.name}</h3>
                    <p className="text-sm text-muted-foreground">{generatedPlan.description}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    {generatedPlan.weeks.map((week) => (
                      <div key={week.week} className="bg-secondary/50 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold">Week {week.week}</span>
                          <span className="text-xs text-primary font-medium">{week.focus}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {week.workouts.map((workout, i) => (
                            <span
                              key={i}
                              className="text-xs bg-background px-2 py-1 rounded-lg text-muted-foreground"
                            >
                              {workout}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" onClick={handleReset} className="flex-1">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Start Over
                    </Button>
                    <Button className="flex-1 bg-primary text-primary-foreground">
                      Start Program
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
