import type { LucideIcon } from 'lucide-react';
import {
  Home,
  Building2,
  Hotel,
  Truck,
  Landmark,
  ShoppingBag,
  Briefcase,
  Zap,
  BatteryCharging,
  Cpu,
  ShieldCheck,
  Leaf,
  Gauge,
  Wifi,
  Clock,
  Network,
  Plug,
  Activity,
  Sun,
  Globe2,
  Recycle,
} from 'lucide-react';

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  name: string;
  category: 'AC' | 'DC';
  power: string;
  description: string;
  features: string[];
  image: string;
  datasheet: string;
  featured?: boolean;
  specs: ProductSpec[];
  dimensions: string;
  weight: string;
};

export const products: Product[] = [
  {
    name: 'Gentrix AC Home 7',
    category: 'AC',
    power: '7 kW',
    description:
      'Compact single-phase home charger engineered for overnight charging of any EV in a private garage or villa carport.',
    features: ['Type 2 connector', 'RFID & app start', 'IP55 weatherproof', 'Dynamic load balancing'],
    image:
      'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=900',
    datasheet: '#',
    dimensions: '400 × 300 × 150 mm',
    weight: '4.5 kg',
    specs: [
      { label: 'Connector', value: 'Type 2' },
      { label: 'Phases', value: '1-phase' },
      { label: 'Max Current', value: '32 A' },
      { label: 'Input Voltage', value: '230 V AC' },
      { label: 'Protection', value: 'IP55, IK08' },
      { label: 'Operating Temp', value: '−30°C to +55°C' },
    ],
  },
  {
    name: 'Gentrix AC Pro 11',
    category: 'AC',
    power: '11 kW',
    description:
      'Three-phase smart charger ideal for apartments and shared parking, with OCPP backend integration for remote management.',
    features: ['3-phase 16A', 'OCPP 1.6J backend', 'Mid-meter certified', 'Load sharing up to 40 units'],
    image:
      'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=900',
    datasheet: '#',
    dimensions: '420 × 320 × 160 mm',
    weight: '5.2 kg',
    specs: [
      { label: 'Connector', value: 'Type 2' },
      { label: 'Phases', value: '3-phase' },
      { label: 'Max Current', value: '16 A' },
      { label: 'Input Voltage', value: '400 V AC' },
      { label: 'Protection', value: 'IP55, IK10' },
      { label: 'Operating Temp', value: '−30°C to +55°C' },
    ],
  },
  {
    name: 'Gentrix AC Fleet 22',
    category: 'AC',
    power: '22 kW',
    description:
      'High-throughput AC charger for commercial buildings and fleet depots that need simultaneous top-ups across many bays.',
    features: ['3-phase 32A', 'Dual connector option', 'Smart energy management', 'Fleet dashboard ready'],
    image:
      'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=900',
    datasheet: '#',
    dimensions: '450 × 350 × 170 mm',
    weight: '6.8 kg',
    specs: [
      { label: 'Connector', value: 'Type 2 (dual option)' },
      { label: 'Phases', value: '3-phase' },
      { label: 'Max Current', value: '32 A' },
      { label: 'Input Voltage', value: '400 V AC' },
      { label: 'Protection', value: 'IP55, IK10' },
      { label: 'Operating Temp', value: '−30°C to +55°C' },
    ],
  },
  {
    name: 'Gentrix DC Fast 20',
    category: 'DC',
    power: '20 kW',
    description:
      'The first UAE-originated 20kW DC fast charger. Built in the Emirates for regional conditions, delivering a full top-up in under an hour.',
    features: ['CCS2 + CHAdeMO', 'Liquid-cooled power module', '7" touch display', 'Ambient rated to 55°C'],
    image:
      'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=900',
    datasheet: 'https://chargetronix.com/wp-content/uploads/2024/02/GZ_TP5-60-480-Installation-Manual.pdf',
    featured: true,
    dimensions: '600 × 400 × 1800 mm',
    weight: '85 kg',
    specs: [
      { label: 'Connector', value: 'CCS2 + CHAdeMO' },
      { label: 'Output', value: '20 kW DC' },
      { label: 'Max Current', value: '500 A' },
      { label: 'Input Voltage', value: '380 V AC (3-phase)' },
      { label: 'Protection', value: 'IP54, IK10' },
      { label: 'Operating Temp', value: '−30°C to +55°C' },
      { label: 'Display', value: '7" touch' },
      { label: 'Cooling', value: 'Liquid-cooled' },
    ],
  },
  {
    name: 'Gentrix DC Ultra 40',
    category: 'DC',
    power: '40 kW',
    description:
      'Dual-port DC fast charger for highway-adjacent retail, hospitality and logistics hubs requiring rapid turnaround.',
    features: ['Dual CCS2 outputs', '95% efficiency', 'ISO 15118 ready', 'Pay-terminal integrated'],
    image:
      'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=900',
    datasheet: '#',
    dimensions: '700 × 450 × 1900 mm',
    weight: '120 kg',
    specs: [
      { label: 'Connector', value: 'Dual CCS2' },
      { label: 'Output', value: '40 kW DC' },
      { label: 'Max Current', value: '1000 A' },
      { label: 'Input Voltage', value: '380 V AC (3-phase)' },
      { label: 'Protection', value: 'IP54, IK10' },
      { label: 'Operating Temp', value: '−30°C to +55°C' },
      { label: 'Display', value: '7" touch + pay terminal' },
      { label: 'Cooling', value: 'Liquid-cooled' },
    ],
  },
];

