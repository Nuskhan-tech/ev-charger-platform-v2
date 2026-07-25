import { motion } from 'framer-motion';

export function Particles() {
  const dots = Array.from({ length: 28 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {dots.map((_, i) => {
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const size = 2 + (i % 3);
        const delay = (i % 7) * 0.6;
        const dur = 5 + (i % 5);
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-electric-400/40"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
            animate={{ y: [0, -24, 0], opacity: [0.15, 0.6, 0.15] }}
            transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        );
      })}
    </div>
  );
}

export function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-electric-500/20 blur-[120px]" />
      <div className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-volt-500/20 blur-[140px]" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-electric-400/10 blur-[120px]" />
    </div>
  );
}
