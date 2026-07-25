import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { Products } from '@/components/sections/Products';
import { Solutions } from '@/components/sections/Solutions';
import { Industries } from '@/components/sections/Industries';
import { Process } from '@/components/sections/Process';
import { Pricing } from '@/components/sections/Pricing';
import { WhyGentrix } from '@/components/sections/WhyGentrix';
import { Sustainability } from '@/components/sections/Sustainability';
import { CTA } from '@/components/sections/CTA';
import { CTABanner } from '@/components/sections/CTABanner';
import { OtherBrands } from '@/components/sections/OtherBrands';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';
import { Admin } from '@/components/Admin';

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return hash;
}

function App() {
  const hash = useHashRoute();

  if (hash === '#admin') {
    return <Admin />;
  }

  return (
    <div className="min-h-screen bg-ink-950 text-ink-100 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ServicesOverview />
        <Products />
        <CTABanner
          title="Looking for the Right Charger?"
          subtitle="Tell us about your site and we'll match you with the perfect hardware — Gentrix or other leading brands."
          primaryLabel="Explore Solutions"
          primaryHref="#solutions"
          secondaryLabel="View Pricing"
          secondaryHref="#pricing"
        />
        <Solutions />
        <Industries />
        <Process />
        <CTABanner
          title="Ready to Electrify Your Future?"
          subtitle="Get a fixed-scope proposal within two business days. No obligation, no pressure."
          primaryLabel="Request a Quote"
          primaryHref="#contact"
          secondaryLabel="Book Consultation"
          secondaryHref="#contact"
        />
        <Pricing />
        <WhyGentrix />
        <Sustainability />
        <OtherBrands />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
