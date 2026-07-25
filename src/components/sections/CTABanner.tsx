import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { fadeUp, stagger } from '@/components/ui/Section';
import { Button } from '@/components/ui/button';

type CTABannerProps = {
  title: string;
  subtitle: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTABanner({
  title,
  subtitle,
  primaryLabel = 'Request a Quote',
  primaryHref = '#contact',
  secondaryLabel = 'Book Consultation',
  secondaryHref = '#contact',
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden section-pad">
      <div className="absolute inset-0 bg-gradient-to-br from-electric-700 via-volt-700 to-ink-900" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-dark bg-[size:48px_48px] opacity-20" aria-hidden="true" />
      <div className="absolute -top-24 left-1/3 h-80 w-80 rounded-full bg-electric-400/30 blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-volt-400/20 blur-[120px]" aria-hidden="true" />

      <div className="container-x relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance"
          >
            {title}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-lg text-white/80 text-pretty">
            {subtitle}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="secondary" size="lg">
              <a href={primaryHref}>
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={secondaryHref}>
                <Calendar className="h-4 w-4" />
                {secondaryLabel}
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
