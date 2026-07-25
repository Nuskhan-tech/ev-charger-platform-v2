import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { fadeUp, stagger } from '@/components/ui/Section';
import { Particles, GradientOrbs } from '@/components/ui/Background';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { heroBadges, heroStats, serviceTabs } from '@/data/content';
import { cn } from '@/lib/utils';

export function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = serviceTabs[activeTab];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      <GradientOrbs />
      <Particles />
      <div className="absolute inset-0 bg-grid-dark bg-[size:64px_64px] opacity-40 mask-fade-b" aria-hidden="true" />

      {/* Background image changes with tab */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <img src={tab.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/80 to-ink-950" />
        </motion.div>
      </AnimatePresence>

      <div className="container-x relative z-10 px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left */}
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-7">
            <motion.div variants={fadeUp}>
              <Badge variant="primary" className="self-start">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-electric-400" />
                </span>
                Gentrix · UAE-Engineered EV Charging
              </Badge>
            </motion.div>

            {/* Service category tabs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {serviceTabs.map((t, i) => (
                <button
                  key={t.label}
                  onClick={() => setActiveTab(i)}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-semibold transition-all',
                    i === activeTab
                      ? 'bg-gradient-to-r from-electric-500 to-electric-400 text-ink-950 shadow-glow'
                      : 'glass text-ink-200 hover:text-white hover:bg-white/10'
                  )}
                >
                  {t.label}
                </button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-white text-balance">
                  {tab.title.split(' ').slice(0, -1).join(' ')}{' '}
                  <span className="gradient-text">{tab.title.split(' ').slice(-1)}</span>
                </h1>
                <p className="mt-5 max-w-xl text-lg text-ink-300 text-pretty">{tab.description}</p>
              </motion.div>
            </AnimatePresence>

            <motion.ul variants={fadeUp} className="flex flex-wrap gap-2.5">
              {tab.features.map((f) => (
                <li key={f}>
                  <Badge>
                    <Check className="h-3.5 w-3.5 text-electric-400" strokeWidth={3} />
                    {f}
                  </Badge>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-1">
              <Button asChild size="lg">
                <a href="#contact">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="#products">View Products</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            <HeroChargerVisual image={tab.image} />
          </motion.div>
        </div>

        {/* Floating stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {heroStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="glass rounded-2xl p-5 flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-electric-500/20 to-volt-500/20 border border-white/10">
                <stat.icon className="h-6 w-6 text-electric-400" />
              </span>
              <div>
                <p className="font-display text-xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-ink-300">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function HeroChargerVisual({ image }: { image: string }) {
  return (
    <div className="relative aspect-[4/5] sm:aspect-square max-w-md mx-auto">
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-electric-500/30 via-volt-500/20 to-transparent blur-2xl" />

      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative h-full w-full rounded-[2rem] glass shadow-card overflow-hidden"
      >
        <img
          src={image}
          alt="Gentrix EV charger"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent" />

        <div className="absolute inset-0 grid place-items-center">
          <div className="relative w-28 h-72 rounded-3xl bg-gradient-to-b from-ink-100/90 to-ink-200/80 shadow-2xl border border-white/20">
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-24 rounded-xl bg-ink-950 border border-electric-400/40 grid place-items-center">
              <div className="text-center">
                <Zap className="h-7 w-7 text-electric-400 mx-auto animate-pulse-glow" />
                <p className="mt-1 text-[9px] font-bold text-electric-400 tracking-wider">20kW</p>
                <p className="text-[7px] text-ink-400">DC FAST</p>
              </div>
            </div>
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute top-32 left-1/2 -translate-x-1/2 h-1 w-16 rounded-full bg-electric-400 shadow-glow"
            />
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-display text-sm font-bold text-ink-800">
              Gentrix
            </p>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute top-10 right-4 glass rounded-2xl px-3 py-2.5"
        >
          <span className="text-xs font-medium text-white">UAE-Engineered</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-24 left-3 glass rounded-2xl px-3 py-2.5"
        >
          <span className="text-xs font-medium text-white">Live · 42 kW</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute top-1/2 right-6 glass rounded-2xl px-3 py-2.5"
        >
          <span className="text-xs font-medium text-white">95% efficiency</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
