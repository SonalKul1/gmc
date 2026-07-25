import type { ReactNode } from 'react';

// ─── Data ─────────────────────────────────────────────────────────────────────

export const partners = [
  { logo: 'PKK', name: 'Mr. Pravesh Kumar Kulshreshtha', description: 'Rtd. BARC Scientific Engineer', experience: '25 years' },
  { logo: 'MM', name: 'Mr. Murugan', description: 'Rtd. BARC Glass Blowing Expert', experience: '25 years' },
];

export const testimonials = [
  {
    name: 'Dr. Ananya Sharma',
    role: 'Principal Scientist, National Research Institute',
    quote: 'GMC Technology has been an invaluable partner for our lab. Their precision glassware consistently meets the highest quality standards, and delivery is always on time.',
  },
  {
    name: 'Prof. Rajiv Menon',
    role: 'Head of Chemistry, IIT Bombay',
    quote: 'The photochemical reactors supplied by GMC are exceptional. Robust build, precise specifications, and excellent after-sales support - highly recommended.',
  },
  {
    name: 'Ms. Priya Nair',
    role: 'Lab Manager, BioTech Innovations Pvt. Ltd.',
    quote: 'We have been sourcing custom glassware from GMC for over three years. Their craftsmanship and attention to detail are second to none.',
  },
  {
    name: 'Mr. Suresh Iyer',
    role: 'Procurement Head, Pharma Research Corp.',
    quote: 'Reliable, professional, and technically sound. GMC Technology understands the unique demands of pharmaceutical laboratories and delivers accordingly.',
  },
  {
    name: 'Dr. Kavita Reddy',
    role: 'Research Director, Green Energy Labs',
    quote: 'Their hydrogen distribution systems are built to exacting tolerances. GMC expertise in glass-metal-ceramic fabrication is unmatched in the industry.',
  },
];

export const products: { title: string; tag: string; svg: ReactNode }[] = [
  {
    title: 'High‑Pressure Hydrogen Distribution & Control Systems',
    tag: 'Specialisation',
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="28" r="16" fill="none" stroke="#000" strokeWidth="2" />
        <line x1="32" y1="28" x2="40" y2="22" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        <rect x="26" y="40" width="12" height="4" fill="none" stroke="#000" strokeWidth="2" />
        <rect x="24" y="44" width="16" height="4" fill="none" stroke="#000" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Multi‑Layer Photochemical Reactor Assemblies',
    tag: 'Advanced Systems',
    svg: (<>
      <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="16" width="4" height="32" fill="none" stroke="#000" stroke-width="2" />
        <rect x="28" y="12" width="8" height="4" fill="none" stroke="#000" stroke-width="2" />
        <rect x="28" y="48" width="8" height="4" fill="none" stroke="#000" stroke-width="2" />
        <line x1="24" y1="20" x2="40" y2="20" stroke="#000" stroke-width="2" />
        <line x1="24" y1="44" x2="40" y2="44" stroke="#000" stroke-width="2" />
      </svg>
    </>),
  },
  {
    title: 'Ultra‑High‑Pressure Reactors Systems',
    tag: 'Core Technology',
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <rect x="22" y="14" width="20" height="4" fill="none" stroke="#000" stroke-width="2" />
        <rect x="26" y="18" width="12" height="6" fill="none" stroke="#000" stroke-width="2" />
        <rect x="20" y="24" width="24" height="22" rx="4" ry="4" fill="none" stroke="#000" stroke-width="2" />
        <rect x="24" y="46" width="16" height="4" fill="none" stroke="#000" stroke-width="2" />
      </svg>
    ),
  },
  {
    title: 'Precision Laboratory Glassware Refurbishing',
    tag: 'Services',
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="14" width="8" height="6" fill="none" stroke="#000" stroke-width="2" />
        <path d="M24 20 L18 36 A8 8 0 0 0 26 46 H34 A8 8 0 0 0 42 36 L36 20 Z"
          fill="none" stroke="#000" stroke-width="2" />
        <path d="M46 18 
           L50 14 L54 18 
           L50 22 
           L50 30 
           L46 34 
           L44 32 
           L46 30 Z"
          fill="none" stroke="#000" stroke-width="2" />
        <line x1="46" y1="30" x2="40" y2="40" stroke="#000" stroke-width="2" stroke-linecap="round" />
      </svg>
    ),
  },
];