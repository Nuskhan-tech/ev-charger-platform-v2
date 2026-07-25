import { motion } from 'framer-motion';
import { Section, SectionHeading, fadeUp, stagger } from '@/components/ui/Section';
import { whyGentrix } from '@/data/content';

export function WhyGentrix() {
  return (
    <Section id="why-gentrix" className="bg-ink-900/40">
      <SectionHeading
        eyebrow="Why Gentrix"
        title="Engineered to Lead"
        subtitle="Built in the UAE for Gulf conditions, designed for the standards of tomorrow."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {whyGentrix.map((feat) => (
          <motion.article
            key={feat.title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group relative overflow-hidden rounded-2xl glass p-7 hover:border-electric-400/30 transition-colors"
          >
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-electric-500/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />

            <motion.span
              whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-electric-500/20 to-volt-500/20 border border-white/10"
            >
              <feat.icon className="h-7 w-7 text-electric-400" />
            </motion.span>

            <h3 className="relative mt-5 font-display text-lg font-bold text-white">{feat.title}</h3>
            <p className="relative mt-2 text-sm text-ink-300 text-pretty">{feat.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
