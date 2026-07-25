import { motion } from 'framer-motion';
import { QrCode, Smartphone } from 'lucide-react';
import { Section, SectionHeading, fadeUp, stagger } from '@/components/ui/Section';
import { processSteps } from '@/data/content';

export function Process() {
  return (
    <Section id="process" className="bg-ink-900/40">
      <SectionHeading
        eyebrow="Our Process"
        title="From Enquiry to Energised"
        subtitle="A clear, seven-step path that takes you from first call to a live, supported charger."
      />

      <motion.ol
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="relative flex flex-col lg:flex-row gap-6 lg:gap-3"
      >
        <div className="hidden lg:block absolute top-9 left-0 right-0 h-px bg-gradient-to-r from-electric-500/0 via-electric-500/40 to-electric-500/0" aria-hidden="true" />

        {processSteps.map((s, i) => (
          <motion.li key={s.step} variants={fadeUp} className="relative flex-1 group">
            <div className="flex lg:flex-col items-center gap-4 lg:gap-0 lg:text-center">
              <span className="relative z-10 grid h-18 w-18 lg:mx-auto place-items-center rounded-2xl glass p-4 group-hover:border-electric-400/40 transition-colors">
                <s.icon className="h-7 w-7 text-electric-400" />
                <span className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-electric-500 to-volt-500 text-xs font-bold text-ink-950">
                  {s.step}
                </span>
              </span>
              <div className="lg:mt-4">
                <h3 className="font-display text-base font-bold text-white">{s.title}</h3>
                <p className="mt-1 text-sm text-ink-300 text-pretty lg:max-w-[12rem] lg:mx-auto">
                  {s.description}
                </p>
              </div>
            </div>
            {i < processSteps.length - 1 && (
              <span className="lg:hidden mx-auto mt-3 block h-6 w-px bg-electric-500/30" aria-hidden="true" />
            )}
          </motion.li>
        ))}
      </motion.ol>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 flex flex-col sm:flex-row items-center gap-6 rounded-3xl glass p-7 lg:p-8 max-w-3xl mx-auto"
      >
        <span className="grid h-28 w-28 shrink-0 place-items-center rounded-2xl bg-white/5 border border-white/10">
          <QrCode className="h-16 w-16 text-ink-300" />
        </span>
        <div className="text-center sm:text-left">
          <h3 className="font-display text-xl font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
            <Smartphone className="h-5 w-5 text-electric-400" />
            Gentrix EV Charging App
          </h3>
          <p className="mt-2 text-ink-300 text-sm text-pretty">
            Scan to start a session, track energy use and schedule charging. The app connects to every
            Gentrix charger you own — home and commercial — from a single account.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
