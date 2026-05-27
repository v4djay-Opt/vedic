export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Vedic Heritage',
  alternateName: 'वैदिक हेरिटेज',
  description:
    'Authorized cattle feed & puja products dealer in Ramnagar, Bikapur, Ayodhya District. Visit our store 8AM–7PM. Call 7840882270.',
  url: 'https://vedicheritage.in',
  telephone: '+917840882270',
  priceRange: '₹₹',
  image: 'https://vedicheritage.in/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ramnagar, Bikapur, Ayodhya District, Eastern UP',
    addressLocality: 'Ayodhya',
    addressRegion: 'Uttar Pradesh',
    postalCode: '224001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.5151,
    longitude: 82.1319,
  },
  hasMap: 'https://maps.google.com/?q=26.5151,82.1319',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '19:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Ayodhya' },
    { '@type': 'City', name: 'Faizabad' },
    { '@type': 'City', name: 'Bikapur' },
    { '@type': 'City', name: 'Sohawal' },
    { '@type': 'City', name: 'Milkipur' },
    { '@type': 'City', name: 'Rudauli' },
    { '@type': 'City', name: 'Bharatkund' },
    { '@type': 'City', name: 'Goshainganj' },
  ],
  sameAs: [],
};

export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Vedic Heritage',
  url: 'https://vedicheritage.in',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://vedicheritage.in/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

interface JsonLdProps {
  schema?: Record<string, unknown>;
}

export default function JsonLd({ schema }: JsonLdProps = {}) {
  const data = schema ?? localBusinessSchema;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
