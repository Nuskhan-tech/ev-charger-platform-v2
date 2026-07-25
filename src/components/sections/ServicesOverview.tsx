import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Section, fadeUp, stagger } from '@/components/ui/Section';
import { serviceCards } from '@/data/content';

export function ServicesOverview() {
  return (
    <Section id="services" className="bg-ink-950">
      <div className="flex flex-col items-center text-center mb-12">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance"
        >
          Complete EV Charging Services
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 max-w-2xl text-ink-300 text-pretty"
        >
          From home chargers to fleet hubs, Gentrix brings every component of EV charging together
          into one reliable solution.
        </motion.p>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {serviceCards.map((card) => (
          <motion.a
            key={card.title}
            href={card.href}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group relative overflow-hidden rounded-2xl glass hover:border-electric-400/30 transition-colors"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-bold text-white">{card.title}</h3>
              <p className="mt-2 text-sm text-ink-300 text-pretty">{card.description}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-400 group-hover:gap-2.5 transition-all">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </Section>
  );
}
