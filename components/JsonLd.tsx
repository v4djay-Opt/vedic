export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Vedic Heritage',
  alternateName: 'वैदिक हेरिटेज',
  description:
    'Authorized Kapila Pashu Aahar dealer in Ayodhya. Pure havan samagri, cow dung cake, hawan sticks. Free delivery within 25km.',
  url: 'https://vedicheritage.in',
  telephone: '+919999999999',
  priceRange: '₹₹',
  image: 'https://vedicheritage.in/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Near Ram Mandir, Ayodhya',
    addressLocality: 'Ayodhya',
    addressRegion: 'Uttar Pradesh',
    postalCode: '224001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.7922,
    longitude: 82.1998,
  },
  hasMap: 'https://maps.google.com/?q=26.7922,82.1998',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
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