export type Solution = {
  title: string;
  description: string;
  useCases: string[];
  chargerTypes: string;
  icon: LucideIcon;
};

export const solutions: Solution[] = [
  {
    title: 'Home Charging',
    description:
      'Discreet, powerful chargers designed for villas, apartments and private parking — fully managed from your phone.',
    useCases: ['Villas', 'Apartments', 'Private Parking'],
    chargerTypes: 'AC Chargers',
    icon: Home,
  },
  {
    title: 'Commercial Charging',
    description:
      'Scalable charging infrastructure for hotels, malls, offices and fleets, with backend billing and energy management.',
    useCases: ['Hotels', 'Malls', 'Offices', 'Fleet', 'Government'],
    chargerTypes: 'AC + DC Chargers',
    icon: Building2,
  },
];

export type Industry = {
  name: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export const industries: Industry[] = [
  {
    name: 'Residential',
    description: 'Villas, towers and communities',
    icon: Home,
    image:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Commercial',
    description: 'Offices, retail and mixed-use',
    icon: Building2,
    image:
      'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Hospitality',
    description: 'Hotels, resorts and serviced stays',
    icon: Hotel,
    image:
      'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Fleet',
    description: 'Logistics and last-mile operators',
    icon: Truck,
    image:
      'https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Government',
    description: 'Public sector and municipal sites',
    icon: Landmark,
    image:
      'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Retail',
    description: 'Malls, showrooms and destinations',
    icon: ShoppingBag,
    image:
      'https://images.pexels.com/photos/264648/pexels-photo-264648.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Corporate',
    description: 'HQ campuses and business parks',
    icon: Briefcase,
    image:
      'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  { step: 1, title: 'Consultation', description: 'We map your site, vehicles and energy goals.', icon: Plug },
  { step: 2, title: 'Site Survey', description: 'Engineers assess electrical capacity and layout.', icon: Activity },
  { step: 3, title: 'Proposal', description: 'A transparent scope, timeline and fixed quote.', icon: Briefcase },
  { step: 4, title: 'Installation', description: 'Certified crews install to local standards.', icon: Zap },
  { step: 5, title: 'Testing', description: 'Full commissioning, safety and load validation.', icon: Gauge },
  { step: 6, title: 'Handover', description: 'Training, documentation and app onboarding.', icon: ShieldCheck },
  { step: 7, title: 'Support', description: '24/7 monitoring and preventive maintenance.', icon: Clock },
];

export type PricingTier = {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: 'Product Pricing',
    tagline: 'From AED 2,900',
    description: 'Buy a Gentrix charger outright with full warranty and app access.',
    features: ['AC 7kW – 22kW units', 'DC 20kW – 40kW units', '2-year hardware warranty', 'Free firmware updates'],
  },
  {
    name: 'Custom Projects',
    tagline: 'Tailored quote',
    description: 'Multi-site, multi-charger deployments with energy management and SLA.',
    features: ['Site engineering & design', 'Backend & billing platform', 'Lease & opex models', '24/7 SLA support'],
    highlighted: true,
  },
  {
    name: 'Installation Pricing',
    tagline: 'From AED 1,200',
    description: 'Professional certified installation with electrical upgrades as needed.',
    features: ['Licensed electricians', 'Cable runs & protection', 'DEWA / FEWA compliance', 'Commissioning & test'],
  },
];

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyGentrix: Feature[] = [
  {
    title: 'Smart Charging',
    description: 'OCPP 2.0.1 backend, dynamic load balancing and scheduled charging to cut demand charges.',
    icon: Cpu,
  },
  {
    title: 'Future Ready',
    description: 'ISO 15118, plug-and-charge and V2G-ready hardware that grows with the standard.',
    icon: Zap,
  },
  {
    title: 'Scalable Infrastructure',
    description: 'From a single home unit to a 100-bay fleet hub, managed from one dashboard.',
    icon: Network,
  },
  {
    title: 'Reliable Performance',
    description: 'Ambient-rated to 55°C and IP55, engineered for Gulf climate conditions.',
    icon: ShieldCheck,
  },
  {
    title: 'Energy Efficient',
    description: 'Up to 95% conversion efficiency with sleep-mode standby losses under 2W.',
    icon: Gauge,
  },
  {
    title: '24/7 Support',
    description: 'Local UAE support team, remote diagnostics and preventive maintenance.',
    icon: Clock,
  },
];

export type SustainabilityStat = {
  value: string;
  label: string;
  icon: LucideIcon;
};

export const sustainabilityStats: SustainabilityStat[] = [
  { value: '−4.2t', label: 'CO₂ avoided per charger / year', icon: Leaf },
  { value: '95%', label: 'Renewable-ready energy mix', icon: Sun },
  { value: '100%', label: 'Recyclable packaging', icon: Recycle },
  { value: 'UAE', label: 'Net Zero 2050 aligned', icon: Globe2 },
];

export const sustainabilityPillars: Feature[] = [
  {
    title: 'Lower Carbon Footprint',
    description: 'Every Gentrix session is metered and reported, so you can prove Scope 1 reductions to stakeholders.',
    icon: Leaf,
  },
  {
    title: 'Supports UAE Green Vision',
    description: 'Aligned with the UAE Net Zero 2050 strategy and the Dubai EV Strategy 2030 infrastructure targets.',
    icon: Globe2,
  },
  {
    title: 'Efficient Power Management',
    description: 'Dynamic load balancing and solar-aware charging shift demand to clean, low-cost hours automatically.',
    icon: Activity,
  },
  {
    title: 'Clean Energy Transition',
    description: 'Pair Gentrix with rooftop PV and battery storage to charge on sunshine and decouple from the grid.',
    icon: Sun,
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: 'How long does installation take?',
    answer:
      'A single home charger is typically installed in half a day. Commercial multi-charger sites take 2–5 days depending on cable runs and any required electrical upgrades, which we scope during the site survey.',
  },
  {
    question: 'Which EVs are supported?',
    answer:
      'All Gentrix AC chargers use the standard Type 2 connector compatible with every EV sold in the UAE. Our DC chargers offer CCS2 and CHAdeMO, covering virtually every passenger and light commercial EV on the road.',
  },
  {
    question: 'Home vs Commercial chargers — what is the difference?',
    answer:
      'Home AC chargers (7–22kW) top up a car over a few hours and are ideal for overnight use. Commercial DC fast chargers (20–40kW) deliver meaningful range in minutes and include billing, multi-user RFID and backend management for public or fleet use.',
  },
  {
    question: 'What warranty do Gentrix chargers carry?',
    answer:
      'All Gentrix hardware comes with a 2-year manufacturer warranty covering parts and labour. Extended warranty and SLA options are available for commercial and fleet deployments.',
  },
  {
    question: 'Do you offer maintenance?',
    answer:
      'Yes. We provide preventive maintenance plans with quarterly inspections, firmware updates and 24/7 remote monitoring. Fleet and government sites can opt into a full SLA with guaranteed response times.',
  },
  {
    question: 'Can I lease a charger instead of buying?',
    answer:
      'Yes. Our lease model lets businesses and fleet operators pay a monthly fee that includes the charger, installation, maintenance and software — no upfront capital required. Ask us about our 24 and 36-month terms.',
  },
  {
    question: 'How do I request a custom quotation?',
    answer:
      'Use the Request a Quote button or the contact form on this page. Share your site, number of chargers and expected usage and our engineers will send a fixed-scope proposal within two business days.',
  },
];

export const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Why Gentrix', href: '#why-gentrix' },
  { label: 'FAQ', href: '#faq' },
];

