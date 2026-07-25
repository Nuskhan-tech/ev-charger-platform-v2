import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Section, SectionHeading, fadeUp, stagger } from '@/components/ui/Section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { pricingTiers } from '@/data/content';
import { cn } from '@/lib/utils';

export function Pricing() {
  return (
    <Section id="pricing" className="bg-ink-950">
      <SectionHeading
        eyebrow="Pricing"
        title="Transparent, Flexible Options"
        subtitle="Buy, install or lease — choose the model that fits your budget and scale."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid md:grid-cols-3 gap-6 items-stretch"
      >
        {pricingTiers.map((tier) => (
          <motion.article
            key={tier.name}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={cn(
              'relative flex flex-col rounded-3xl p-8 transition-colors',
              tier.highlighted
                ? 'glass border-electric-400/40 shadow-glow lg:scale-[1.04]'
                : 'glass hover:border-white/20'
            )}
          >
            {tier.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge variant="solid">
                  <Sparkles className="h-3.5 w-3.5" />
                  Most Popular
                </Badge>
              </span>
            )}

            <div className="flex flex-col gap-1">
              <h3 className="font-display text-xl font-bold text-white">{tier.name}</h3>
              <p className="font-display text-2xl font-bold gradient-text">{tier.tagline}</p>
            </div>

            <p className="mt-4 text-sm text-ink-300 text-pretty">{tier.description}</p>

            <ul className="mt-6 flex flex-col gap-3 flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-ink-100">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-electric-500/15">
                    <Check className="h-3 w-3 text-electric-400" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <Button asChild className="mt-8" variant={tier.highlighted ? 'primary' : 'secondary'}>
              <a href="#contact">
                Request Quote
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
