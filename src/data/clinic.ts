export const clinic = {
  name: 'Knees & Spine Physio Clinic',
  shortName: 'Knees & Spine',
  tagline: 'Move with more comfort. Live with more confidence.',
  description:
    'Thoughtful physiotherapy and rehabilitation for knees, spine, mobility, and everyday movement in Canal Garden, Lahore.',
  url: import.meta.env.PUBLIC_SITE_URL || 'https://kneesandspine.com',
  phone: '+92 300 000 0000',
  whatsapp: '923000000000',
  email: 'hello@kneesandspine.com',
  address: 'H Block Commercial Market, Canal Garden, Lahore, Pakistan',
  mapsUrl: 'https://maps.google.com/?q=H+Block+Commercial+Market+Canal+Garden+Lahore',
  hours: 'Mon – Sat · 10:00 am – 8:00 pm',
  social: { instagram: '#', facebook: '#' },
  editableNote: 'Replace contact details, links, hours, and social URLs here before launch.',
} as const;
export const physiotherapist = {
  name: 'Dr. Laiba Arshad',
  credential: 'DPT',
  role: 'Lead Physiotherapist',
} as const;