export const heroBadges = [
  'CE Certified',
  'Smart Charging',
  'Lease Model Available',
  'First UAE-Originated 20kW DC Fast Charger',
];

export const heroStats = [
  { value: '20 kW', label: 'DC Fast Charging', icon: Zap },
  { value: 'Smart', label: 'Energy Management', icon: Cpu },
  { value: 'Scalable', label: 'EV Infrastructure', icon: Network },
];

export const heroFeatureIcons = {
  BatteryCharging,
  Wifi,
  Activity,
};

export type ServiceTab = {
  label: string;
  title: string;
  description: string;
  image: string;
  features: string[];
};

export const serviceTabs: ServiceTab[] = [
  {
    label: 'AC Charging',
    title: 'AC Charging Solutions',
    description:
      'Reliable AC chargers for homes, apartments and commercial buildings — managed from a single app.',
    image:
      'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: ['7kW – 22kW output', 'Type 2 connector', 'RFID & app start', 'Dynamic load balancing'],
  },
  {
    label: 'DC Fast Charging',
    title: 'DC Fast Charging',
    description:
      'The first UAE-originated DC fast chargers, engineered for Gulf conditions and rapid turnaround.',
    image:
      'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: ['20kW – 40kW output', 'CCS2 + CHAdeMO', 'Liquid-cooled', 'Pay-terminal ready'],
  },
  {
    label: 'Fleet & Backend',
    title: 'Fleet & Energy Management',
    description:
      'Scalable infrastructure with OCPP backend, billing, load sharing and fleet dashboards.',
    image:
      'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: ['OCPP 1.6J / 2.0.1', 'Billing & RFID', 'Load sharing up to 40 units', 'Fleet dashboard'],
  },
  {
    label: 'Installation & SLA',
    title: 'Installation & Support',
    description:
      'Certified installation, commissioning and 24/7 monitoring with preventive maintenance plans.',
    image:
      'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: ['Licensed electricians', 'DEWA / FEWA compliance', '24/7 remote monitoring', 'SLA support'],
  },
];

