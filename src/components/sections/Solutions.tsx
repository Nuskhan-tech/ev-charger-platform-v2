import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Section, SectionHeading, fadeUp, stagger } from '@/components/ui/Section';
import { Badge } from '@/components/ui/badge';
import { solutions } from '@/data/content';

export function Solutions() {
  return (
    <Section id="solutions" className="bg-ink-900/40">
      <SectionHeading
        eyebrow="Charging Solutions"
        title="Solutions for Every Scenario"
        subtitle="From a single villa charger to a multi-site fleet hub — one platform, one partner."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid md:grid-cols-2 gap-6"
      >
        {solutions.map((sol) => (
          <motion.article
            key={sol.title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group relative overflow-hidden rounded-3xl glass p-8 lg:p-10 hover:border-electric-400/30 transition-colors"
          >
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-electric-500/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />

            <div className="relative flex flex-col gap-6">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-electric-500/20 to-volt-500/20 border border-white/10 group-hover:scale-110 transition-transform">
                <sol.icon className="h-7 w-7 text-electric-400" />
              </span>

              <div>
                <h3 className="font-display text-2xl font-bold text-white">{sol.title}</h3>
                <p className="mt-2 text-ink-300 text-pretty">{sol.description}</p>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
                  Suitable for
                </p>
                <div className="flex flex-wrap gap-2">
                  {sol.useCases.map((u) => (
                    <Badge key={u}>
                      <Check className="h-3.5 w-3.5 text-electric-400" strokeWidth={2.5} />
                      {u}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <span className="text-sm font-medium text-ink-300">{sol.chargerTypes}</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-400 hover:gap-2.5 transition-all"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
