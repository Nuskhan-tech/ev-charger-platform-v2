import { motion } from 'framer-motion';
import { Check, ArrowRight, Download, Eye, Star, Zap } from 'lucide-react';
import { Section, SectionHeading, fadeUp, stagger, scaleIn } from '@/components/ui/Section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { products, type Product } from '@/data/content';

export function Products() {
  const featured = products.find((p) => p.featured);
  const rest = products.filter((p) => !p.featured);

  return (
    <Section id="products" className="bg-ink-950">
      <SectionHeading
        eyebrow="Our Hardware"
        title="Gentrix EV Chargers"
        subtitle="Designed for today's EVs and tomorrow's mobility."
      />

      {featured && <FeaturedCard product={featured} />}

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
      >
        {rest.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </motion.div>
    </Section>
  );
}

function FeaturedCard({ product }: { product: Product }) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="relative mb-8 overflow-hidden rounded-3xl glass border-electric-400/30 shadow-card"
    >
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-electric-500/20 blur-[100px]" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-dark bg-[size:48px_48px] opacity-30" aria-hidden="true" />

      <div className="relative grid lg:grid-cols-2 gap-0">
        <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
          <img
            src={product.image}
            alt={`${product.name} — ${product.power} ${product.category} charger`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent lg:bg-gradient-to-r" />
        </div>

        <div className="flex flex-col gap-5 p-7 lg:p-10">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="primary">
              <Star className="h-3.5 w-3.5 fill-electric-400 text-electric-400" />
              Featured
            </Badge>
            <Badge variant="accent">
              <Zap className="h-3.5 w-3.5" />
              First UAE-Originated 20kW DC Fast Charger
            </Badge>
          </div>

          <div>
            <p className="text-sm font-medium text-electric-400">{product.category} Charger</p>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mt-1">{product.name}</h3>
            <p className="mt-3 text-ink-300 text-pretty">{product.description}</p>
          </div>

          <ul className="grid grid-cols-2 gap-2.5">
            {product.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-ink-200">
                <Check className="h-4 w-4 shrink-0 text-electric-400" strokeWidth={2.5} />
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 mt-2">
            <Button asChild>
              <a href="#contact">
                Enquire
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">
                  <Eye className="h-4 w-4" />
                  View Details
                </Button>
              </DialogTrigger>
              <ProductDialogBody product={product} />
            </Dialog>
            <Button asChild variant="outline">
              <a href={product.datasheet}>
                <Download className="h-4 w-4" />
                Datasheet
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl glass shadow-soft hover:shadow-card hover:border-electric-400/30 transition-colors"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} — ${product.power} ${product.category} charger`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
        <Badge className="absolute top-3 left-3">
          <Zap className="h-3.5 w-3.5 text-electric-400" />
          {product.category}
        </Badge>
        <span className="absolute bottom-3 right-3 rounded-full bg-electric-500/90 px-3 py-1.5 text-xs font-bold text-ink-950">
          {product.power}
        </span>
      </div>

      <div className="flex flex-col gap-4 p-6 flex-1">
        <div>
          <h3 className="font-display text-lg font-bold text-white">{product.name}</h3>
          <p className="mt-2 text-sm text-ink-300 text-pretty">{product.description}</p>
        </div>

        <ul className="flex flex-col gap-2 flex-1">
          {product.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-ink-200">
              <Check className="h-4 w-4 shrink-0 text-electric-400" strokeWidth={2.5} />
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-1">
          <Button asChild size="sm">
            <a href="#contact">
              Enquire
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" size="sm">
                <Eye className="h-3.5 w-3.5" />
                Details
              </Button>
            </DialogTrigger>
            <ProductDialogBody product={product} />
          </Dialog>
          <Button asChild variant="outline" size="sm">
            <a href={product.datasheet}>
              <Download className="h-3.5 w-3.5" />
              Datasheet
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

function ProductDialogBody({ product }: { product: Product }) {
  return (
    <DialogContent>
      <DialogHeader>
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <Badge variant="primary">
            <Zap className="h-3.5 w-3.5" />
            {product.category} · {product.power}
          </Badge>
          {product.featured && (
            <Badge variant="accent">
              <Star className="h-3.5 w-3.5 fill-volt-400 text-volt-400" />
              Featured
            </Badge>
          )}
        </div>
        <DialogTitle>{product.name}</DialogTitle>
        <DialogDescription>{product.description}</DialogDescription>
      </DialogHeader>

      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mt-3">
        <img
          src={product.image}
          alt={`${product.name} — ${product.power} ${product.category} charger`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="mt-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric-400 mb-3">
          Key Features
        </p>
        <ul className="grid grid-cols-2 gap-2.5">
          {product.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-ink-200">
              <Check className="h-4 w-4 shrink-0 text-electric-400" strokeWidth={2.5} />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <Separator className="my-4" />

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric-400 mb-3">
          Technical Specifications
        </p>
        <div className="overflow-hidden rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <tbody>
              {product.specs.map((spec, i) => (
                <tr
                  key={spec.label}
                  className={i % 2 === 0 ? 'bg-white/[0.03]' : 'bg-transparent'}
                >
                  <td className="px-4 py-2.5 text-ink-400 font-medium w-1/2">{spec.label}</td>
                  <td className="px-4 py-2.5 text-white font-medium">{spec.value}</td>
                </tr>
              ))}
              <tr className="bg-white/[0.03]">
                <td className="px-4 py-2.5 text-ink-400 font-medium">Dimensions (W×D×H)</td>
                <td className="px-4 py-2.5 text-white font-medium">{product.dimensions}</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 text-ink-400 font-medium">Weight</td>
                <td className="px-4 py-2.5 text-white font-medium">{product.weight}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <a href="#contact">
            Enquire Now
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href={product.datasheet}>
            <Download className="h-4 w-4" />
            Download Datasheet
          </a>
        </Button>
      </div>
    </DialogContent>
  );
}
