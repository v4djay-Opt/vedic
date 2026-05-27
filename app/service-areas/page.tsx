import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Pashu Aahar Near Bikapur — Call 7840882270 | Vedic Heritage',
  description:
    'Vedic Heritage cattle feed dealer in Bikapur, Ramnagar, Ayodhya District. Serving Eastern UP farmers. Call 7840882270. Visit store 8AM–7PM.',
  alternates: { canonical: '/service-areas' },
};

const serviceAreaSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Vedic Heritage',
  telephone: '+917840882270',
  url: 'https://vedicheritage.in',
  address: {
    '@type': 'PostalAddress',
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
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 26.5151,
      longitude: 82.1319,
    },
    geoRadius: '60000',
  },
  areaServed: [
    'Ayodhya', 'Faizabad', 'Bikapur', 'Sohawal', 'Milkipur',
    'Rudauli', 'Maya Bazar', 'Tanda', 'Akbarpur', 'Sohratgarh',
    'Nawabganj', 'Tarabganj', 'Goshainganj', 'Kumarganj', 'Masaudha',
  ].map((name) => ({ '@type': 'City', name })),
};

const areas = [
  { name: 'Ayodhya',      distKm: 0,  tag: 'City Center',  free: true  },
  { name: 'Faizabad',     distKm: 7,  tag: 'District HQ',  free: true  },
  { name: 'Maya Bazar',   distKm: 8,  tag: '',              free: true  },
  { name: 'Sohawal',      distKm: 14, tag: '',              free: true  },
  { name: 'Bikapur',      distKm: 18, tag: '',              free: true  },
  { name: 'Nawabganj',    distKm: 20, tag: '',              free: true  },
  { name: 'Sohratgarh',   distKm: 22, tag: '',              free: true  },
  { name: 'Milkipur',     distKm: 22, tag: '',              free: true  },
  { name: 'Goshainganj',  distKm: 25, tag: '',              free: true  },
  { name: 'Masaudha',     distKm: 27, tag: '',              free: true  },
  { name: 'Tarabganj',    distKm: 30, tag: '',              free: false },
  { name: 'Rudauli',      distKm: 35, tag: '',              free: false },
  { name: 'Kumarganj',    distKm: 38, tag: '',              free: false },
  { name: 'Akbarpur',     distKm: 52, tag: 'Bulk orders',   free: false },
  { name: 'Tanda',        distKm: 60, tag: 'Bulk orders',   free: false },
];

