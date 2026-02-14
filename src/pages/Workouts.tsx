import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { WorkoutCard } from '@/components/workout/WorkoutCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { workouts, workoutTypes, difficultyLevels, muscleGroups, equipmentOptions } from '@/data/workouts';

const Workouts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedMuscle, setSelectedMuscle] = useState<string | null>(null);
  const [selectedEquipment, setSelectedEquipment] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredWorkouts = useMemo(() => {
    return workouts.filter((workout) => {
      const matchesSearch = workout.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        workout.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = !selectedType || workout.type === selectedType;
      const matchesDifficulty = !selectedDifficulty || workout.difficulty === selectedDifficulty;
      const matchesMuscle = !selectedMuscle || workout.muscleGroups.includes(selectedMuscle);
      const matchesEquipment = !selectedEquipment || workout.equipment.includes(selectedEquipment);

      return matchesSearch && matchesType && matchesDifficulty && matchesMuscle && matchesEquipment;
    });
  }, [searchQuery, selectedType, selectedDifficulty, selectedMuscle, selectedEquipment]);

  const activeFilters = [selectedType, selectedDifficulty, selectedMuscle, selectedEquipment].filter(Boolean);

  const clearFilters = () => {
    setSelectedType(null);
    setSelectedDifficulty(null);
    setSelectedMuscle(null);
    setSelectedEquipment(null);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="pt-12 pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Workout <span className="gradient-text">Library</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our collection of expert-designed workouts for every fitness level and goal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="pb-8 sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search workouts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-card border-border"
              />
            </div>

            {/* Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="h-12 px-6"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
              {activeFilters.length > 0 && (
                <Badge className="ml-2 bg-primary text-primary-foreground">
                  {activeFilters.length}
                </Badge>
              )}
            </Button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 glass-card p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Filters</h3>
                {activeFilters.length > 0 && (
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear All
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Type */}
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Workout Type</label>
                  <div className="flex flex-wrap gap-2">
                    {workoutTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setSelectedType(selectedType === type ? null : type)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                          selectedType === type
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                        }`}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Difficulty */}
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Difficulty</label>
                  <div className="flex flex-wrap gap-2">
                    {difficultyLevels.map((level) => (
                      <button
                        key={level}
                        onClick={() => setSelectedDifficulty(selectedDifficulty === level ? null : level)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                          selectedDifficulty === level
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                        }`}
                      >
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Muscle Group */}
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Muscle Group</label>
                  <div className="flex flex-wrap gap-2">
                    {muscleGroups.slice(0, 5).map((muscle) => (
                      <button
                        key={muscle}
                        onClick={() => setSelectedMuscle(selectedMuscle === muscle ? null : muscle)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                          selectedMuscle === muscle
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                        }`}
                      >
                        {muscle}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Equipment */}
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Equipment</label>
                  <div className="flex flex-wrap gap-2">
                    {equipmentOptions.slice(0, 4).map((equip) => (
                      <button
                        key={equip}
                        onClick={() => setSelectedEquipment(selectedEquipment === equip ? null : equip)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                          selectedEquipment === equip
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                        }`}
                      >
                        {equip}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Active Filters Tags */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedType && (
                <Badge variant="secondary" className="gap-1">
                  {selectedType}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedType(null)} />
                </Badge>
              )}
              {selectedDifficulty && (
                <Badge variant="secondary" className="gap-1">
                  {selectedDifficulty}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedDifficulty(null)} />
                </Badge>
              )}
              {selectedMuscle && (
                <Badge variant="secondary" className="gap-1">
                  {selectedMuscle}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedMuscle(null)} />
                </Badge>
              )}
              {selectedEquipment && (
                <Badge variant="secondary" className="gap-1">
                  {selectedEquipment}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedEquipment(null)} />
                </Badge>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Workouts Grid */}
      <section className="py-8 pb-20">
        <div className="container mx-auto px-4">
          {filteredWorkouts.length > 0 ? (
            <>
              <p className="text-sm text-muted-foreground mb-6">
                Showing {filteredWorkouts.length} workout{filteredWorkouts.length !== 1 ? 's' : ''}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredWorkouts.map((workout, i) => (
                  <WorkoutCard key={workout.id} workout={workout} index={i} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🏋️</div>
              <h3 className="text-xl font-bold mb-2">No workouts found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters or search query.
              </p>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Workouts;
