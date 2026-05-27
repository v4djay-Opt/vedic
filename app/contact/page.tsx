import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import InquiryForm from '@/components/InquiryForm';

export const metadata: Metadata = {
  title: 'Contact Vedic Heritage Bikapur — Call 7840882270',
  description:
    'Contact Vedic Heritage in Ramnagar, Bikapur, Ayodhya District. Phone: 7840882270. WhatsApp: 9911662492. Open 8AM–7PM daily.',
  alternates: { canonical: '/contact' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Vedic Heritage',
  alternateName: 'वैदिक हेरिटेज',
  telephone: '+917840882270',
  url: 'https://vedicheritage.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ramnagar',
    addressLocality: 'Bikapur',
    addressRegion: 'Uttar Pradesh',
    postalCode: '224204',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '26.5151',
    longitude: '82.1319',
  },
  openingHours: 'Mo-Su 08:00-19:00',
  priceRange: '₹₹',
  areaServed: ['Bikapur', 'Ramnagar', 'Bharatkund', 'Milkipur', 'Sohawal', 'Goshainganj', 'Ayodhya', 'Faizabad'],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd schema={localBusinessSchema as Record<string, unknown>} />

      {/* Hero */}
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
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center bg-white/10 border border-white/20 text-white/90 text-[11px] font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full mb-5">
              📞 SAMPARK KAREIN
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
              Vedic Heritage — Call 7840882270
            </h1>
            <p className="text-white/60 text-sm mt-2 font-devanagari leading-relaxed">
              वैदिक हेरिटेज — संपर्क करें
            </p>
            <p className="text-white/80 text-base mt-5 leading-relaxed">
              Visit our store in Ramnagar, Bikapur, Ayodhya District. We are open daily from 8AM to 7PM.
              Call or WhatsApp us for any product inquiry, bulk order, or general question.
            </p>
            <p className="text-white/50 text-sm mt-2 font-devanagari leading-relaxed">
              हमारा स्टोर रामनगर, बीकापुर, अयोध्या जिले में है। सुबह ८ बजे से शाम ७ बजे तक खुला।
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards + Map */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

            {/* Left — Contact Info */}
            <div className="space-y-6">
              <div className="bg-sage/30 border border-deepGreen/10 rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-black text-deepGreen mb-6">Contact Information</h2>

                <div className="space-y-5">
                  <a
                    href="tel:+917840882270"
                    className="flex items-center gap-4 group"
                  >
                    <span className="w-12 h-12 rounded-xl bg-deepGreen text-white flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" /></svg>
                    </span>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Phone</p>
                      <p className="text-deepGreen font-black text-lg group-hover:text-ochre transition-colors">78408 82270</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919911662492"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <span className="w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    </span>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">WhatsApp</p>
                      <p className="text-deepGreen font-black text-lg group-hover:text-ochre transition-colors">99116 62492</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <span className="w-12 h-12 rounded-xl bg-ochre/20 text-ochre flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </span>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Timing</p>
                      <p className="text-deepGreen font-bold">8:00 AM — 7:00 PM, Monday–Sunday</p>
                      <p className="text-gray-400 text-xs font-devanagari">सुबह ८ बजे से शाम ७ बजे तक, सप्ताह के सातों दिन</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="w-12 h-12 rounded-xl bg-gray-200 text-gray-600 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </span>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Address</p>
                      <p className="text-deepGreen font-bold">Ramnagar, Bikapur, Ayodhya District</p>
                      <p className="text-gray-400 text-xs font-devanagari">उत्तर प्रदेश — २२४२०४</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=26.5151,82.1319"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-deepGreen hover:text-ochre font-semibold text-sm transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  Rasta Dekhein →
                </a>
              </div>

              {/* Inquiry Form */}
              <div className="bg-deepGreen/95 border border-white/10 rounded-2xl p-6 sm:p-8">
                <h3 className="text-white font-bold text-lg mb-1">Send an Inquiry</h3>
                <p className="text-white/50 text-sm mb-6 font-devanagari">हमसे संपर्क करें</p>
                <InquiryForm />
              </div>
            </div>

            {/* Right — Map */}
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <iframe
                  src="https://maps.google.com/maps?q=26.5151,82.1319&z=15&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vedic Heritage Location"
                  className="rounded-xl"
                />
              </div>
              <div className="bg-cream border border-deepGreen/10 rounded-2xl p-6">
                <h3 className="font-bold text-deepGreen mb-2">How to Reach Us</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Vedic Heritage is located in Ramnagar, Bikapur, Ayodhya District, Eastern Uttar Pradesh.
                  The store is easily accessible from the main Bikapur road. Look for the Vedic Heritage
                  signboard near Ramnagar Chowk.
                </p>
                <p className="text-gray-400 text-sm mt-2 font-devanagari leading-relaxed">
                  वैदिक हेरिटेज रामनगर, बीकापुर, अयोध्या जिले, पूर्वी उत्तर प्रदेश में स्थित है।
                  मुख्य बीकापुर सड़क से आसानी से पहुँचा जा सकता है।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
