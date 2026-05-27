import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import FaqSection, { type FaqItem } from '@/components/FaqSection';
import InquiryForm from '@/components/InquiryForm';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Pashu Aahar Bikapur — Kapila, Bansuri, Brajwasi, Godrej | Call 7840882270',
  description:
    'Buy premium cattle feed in Bikapur: Kapila, Bansuri, Brajwasi Feeds, Godrej Agrovet. Best price, genuine products. Visit Vedic Heritage 8AM–7PM. Call 7840882270.',
  alternates: { canonical: '/pashu-aahar' },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Kapila Pashu Aahar', url: 'https://vedicheritage.in/kapila-pashu-aahar-ayodhya' },
    { '@type': 'ListItem', position: 2, name: 'Bansuri Pashu Aahar', url: 'https://vedicheritage.in/bansuri-pashu-aahar-bikapur' },
    { '@type': 'ListItem', position: 3, name: 'Brajwasi Feeds', url: 'https://vedicheritage.in/brajwasi-feeds-bikapur' },
    { '@type': 'ListItem', position: 4, name: 'Godrej Agrovet', url: 'https://vedicheritage.in/godrej-agrovet-bikapur' },
  ],
};

const brands = [
  { name: 'Kapila Pashu Aahar', nameHindi: 'कपिला पशु आहार', desc: 'Premium dairy feed for high milk yield', slug: 'kapila-pashu-aahar-ayodhya', badge: 'Authorized Dealer' },
  { name: 'Bansuri Pashu Aahar', nameHindi: 'बांसुरी पशु आहार', desc: 'Best selling brand across UP', slug: 'bansuri-pashu-aahar-bikapur', badge: 'Best Seller' },
  { name: 'Brajwasi Feeds', nameHindi: 'ब्रजवासी फीड्स', desc: 'Popular choice for local farmers', slug: 'brajwasi-feeds-bikapur', badge: 'Popular' },
  { name: 'Godrej Agrovet', nameHindi: 'गोदरेज एग्रोवेट', desc: 'Trusted national brand', slug: 'godrej-agrovet-bikapur', badge: 'Trusted' },
];

const extras = [
  { name: 'Mineral Mixture', nameHindi: 'मिनरल मिक्सचर', desc: 'Essential minerals for healthy cattle', slug: 'mineral-mixture-bikapur', badge: 'Essential' },
  { name: 'Bulk Order', nameHindi: 'थोक ऑर्डर', desc: 'Special rates on 50kg+ orders', slug: 'bulk-inquiry', badge: 'Best Value' },
];

