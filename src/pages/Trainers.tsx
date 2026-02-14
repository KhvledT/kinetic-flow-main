import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { TrainerCard } from '@/components/trainers/TrainerCard';
import { trainers } from '@/data/trainers';

const Trainers = () => {
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
              Our <span className="gradient-text">Trainers</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              World-class coaches dedicated to helping you achieve your fitness goals. 
              Each trainer brings unique expertise and a passion for transforming lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((trainer, i) => (
              <TrainerCard key={trainer.id} trainer={trainer} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-black mb-4">
              Become a <span className="gradient-text">Trainer</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Are you a certified fitness professional? Join our team and help thousands 
              of people transform their lives.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-colors"
            >
              Apply to Join
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Trainers;
