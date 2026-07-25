import { motion } from 'framer-motion';
import { ArrowRight, Layers } from 'lucide-react';
import { Section, fadeUp, stagger } from '@/components/ui/Section';
import { Button } from '@/components/ui/button';
import { brandAssets } from '@/data/content';

export function OtherBrands() {
  return (
    <Section id="other-brands" className="bg-ink-950">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="relative overflow-hidden rounded-3xl glass p-10 lg:p-16"
      >
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-volt-500/15 blur-[100px]" aria-hidden="true" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-electric-500/15 blur-[100px]" aria-hidden="true" />

        <div className="relative text-center">
          <motion.span
            variants={fadeUp}
            className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-electric-500/20 to-volt-500/20 border border-white/10"
          >
            <Layers className="h-8 w-8 text-electric-400" />
          </motion.span>

          <motion.h2 variants={fadeUp} className="mt-6 font-display text-3xl sm:text-4xl font-bold text-white text-balance">
            Looking for Other EV Charger Brands?
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-xl mx-auto text-ink-300 text-pretty">
            Beyond Gentrix, PTC distributes a curated range of leading EV charger brands. Tell us your
            requirements and we'll match you with the right hardware for your site and budget.
          </motion.p>
        </div>

        {/* Brand grid */}
        <motion.div
          variants={fadeUp}
          className="relative mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {brandAssets.map((brand) => (
            <a
              key={brand.name}
              href={brand.url ?? '#'}
              className="group flex flex-col items-center justify-center gap-2 rounded-2xl glass p-6 hover:border-electric-400/30 transition-colors"
            >
              <span className="font-display text-lg font-bold text-ink-200 group-hover:text-white transition-colors">
                {brand.logoText}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-ink-500 group-hover:text-electric-400 transition-colors">
                {brand.name}
              </span>
            </a>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="relative mt-10 text-center">
          <Button asChild size="lg">
            <a href="#contact">
              Explore Other EV Charger Brands
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
}
