import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'About Vedic Heritage Bikapur — Call 7840882270',
  description:
    'Vedic Heritage is your trusted cattle feed dealer in Ramnagar, Bikapur, Ayodhya District. Authorized Kapila dealer. All major brands. Visit us 8AM–7PM.',
  alternates: { canonical: '/about' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Vedic Heritage',
  alternateName: 'वैदिक हेरिटेज',
  description:
    'Authorized cattle feed dealer in Ramnagar, Bikapur, Ayodhya District. All major brands available. Puja products from Ram ki Nagri.',
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
  geo: { '@type': 'GeoCoordinates', latitude: '26.5151', longitude: '82.1319' },
  openingHours: 'Mo-Su 08:00-19:00',
  priceRange: '₹₹',
};

const stats = [
  { value: '500+', label: 'Satisfied Farmers', labelHindi: 'खुश किसान' },
  { value: '6+', label: 'Premium Brands', labelHindi: 'प्रीमियम ब्रांड्स' },
  { value: '3+', label: 'Years of Service', labelHindi: 'सेवा के वर्ष' },
  { value: '8AM-7PM', label: 'Store Timing', labelHindi: 'स्टोर टाइमिंग' },
];

const brands = [
  { name: 'Kapila Pashu Aahar', nameHindi: 'कपिला पशु आहार', slug: 'kapila-pashu-aahar-bikapur' },
  { name: 'Bansuri Pashu Aahar', nameHindi: 'बांसुरी पशु आहार', slug: 'bansuri-pashu-aahar-bikapur' },
  { name: 'Brajwasi Feeds', nameHindi: 'ब्रजवासी फीड्स', slug: 'brajwasi-feeds-bikapur' },
  { name: 'Godrej Agrovet', nameHindi: 'गोदरेज एग्रोवेट', slug: 'godrej-agrovet-bikapur' },
  { name: 'Mineral Mixture', nameHindi: 'मिनरल मिक्सचर', slug: 'mineral-mixture-bikapur' },
  { name: 'Bulk Order', nameHindi: 'थोक ऑर्डर', slug: 'bulk-inquiry' },
];

