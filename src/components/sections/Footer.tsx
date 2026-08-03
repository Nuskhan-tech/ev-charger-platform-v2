import { Zap, Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { navLinks, brandAssets } from '@/data/content';

const productLinks = [
  { label: 'AC Chargers', href: '#products' },
  { label: 'DC Fast Chargers', href: '#products' },
  { label: 'Accessories', href: '#products' },
  { label: 'Datasheets', href: '#products' },
];

const solutionLinks = [
  { label: 'Home Charging', href: '#solutions' },
  { label: 'Commercial Charging', href: '#solutions' },
  { label: 'Fleet Charging', href: '#solutions' },
  { label: 'Custom Projects', href: '#pricing' },
];

const socials = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/company/futureway-technical-services-llc/posts/?feedView=all',
    label: 'LinkedIn',
    target: '_blank',
  },
  {
    icon: Twitter,
    href: 'https://twitter.com',
    label: 'Twitter',
    target: '_blank',
  },
  {
    icon: Facebook,
    href: 'https://www.facebook.com/p/Futureway-Technical-services-LLC-100091559032558/',
    label: 'Facebook',
    target: '_blank',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/futureway_uae/',
    label: 'Instagram',
    target: '_blank',
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950">
      <div
        className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-electric-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-x relative px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid gap-10 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-electric-500 to-volt-500 shadow-glow">
                <Zap className="h-5 w-5 text-ink-950" strokeWidth={2.5} />
              </span>

              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-bold text-white">
                  Gentrix
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  by FutureWay
                </span>
              </div>
            </div>

            <p className="max-w-sm text-sm text-ink-400 text-pretty">
              FutureWay is a Dubai based energy solutions provider.
              Gentrix is our in-house EV charging brand, engineered for the Gulf and
              built for the future of mobility.
            </p>

            {/* PTC logo */}
            <div className="inline-flex items-center gap-2 rounded-xl glass px-4 py-2.5 self-start">
              <span className="font-display text-sm font-bold text-white">
                FUTUREWAY
              </span>
              <span className="text-xs text-ink-400">
                Part of the Prakash Trading Company (PTC)
              </span>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-2 text-sm text-ink-400">

              <a
                href="mailto:sales@futureway.ae"
                className="inline-flex items-center gap-2 hover:text-electric-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                sales@futureway.ae
              </a>

              <a
                href="tel:+97142863363"
                className="inline-flex items-center gap-2 hover:text-electric-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                +971 4 286 3363
              </a>

              <span className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>
                  No 21 7B Street - Umm Ramool -
                  <br />
                  Dubai, United Arab Emirates
                </span>
              </span>

            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Quick Links
            </h3>

            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-400 hover:text-electric-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Products */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Products
            </h3>

            <ul className="mt-4 flex flex-col gap-2.5">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-400 hover:text-electric-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Solutions */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Solutions
            </h3>

            <ul className="mt-4 flex flex-col gap-2.5">
              {solutionLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-400 hover:text-electric-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>


        {/* Brand Assets */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400 mb-4 text-center">
            Brands We Distribute
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {brandAssets.map((brand) => (
              <a
                key={brand.name}
                href={brand.url ?? '#'}
                className="inline-flex items-center rounded-xl glass px-5 py-3 font-display text-sm font-bold text-ink-200 hover:text-white hover:border-electric-400/30 transition-colors"
              >
                {brand.logoText}
              </a>
            ))}
          </div>
        </div>


        {/* Bottom */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 border-t border-white/10 pt-7">

          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} FutureWay Technical Services LLC. All rights reserved.
          </p>

         <div className="flex items-center gap-3">
  {socials.map((s) => (
    <a
      key={s.label}
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={s.label}
      className="grid h-9 w-9 place-items-center rounded-full glass text-ink-300 hover:text-electric-400 hover:border-electric-400/30 transition-colors"
    >
      <s.icon className="h-4 w-4" />
    </a>
  ))}
</div>

        </div>

      </div>
    </footer>
  );
}
