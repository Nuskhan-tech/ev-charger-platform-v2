import { motion } from 'framer-motion';
import { Section, SectionHeading, fadeUp, stagger, scaleIn } from '@/components/ui/Section';
import { Particles } from '@/components/ui/Background';
import { sustainabilityStats, sustainabilityPillars } from '@/data/content';

export function Sustainability() {
  return (
    <Section id="sustainability" className="relative overflow-hidden bg-gradient-to-b from-electric-950/40 via-ink-950 to-ink-950">
      <Particles />
      <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-electric-500/15 blur-[120px]" aria-hidden="true" />

      <div className="relative">
        <SectionHeading
          eyebrow="Sustainability"
          title="Powering a Cleaner UAE"
          subtitle="Every Gentrix charger is a step toward the nation's Net Zero 2050 ambition."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {sustainabilityStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              className="relative rounded-2xl glass p-6 text-center hover:border-electric-400/30 transition-colors"
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-electric-500/15 border border-electric-400/20">
                <stat.icon className="h-6 w-6 text-electric-400" />
              </span>
              <p className="mt-4 font-display text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="mt-1 text-sm text-ink-300 text-pretty">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {sustainabilityPillars.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group flex gap-5 rounded-2xl glass p-7 hover:border-electric-400/30 transition-colors"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-electric-500/15 border border-electric-400/20 group-hover:scale-110 transition-transform">
                <p.icon className="h-6 w-6 text-electric-400" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-1.5 text-sm text-ink-300 text-pretty">{p.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