const pujaProducts = [
  { name: 'Havan Samagri', nameHindi: 'हवन सामग्री', desc: 'Pure Vedic havan samagri from Ayodhya' },
  { name: 'Gobar Upla', nameHindi: 'गोबर उपला', desc: 'Desi cow dung cakes for havan & puja' },
  { name: 'Hawan Samidha', nameHindi: 'हवन समिधा', desc: 'Sacred wood sticks for temple havan' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={localBusinessSchema as Record<string, unknown>} />

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
          <div className="inline-flex items-center bg-white/10 border border-white/20 text-white/90 text-[11px] font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full mb-5">
            🌿 VEDIC HERITAGE — BIKAPUR
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
            Vedic Heritage ke Baare Mein
          </h1>
          <p className="text-white/60 text-sm mt-2 font-devanagari leading-relaxed">
            वैदिक हेरिटेज के बारे में
          </p>
          <p className="text-white/80 text-base mt-5 leading-relaxed max-w-2xl mx-auto">
            Vedic Heritage is a trusted cattle feed and puja products dealer based in Ramnagar,
            Bikapur, Ayodhya District, Eastern Uttar Pradesh. We serve local dairy farmers with
            genuine products from all major brands including Kapila, Bansuri, Brajwasi Feeds,
            and Godrej Agrovet. We also bring pure puja samagri from Ram ki Nagri, Ayodhya to
            temples and households across India.
          </p>
          <p className="text-white/50 text-sm mt-2 font-devanagari leading-relaxed max-w-2xl mx-auto">
            वैदिक हेरिटेज रामनगर, बीकापुर, अयोध्या जिले, पूर्वी उत्तर प्रदेश में एक विश्वसनीय पशु आहार
            और पूजा सामग्री डीलर है। हम कपिला, बांसुरी, ब्रजवासी फीड्स और गोदरेज एग्रोवेट सहित सभी
            प्रमुख ब्रांड्स के असली उत्पाद प्रदान करते हैं।
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-cream border border-deepGreen/10 rounded-2xl p-6 text-center hover:shadow-md transition-all">
                <p className="text-3xl font-black text-deepGreen">{s.value}</p>
                <p className="text-gray-600 text-sm font-semibold mt-1">{s.label}</p>
                <p className="text-gray-400 text-xs font-devanagari">{s.labelHindi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-deepGreen mb-3">Our Mission</h2>
          <p className="text-gray-500 text-sm font-devanagari mb-6">हमारा लक्ष्य</p>
          <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
            &quot;Bikapur aur aaspaas ke kisanon ko best quality pashu aahar provide karna
            aur Ram ki Nagri ki puja samagri poore desh mein pahunchana.&quot;
          </p>
          <p className="text-gray-400 text-sm mt-3 font-devanagari leading-relaxed">
            &quot;बीकापुर और आसपास के किसानों को बेस्ट क्वालिटी पशु आहार प्रोवाइड करना
            और राम की नगरी की पूजा सामग्री पूरे देश में पहुंचाना।&quot;
          </p>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-sage/40 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-deepGreen">Brands We Carry</h2>
            <p className="text-gray-400 text-sm mt-1.5 font-devanagari">हमारे पशु आहार ब्रांड्स</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {brands.map((b) => (
              <a
                key={b.slug}
                href={`/${b.slug}`}
                className="group bg-white border border-deepGreen/10 rounded-2xl p-5 hover:shadow-md hover:border-deepGreen/30 transition-all"
              >
                <p className="font-bold text-deepGreen text-sm group-hover:text-ochre transition-colors">{b.name}</p>
                <p className="text-gray-400 text-xs font-devanagari mt-0.5">{b.nameHindi}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Puja Products */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-deepGreen">Puja Products</h2>
            <p className="text-gray-400 text-sm mt-1.5 font-devanagari">राम की नगरी से शुद्ध सामग्री</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pujaProducts.map((p) => (
              <div key={p.name} className="bg-cream border border-deepGreen/10 rounded-2xl p-5">
                <p className="font-bold text-deepGreen text-sm">{p.name}</p>
                <p className="text-gray-400 text-xs font-devanagari mt-0.5">{p.nameHindi}</p>
                <p className="text-gray-500 text-xs mt-2 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6 font-devanagari">
            पैन-इंडिया डिलीवरी उपलब्ध है
          </p>
        </div>
      </section>

      {/* Visit Us */}
      <section className="bg-deepGreen py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-2">Visit Our Store</h2>
          <p className="text-white/60 text-sm font-devanagari mb-8">हमारे स्टोर पर आएं</p>
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 inline-block text-left">
            <div className="space-y-3 text-white">
              <p><span className="text-white/60 text-sm">📍 Address:</span> <span className="font-semibold text-sm">Ramnagar, Bikapur, Ayodhya District, UP 224204</span></p>
              <p><span className="text-white/60 text-sm">🕐 Timing:</span> <span className="font-semibold text-sm">8:00 AM — 7:00 PM, Monday–Sunday</span></p>
              <p><span className="text-white/60 text-sm">📞 Phone:</span> <a href="tel:+917840882270" className="font-semibold text-sm hover:text-cream transition-colors">78408 82270</a></p>
              <p><span className="text-white/60 text-sm">💬 WhatsApp:</span> <a href="https://wa.me/919911662492" target="_blank" rel="noopener noreferrer" className="font-semibold text-sm hover:text-cream transition-colors">99116 62492</a></p>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="https://maps.google.com/?q=26.5151,82.1319"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-deepGreen font-bold px-6 py-3 rounded-xl hover:bg-cream transition-colors text-sm shadow-md"
            >
              Rasta Dekhein →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