const faqs: FaqItem[] = [
  {
    q: 'Bikapur mein sabse accha pashu aahar kaunsa hai?',
    qHindi: 'बीकापुर में सबसे अच्छा पशु आहार कौन सा है?',
    a: 'Kapila, Bansuri, Brajwasi, and Godrej Agrovet are all excellent cattle feed brands available at Vedic Heritage in Bikapur. Kapila is best for high-yielding dairy cows, Bansuri offers great value, Brajwasi is popular among local farmers, and Godrej is a trusted national brand. Visit our store to compare.',
  },
  {
    q: 'Cattle feed ki price kya hai Bikapur mein?',
    qHindi: 'कैटल फीड की कीमत क्या है बीकापुर में?',
    a: 'Prices vary by brand and pack size (10kg, 25kg, 50kg). We offer the most competitive rates in the Bikapur and Ayodhya market. Call 7840882270 or WhatsApp 9911662492 for current pricing on all brands.',
  },
  {
    q: 'Bulk order pe discount milta hai?',
    qHindi: 'थोक ऑर्डर पर डिस्काउंट मिलता है?',
    a: 'Yes, bulk discounts are available for orders above 50kg. Dairy farms, cooperatives, and gaushala operators get special wholesale rates. Visit /bulk-inquiry or WhatsApp 9911662492 for a custom quote.',
  },
  {
    q: 'Pashu aahar se doodh kitna badhta hai?',
    qHindi: 'पशु आहार से दूध कितना बढ़ता है?',
    a: 'Farmers in the Bikapur region report 12–25% improvement in milk yield within 4–6 weeks of switching to quality cattle feed like Kapila or Bansuri. Results depend on proper feeding schedule and animal health.',
  },
  {
    q: 'Store ka timing kya hai?',
    qHindi: 'स्टोर का टाइमिंग क्या है?',
    a: 'Vedic Heritage store in Ramnagar, Bikapur is open daily from 8:00 AM to 7:00 PM, Monday through Sunday. Visit us anytime during business hours — no appointment needed for walk-in purchases.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const serviceAreas = [
  'Bikapur', 'Ramnagar', 'Bharatkund', 'Milkipur', 'Sohawal',
  'Goshainganj', 'Ayodhya', 'Faizabad',
];

export default function PashuAaharPage() {
  return (
    <>
      <JsonLd schema={productSchema as Record<string, unknown>} />
      <JsonLd schema={faqSchema as Record<string, unknown>} />

      {/* Hero Banner — dark green with abstract shapes, extends behind transparent navbar */}
      <section className="relative bg-deepGreen -mt-24 pt-24 flex items-center h-[55vh] overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large top-right circle */}
          <svg className="absolute -top-20 -right-20 w-80 h-80 text-white/5" viewBox="0 0 200 200" fill="currentColor">
            <circle cx="100" cy="100" r="100" />
          </svg>
          {/* Mid-left oval */}
          <svg className="absolute top-1/3 -left-12 w-48 h-48 text-white/5" viewBox="0 0 200 200" fill="currentColor">
            <ellipse cx="100" cy="100" rx="100" ry="70" />
          </svg>
          {/* Bottom-right dots pattern */}
          <svg className="absolute bottom-8 right-8 w-32 h-32 text-white/10" viewBox="0 0 100 100">
            <circle cx="20" cy="20" r="8" />
            <circle cx="50" cy="20" r="8" />
            <circle cx="80" cy="20" r="8" />
            <circle cx="20" cy="50" r="8" />
            <circle cx="50" cy="50" r="8" />
            <circle cx="80" cy="50" r="8" />
            <circle cx="20" cy="80" r="8" />
            <circle cx="50" cy="80" r="8" />
            <circle cx="80" cy="80" r="8" />
          </svg>
          {/* Diagonal line accent */}
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 border border-white/20 text-white/90 text-[11px] font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full mb-5">
            🐄 CATTLE FEED DEALER — BIKAPUR
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
            Pashu Aahar Bikapur — Call 7840882270
          </h1>
          <p className="text-white/60 text-sm mt-2 font-devanagari leading-relaxed">
            पशु आहार बीकापुर — कपिला, बांसुरी, ब्रजवासी, गोदरेज
          </p>
          <p className="text-white/80 text-base mt-5 leading-relaxed max-w-2xl mx-auto">
            Vedic Heritage is your trusted cattle feed dealer in Ramnagar, Bikapur. We stock all
            major brands — Kapila, Bansuri, Brajwasi Feeds, and Godrej Agrovet — at the best prices
            in Ayodhya District. Visit us 8AM–7PM daily.
          </p>
          <p className="text-white/50 text-sm mt-2 font-devanagari leading-relaxed max-w-2xl mx-auto">
            वैदिक हेरिटेज रामनगर, बीकापुर में आपका विश्वसनीय पशु आहार डीलर। हम सभी प्रमुख ब्रांड्स
            कपिला, बांसुरी, ब्रजवासी फीड्स और गोदरेज एग्रोवेट बेस्ट प्राइस पर उपलब्ध कराते हैं।
          </p>
        </div>
      </section>

      {/* ── Content + Sidebar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 md:space-y-10">

            {/* ── Brands Grid ── */}
            <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 py-10 md:py-14">
              <div className="mb-10 text-left">
                <h2 className="text-3xl sm:text-4xl font-black text-deepGreen">Cattle Feed Brands</h2>
                <p className="text-gray-400 text-sm mt-1.5 font-devanagari">पशु आहार ब्रांड्स</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {brands.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/${b.slug}`}
                    className="group bg-cream border border-deepGreen/10 rounded-2xl p-6 hover:shadow-md hover:border-deepGreen/30 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-deepGreen/10 text-deepGreen text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full">
                        {b.badge}
                      </span>
                      <span className="text-2xl">🐄</span>
                    </div>
                    <p className="font-bold text-deepGreen text-base group-hover:text-ochre transition-colors">{b.name}</p>
                    <p className="text-gray-400 text-xs font-devanagari mt-0.5">{b.nameHindi}</p>
                    <p className="text-gray-500 text-sm mt-2 leading-relaxed">{b.desc}</p>
                    <p className="text-deepGreen text-xs font-semibold mt-3 flex items-center gap-1">
                      View Details →
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            {/* ── Extras ── */}
            <section className="bg-sage/40 border border-deepGreen/20 rounded-2xl p-6 md:p-8 py-10 md:py-14">
              <div className="mb-10 text-left">
                <h2 className="text-3xl sm:text-4xl font-black text-deepGreen">Also Available</h2>
                <p className="text-gray-400 text-sm mt-1.5 font-devanagari">यह भी उपलब्ध है</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
                {extras.map((e) => (
                  <Link
                    key={e.slug}
                    href={`/${e.slug}`}
                    className="group bg-white border border-deepGreen/10 rounded-2xl p-6 hover:shadow-md hover:border-deepGreen/30 transition-all"
                  >
                    <span className="bg-ochre/10 text-ochre text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full">
                      {e.badge}
                    </span>
                    <p className="font-bold text-deepGreen text-base mt-3 group-hover:text-ochre transition-colors">{e.name}</p>
                    <p className="text-gray-400 text-xs font-devanagari mt-0.5">{e.nameHindi}</p>
                    <p className="text-gray-500 text-sm mt-2 leading-relaxed">{e.desc}</p>
                  </Link>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Contact Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="text-xs font-bold text-deepGreen/70 uppercase tracking-widest mb-1">Trusted Dealer</p>
                <h3 className="font-black text-deepGreen text-xl mb-1">Pashu Aahar</h3>
                <p className="text-gray-400 text-sm font-devanagari mb-5">पशु आहार — बीकापुर</p>

                <div className="space-y-3">
                  <a
                    href="https://wa.me/919911662492"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-deepGreen hover:bg-deepGreen/90 text-white font-semibold px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm w-full"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    WhatsApp pe Inquiry Karein
                  </a>
                  <a
                    href="tel:+917840882270"
                    className="flex items-center justify-center gap-2 border-2 border-deepGreen text-deepGreen hover:bg-deepGreen hover:text-white font-semibold px-5 py-3 rounded-xl transition-all text-sm w-full"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" /></svg>
                    Call 7840882270
                  </a>
                </div>

                <div className="pt-5 mt-5 border-t border-gray-100 space-y-2.5">
                  {[
                    { label: 'All Major Brands', icon: '✓' },
                    { label: 'Best Price in Bikapur', icon: '✓' },
                    { label: 'Visit Store 8AM–7PM', icon: '✓' },
                  ].map((t) => (
                    <div key={t.label} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                      <span className="text-deepGreen font-bold">{t.icon}</span>
                      {t.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-cream border border-gray-200 rounded-2xl p-6">
                <p className="font-bold text-deepGreen text-sm mb-3">Quick Info</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">📍</span>
                    <div>
                      <p className="text-gray-700 font-medium">Location</p>
                      <p className="text-gray-500">Ramnagar, Bikapur, Ayodhya</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">🕐</span>
                    <div>
                      <p className="text-gray-700 font-medium">Store Hours</p>
                      <p className="text-gray-500">8AM – 7PM Daily</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">🚚</span>
                    <div>
                      <p className="text-gray-700 font-medium">Delivery</p>
                      <p className="text-gray-500">Store pickup only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="bg-deepGreen border border-deepGreen/30 rounded-2xl p-6 shadow-md">
                <div className="inline-flex items-center bg-white/10 border border-white/20 text-white/80 text-[10px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-full mb-3">
                  PLACE YOUR INQUIRY
                </div>
                <h3 className="text-lg font-black text-white mb-1">
                  Inquire About Cattle Feed
                </h3>
                <p className="text-white/55 text-xs mb-5 font-devanagari">
                  पशु आहार के बारे में पूछताछ करें
                </p>
                <InquiryForm defaultProduct="Cattle Feed" />
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Service Areas */}
      <section className="bg-deepGreen py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">Service Areas</h2>
          <p className="text-white/60 text-sm font-devanagari mb-8">हमारे सेवा क्षेत्र</p>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
            {serviceAreas.map((area) => (
              <span key={area} className="bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full">📍 {area}</span>
            ))}
          </div>
          <a href="tel:+917840882270" className="inline-flex items-center gap-2 mt-8 bg-white text-deepGreen font-bold px-6 py-3 rounded-xl hover:bg-cream transition-colors text-sm shadow-md">
            Call 7840882270
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqSection
            faqs={faqs}
            heading="Frequently Asked Questions — Pashu Aahar Bikapur"
            headingHindi="अक्सर पूछे जाने वाले सवाल"
          />
        </div>
      </section>
    </>
  );
}
