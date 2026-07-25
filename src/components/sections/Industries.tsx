import { motion } from 'framer-motion';
import { Section, SectionHeading, fadeUp, stagger } from '@/components/ui/Section';
import { industries } from '@/data/content';

const projectImages = [
  { src: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'Villa installation — Palm Jumeirah' },
  { src: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'Office tower — Business Bay' },
  { src: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'Retail parking — Dubai Mall' },
  { src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'Residential community — JVC' },
  { src: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'Corporate HQ — DIFC' },
  { src: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'Hotel — JBR' },
  { src: 'https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'Fleet depot — Jebel Ali' },
  { src: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'Government facility — Abu Dhabi' },
];

export function Industries() {
  return (
    <Section id="industries" className="bg-ink-950">
      <SectionHeading
        eyebrow="Industries Served"
        title="Trusted Across Sectors"
        subtitle="Gentrix chargers power the places people live, work, shop and travel."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {industries.map((ind) => (
          <motion.article
            key={ind.name}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <img
              src={ind.image}
              alt={`${ind.name} — ${ind.description}`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />

            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <span className="mb-3 grid h-11 w-11 place-items-center rounded-xl glass opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all">
                <ind.icon className="h-5 w-5 text-electric-400" />
              </span>
              <h3 className="font-display text-lg font-bold text-white">{ind.name}</h3>
              <p className="text-sm text-ink-300">{ind.description}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Real project gallery */}
      <div className="mt-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">Project Gallery</h3>
            <p className="mt-1 text-ink-400 text-sm">A selection of Gentrix installations across the UAE.</p>
          </div>
        </div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {projectImages.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative aspect-square overflow-hidden rounded-2xl glass hover:border-electric-400/30 transition-colors"
            >
              <img
                src={p.src}
                alt={p.caption}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
              <p className="absolute bottom-0 inset-x-0 p-3 text-xs font-medium text-white text-center">
                {p.caption}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