const WA = `https://wa.me/919911662492?text=${encodeURIComponent('नमस्ते! मुझे अपने क्षेत्र में delivery की जानकारी चाहिए।')}`;

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd schema={serviceAreaSchema as Record<string, unknown>} />

      {/* Hero Banner */}
      <section className="relative bg-deepGreen -mt-24 pt-24 flex items-center h-[55vh] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute -top-20 -right-20 w-80 h-80 text-white/5" viewBox="0 0 200 200" fill="currentColor">
            <circle cx="100" cy="100" r="100" />
          </svg>
          <svg className="absolute top-1/3 -left-12 w-48 h-48 text-white/5" viewBox="0 0 200 200" fill="currentColor">
            <ellipse cx="100" cy="100" rx="100" ry="70" />
          </svg>
          <svg className="absolute bottom-8 right-8 w-32 h-32 text-white/10" viewBox="0 0 100 100">
            <circle cx="20" cy="20" r="8" /><circle cx="50" cy="20" r="8" /><circle cx="80" cy="20" r="8" />
            <circle cx="20" cy="50" r="8" /><circle cx="50" cy="50" r="8" /><circle cx="80" cy="50" r="8" />
            <circle cx="20" cy="80" r="8" /><circle cx="50" cy="80" r="8" /><circle cx="80" cy="80" r="8" />
          </svg>
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 border border-white/20 text-white/90 text-[11px] font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full mb-6">
            📍 DELIVERY COVERAGE
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
            We Serve These Areas
            <br /><span className="text-ochre">Near Ayodhya</span>
          </h1>
          <p className="text-white/60 text-base mt-2 font-devanagari">
            हम इन क्षेत्रों में सेवा देते हैं — अयोध्या के निकट
          </p>
          <p className="text-white/80 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Free delivery within 25km of Ayodhya city. Bulk orders delivered pan-UP.
            Same-day and next-day delivery available for most areas.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-7">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-cream text-deepGreen font-semibold px-6 py-3 rounded-xl shadow-md transition-all text-sm"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Check Your Area on WhatsApp
            </a>
            <a
              href="tel:+917840882270"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-deepGreen font-semibold px-6 py-3 rounded-xl transition-all text-sm"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-deepGreen">
              All 15 Service Areas
            </h2>
            <p className="text-gray-400 text-sm mt-1.5 font-devanagari">सभी 15 सेवा क्षेत्र — दूरी सहित</p>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-xs font-semibold">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-deepGreen inline-block" />
              Free delivery (≤25km)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-ochre inline-block" />
              Bulk orders / paid delivery (&gt;25km)
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {areas.map((a) => (
              <div
                key={a.name}
                className={`relative flex flex-col items-center text-center rounded-2xl p-4 border transition-all hover:shadow-md ${
                  a.free
                    ? 'bg-deepGreen/5 border-deepGreen/20 hover:border-deepGreen/40'
                    : 'bg-ochre/5 border-ochre/20 hover:border-ochre/40'
                }`}
              >
                <div className={`w-2 h-2 rounded-full mb-2 ${a.free ? 'bg-deepGreen' : 'bg-ochre'}`} />
                <p className="font-bold text-deepGreen text-sm leading-tight">{a.name}</p>
                {a.tag && (
                  <span className="text-[10px] text-gray-400 font-medium mt-0.5">{a.tag}</span>
                )}
                <p className={`text-xs font-semibold mt-2 ${a.free ? 'text-deepGreen' : 'text-ochre'}`}>
                  {a.distKm === 0 ? 'City center' : `~${a.distKm} km`}
                </p>
                {a.free && (
                  <span className="absolute -top-1.5 -right-1.5 bg-deepGreen text-white text-[9px] font-black uppercase px-1.5 py-0.5 rounded-full tracking-wide">
                    FREE
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-xs mt-8">
            Don&apos;t see your area?{' '}
            <a href={WA} target="_blank" rel="noopener noreferrer" className="text-deepGreen font-semibold hover:text-ochre transition-colors">
              WhatsApp us — we&apos;ll confirm delivery availability.
            </a>
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="bg-sage/30 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-deepGreen">Find Us on the Map</h2>
            <p className="text-gray-400 text-sm mt-1.5 font-devanagari">अयोध्या — हमारा सेवा केंद्र</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-deepGreen/10">
            <iframe
              title="Vedic Heritage — Ayodhya on Google Maps"
              src="https://maps.google.com/maps?q=Ayodhya,Uttar+Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-center text-gray-400 text-xs mt-4">
            📍 Vedic Heritage, Ayodhya, Uttar Pradesh — 224001
          </p>
        </div>
      </section>

      {/* Delivery info */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-deepGreen">Delivery Policy</h2>
            <p className="text-gray-400 text-sm mt-1.5 font-devanagari">डिलीवरी नीति</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: '🚚',
                title: 'Free Delivery',
                titleHi: 'मुफ्त डिलीवरी',
                desc: 'All orders within 25km of Ayodhya. Minimum order value ₹500.',
              },
              {
                icon: '⚡',
                title: 'Same-Day Delivery',
                titleHi: 'उसी दिन डिलीवरी',
                desc: 'Order before 12pm for same-day delivery within 15km of Ayodhya.',
              },
              {
                icon: '📦',
                title: 'Bulk Pan-UP',
                titleHi: 'थोक — पूरे UP में',
                desc: 'Bulk orders (50kg+) delivered across Uttar Pradesh. Contact for rates.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-cream border border-deepGreen/10 rounded-2xl p-6 text-center hover:shadow-md hover:border-deepGreen/25 transition-all"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="font-black text-deepGreen text-base">{item.title}</p>
                <p className="text-gray-400 text-xs font-devanagari mt-0.5">{item.titleHi}</p>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deepGreen py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
            Ready to Order?
          </h2>
          <p className="text-white/60 text-sm font-devanagari mb-8">
            ऑर्डर करने के लिए WhatsApp करें या Call करें — 24 घंटे जवाब मिलता है
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-deepGreen font-bold px-7 py-3.5 rounded-xl hover:bg-cream transition-colors text-sm shadow-md"
            >
              WhatsApp Order
            </a>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-deepGreen font-bold px-7 py-3.5 rounded-xl transition-all text-sm"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
