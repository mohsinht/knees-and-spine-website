export const clinic = {
  name: 'Knees & Spine Physio Clinic',
  shortName: 'Knees & Spine',
  tagline: 'Move with more comfort. Live with more confidence.',
  description:
    'Thoughtful physiotherapy and rehabilitation for knees, spine, mobility, and everyday movement in Canal Garden, Lahore.',
  website: 'https://kneesandspine.com',
  email: 'kneesandspine@gmail.com',
  phone: { display: '+92 305 4567423', href: 'tel:+923054567423' },
  whatsapp: {
    display: '+92 316 4679634',
    href: 'https://wa.me/923164679634',
    bookingHref:
      'https://wa.me/923164679634?text=Hello%2C%20I%20would%20like%20to%20book%20a%20physiotherapy%20appointment%20at%20Knees%20%26%20Spine%20Physio%20Clinic.',
  },
  address: 'H Block Commercial Market, Canal Garden, Lahore, Pakistan',
  social: {
    instagram: { handle: '@kneesandspine', url: 'https://www.instagram.com/kneesandspine/' },
    facebook: { handle: 'kneesandspine', url: 'https://facebook.com/kneesandspine' },
  },
} as const;
export const physiotherapist = {
  name: 'Dr. Laiba Arshad',
  credential: 'DPT',
  role: 'Lead Physiotherapist',
} as const;