export type ServiceCard = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export const serviceCards: ServiceCard[] = [
  {
    title: 'AC Chargers',
    description: 'Home and commercial AC charging units from 7kW to 22kW with smart app control.',
    image:
      'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '#products',
  },
  {
    title: 'DC Fast Chargers',
    description: 'UAE-engineered 20kW and 40kW DC fast chargers for rapid public and fleet charging.',
    image:
      'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '#products',
  },
  {
    title: 'Fleet Solutions',
    description: 'Multi-charger deployments with backend billing, energy management and SLA support.',
    image:
      'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '#solutions',
  },
  {
    title: 'Installation & SLA',
    description: 'Certified installation, commissioning and 24/7 monitoring with preventive maintenance.',
    image:
      'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '#process',
  },
];

export type BrandAsset = {
  name: string;
  logoText: string;
  url?: string;
};

export const brandAssets: BrandAsset[] = [
  { name: 'Gentrix', logoText: 'Gentrix', url: '#' },
  { name: 'Hardhitter', logoText: 'Hardhitter', url: '#' },
  { name: 'ABB', logoText: 'ABB', url: '#' },
  { name: 'Schneider Electric', logoText: 'Schneider', url: '#' },
  { name: 'ChargePoint', logoText: 'ChargePoint', url: '#' },
  { name: 'Wallbox', logoText: 'Wallbox', url: '#' },
];
