// Air Wizards Heating and Cooling: demo config
// Lines marked CONFIRM are placeholders. Check them with the owner on the call.

const businessName = 'Air Wizards Heating and Cooling'
const tagline = 'Let us work our magic'
const city = 'Las Vegas'
const emergencyPhone = {
  raw: '+17023037810',
  display: '(702) 303-7810',
} as const

export const siteConfig = {
  businessName,
  tagline,
  legalName: 'Air Wizards Heating and Cooling LLC',

  phone: {
    raw: '+17023037810',
    display: '(702) 303-7810',
  },
  emergencyPhone,
  email: '', // CONFIRM: not on file

  address: '4012 S Rainbow Blvd, Ste K-623',
  city,
  state: 'NV',
  zip: '89103',

  licenseNumber: '0074574',
  yearsInBusiness: 0, // CONFIRM
  yearFounded: 0, // CONFIRM

  hours: {
    weekday: 'Mon–Sat, 7a–7p', // CONFIRM
    weekend: '7 days a week', // CONFIRM
    emergency: '24 / 7 / 365', // CONFIRM
  },

  serviceAreas: [
    'Las Vegas',
    'Henderson',
    'North Las Vegas',
    'Summerlin',
    'Spring Valley',
    'Enterprise',
    'Paradise',
  ],

  services: [
    {
      name: 'AC repair',
      description:
        'Fast diagnosis and repair for systems that quit when Vegas heat hits hardest.',
    },
    {
      name: 'System replacement',
      description:
        'Properly sized, efficient equipment installed cleanly, with permits handled.',
    },
    {
      name: 'Tune-ups & maintenance',
      description:
        'Seasonal service that catches small problems before they become breakdowns.',
    },
    {
      name: 'Ductwork & airflow',
      description:
        'Leak sealing and balancing so every room actually cools.',
    },
    {
      name: 'Indoor air quality',
      description:
        'Filtration and purification for dust, allergens, and monsoon season.',
    },
    {
      name: 'Heating & furnaces',
      description:
        'Furnace and heat pump repair for the weeks Vegas gets cold.',
    },
  ],

  // Leave a link empty to omit it from structured data.
  socialLinks: {
    facebook: '',
    instagram: '',
    google: '',
    yelp: '',
  },

  // No Google rating on file for this business, so these stay at 0
  // rather than showing made-up review numbers.
  reviewCount: 0,
  averageRating: 0,

  primaryCTA: 'Call Now',

  logo: {
    src: '/logo.png',
    alt: `${businessName} logo`,
    height: 48,
  },
  favicon: '/favicon.png',
  formEndpoint: 'https://formspree.io/f/mwlpjaye',
  siteUrl: 'https://demo2.websitesbygoldin.com',

  // Pulled from the Air Wizards logo: royal blue, wizard red, deep indigo.
  colors: {
    primary: '#1a1fc4',
    primaryDark: '#12158f',
    secondary: '#14123a',
    accent: '#d02f3c',
    background: '#f8f9fc',
    surface: '#ffffff',
    textPrimary: '#14123a',
    textMuted: '#5a5873',
  },

  seo: {
    title: `${businessName} | AC & Heating Repair in ${city}`,
    description: `${businessName} provides licensed AC repair, installation, and heating service across ${city} and Henderson. NV license 0074574. Call ${emergencyPhone.display}.`,
    ogDescription: `Licensed heating and cooling service across the ${city} valley. Call ${emergencyPhone.display}.`,
    ogImage: '/assets/hero-tools.jpg',
  },
} as const

export type SiteConfig = typeof siteConfig
