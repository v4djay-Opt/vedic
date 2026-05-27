import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import BreadcrumbList from '@/components/BreadcrumbList';
import FaqSection, { type FaqItem } from '@/components/FaqSection';
import InquiryForm from '@/components/InquiryForm';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Hawan Samidha Ayodhya — Call 7840882270 | Vedic Heritage',
  description:
    'Pure hawan samidha (wood sticks) from Ram ki Nagri, Ayodhya. Pan-India delivery for temples & households. हवन समिधा अयोध्या। Call 7840882270.',
  alternates: { canonical: '/hawan-wood-sticks-ayodhya' },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Hawan Wood Sticks (Samidha) — Ayodhya',
  description: 'Pure hawan samidha (sacred wood sticks) in Ayodhya. Multiple wood types including mango, peepal, palash, and chandan. Bulk temple supply available.',
  brand: { '@type': 'Brand', name: 'Vedic Heritage' },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    areaServed: { '@type': 'City', name: 'Ayodhya', addressRegion: 'Uttar Pradesh' },
    seller: { '@type': 'LocalBusiness', name: 'Vedic Heritage', address: { '@type': 'PostalAddress', addressLocality: 'Ayodhya', addressRegion: 'Uttar Pradesh', postalCode: '224001' } },
  },
};

const faqs: FaqItem[] = [
  {
    q: 'Hawan ke liye kaun si lakdi sabse acchi hoti hai?',
    qHindi: 'हवन के लिए कौन सी लकड़ी सबसे अच्छी होती है?',
    a: 'For general havan, mango wood (aam ki lakdi) is the most commonly recommended by Vedic texts — it burns steadily and produces purifying smoke. For Vishnu puja and Ram Navami, peepal (Ficus religiosa) samidha is preferred. For health-focused havans and Dhanvantari puja, palash wood is used. For Shiva puja and premium ceremonies, chandan (sandalwood) is considered the most sacred.',
  },
  {
    q: 'Ayodhya mein hawan samidha kahan milti hai?',
    qHindi: 'अयोध्या में हवन समिधा कहाँ मिलती है?',
    a: 'Vedic Heritage is a dedicated supplier of pure hawan wood sticks in Ayodhya. We stock mango, peepal, palash, and chandan samidha in standard cut sizes suitable for home havan kunds and large temple yagyas. Order via WhatsApp for same-day delivery within Ayodhya city.',
  },
  {
    q: 'Mandir aur yagya ke liye bulk samidha milti hai?',
    qHindi: 'मंदिर और यज्ञ के लिए बल्क समिधा मिलती है?',
    a: 'Yes, we supply bulk hawan wood for temples, ashrams, and large yagya events across Ayodhya and Faizabad district. For orders above 5kg, we provide custom cutting (standard 6-inch lengths), bundle packaging, and guaranteed delivery before your event. Contact us 3–5 days in advance for large orders.',
  },
  {
    q: 'Samidha ki price kya hai Ayodhya mein?',
    qHindi: 'समिधा की कीमत क्या है अयोध्या में?',
    a: 'Pricing varies by wood type. Mango and peepal samidha are the most affordable (from ₹100 per 500g bundle). Palash is moderately priced, while chandan samidha is premium-priced due to scarcity. WhatsApp us for current rate list and bulk quotations.',
  },
  {
    q: 'Kya regular wood se havan nahi ho sakta?',
    qHindi: 'क्या रेगुलर लकड़ी से हवन नहीं हो सकता?',
    a: 'While any dry wood can technically burn, Vedic scriptures specify particular sacred woods for havan for good reason — each wood has unique phytochemical properties that are released when burned, contributing to purification, healing, and spiritual effects. Using random or treated timber may even be counterproductive due to chemical residues. Authentic samidha ensures both spiritual and physical benefits.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vedicheritage.in' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://vedicheritage.in/products' },
    { '@type': 'ListItem', position: 3, name: 'Hawan Wood Sticks Ayodhya', item: 'https://vedicheritage.in/hawan-wood-sticks-ayodhya' },
  ],
};

const benefits = [
  { icon: '🪵', title: 'Multiple Wood Types', desc: 'Mango, peepal, palash, and chandan samidha available' },
  { icon: '✨', title: 'Ritually Pure', desc: 'No treated, painted, or chemically processed wood' },
  { icon: '🏛️', title: 'Temple Grade', desc: 'Preferred by temples and ashrams across Ayodhya' },
  { icon: '📦', title: 'Bulk Supply', desc: 'Large orders for yagyas and multi-day events' },
  { icon: '🌸', title: 'Fragrant Smoke', desc: 'Authentic aroma enhances spiritual atmosphere' },
  { icon: '✂️', title: 'Standard Cut', desc: 'Pre-cut to 6-inch lengths ideal for havan kund' },
];

const packs = [
  { name: 'Home Bundle', weight: '500 g', bestFor: 'Home havan, one-time puja', wa: 'Hawan Samidha 500g bundle' },
  { name: 'Standard Bundle', weight: '1 kg', bestFor: 'Regular rituals and weekly havan', wa: 'Hawan Samidha 1kg bundle' },
  { name: 'Temple / Bulk Pack', weight: '5 kg+', bestFor: 'Temples, yagyas, large events', wa: 'Hawan Samidha bulk 5kg+' },
];

const serviceAreas = ['Ayodhya', 'Faizabad', 'Bikapur', 'Sohawal', 'Milkipur', 'Rudauli', 'Maya Bazar', 'Tanda', 'Akbarpur', 'Sohratgarh', 'Nawabganj', 'Tarabganj', 'Goshainganj', 'Kumarganj', 'Masaudha'];

const relatedProducts = [
  { title: 'Havan Samagri', titleHindi: 'हवन सामग्री', badge: 'Pure', slug: 'havan-samagri-ayodhya', price: 250, unit: 'kg' },
  { title: 'Cow Dung Cake', titleHindi: 'गोबर उपला', badge: 'Natural', slug: 'cow-dung-cake-ayodhya', price: 80, unit: 'pack' },
  { title: 'Bulk Order', titleHindi: 'थोक ऑर्डर', badge: 'Best Value', slug: 'bulk-inquiry', inquiryBased: true as const },
];

const WA_ORDER = `https://wa.me/919911662492?text=${encodeURIComponent('नमस्ते! मुझे हवन समिधा (Hawan Wood Sticks) चाहिए। कृपया price और availability बताएं।')}`;

function WaIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function HawanWoodSticksPage() {
  return (
    <>
      <JsonLd schema={productSchema as Record<string, unknown>} />
      <JsonLd schema={faqSchema as Record<string, unknown>} />
      <JsonLd schema={breadcrumbSchema as Record<string, unknown>} />

      {/* Hero Banner */}
      <section className="relative bg-deepGreen -mt-24 pt-24 flex items-center h-[55vh] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute -top-20 -right-20 w-80 h-80 text-white/5" viewBox="0 0 200 200" fill="currentColor">
            <circle cx="100" cy="100" r="100" />
          </svg>
          <svg className="absolute top-1/3 -left-12 w-48 h-48 text-white/5" viewBox="0 0 200 200" fill="currentColor">
            <ellipse cx="100" cy="100" rx="100" ry="70" />
          </svg>
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 border border-white/20 text-white/90 text-[11px] font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full mb-5">
            🪵 RAM KI NAGRI SE SHUDDH SAMAGRI
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
            Hawan Samidha Ayodhya
            <br /><span className="text-ochre">— Call 7840882270</span>
          </h1>
          <p className="text-white/60 text-sm mt-2 font-devanagari leading-relaxed">
            हवन समिधा अयोध्या — शुद्ध हवन लकड़ी
          </p>
          <p className="text-white/80 text-base mt-5 leading-relaxed max-w-2xl mx-auto">
            Pure, ritually authentic hawan samidha from Ram ki Nagri, Ayodhya — mango, peepal,
            palash, and chandan wood sticks for home and temple havan. Pan-India delivery
            available for temples, households, and spiritual events. Call 7840882270.
          </p>
          <p className="text-white/50 text-sm mt-2 font-devanagari leading-relaxed max-w-2xl mx-auto">
            राम की नगरी अयोध्या से शुद्ध, प्रामाणिक हवन समिधा — आम, पीपल, पलाश और चंदन की लकड़ी।
            मंदिरों, घरों और आध्यात्मिक कार्यक्रमों के लिए पैन-इंडिया डिलीवरी उपलब्ध है।
          </p>
        </div>
      </section>

      {/* ── Content + Sidebar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 md:space-y-10">

            {/* ── 3. Benefits Grid ── */}
            <section className="bg-sage/40 border border-deepGreen/20 rounded-2xl p-6 md:p-8 py-10 md:py-14">
              <div>
                <div className="mb-10 text-left">
                  <h2 className="text-3xl sm:text-4xl font-black text-deepGreen">
                    Why Choose Our Hawan Samidha?
                  </h2>
                  <p className="text-gray-400 text-sm mt-1.5 font-devanagari">हमारी हवन समिधा क्यों चुनें?</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {benefits.map((b) => (
                    <div key={b.title} className="bg-white border border-deepGreen/10 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md hover:border-deepGreen/30 transition-all duration-200">
                      <span className="text-3xl">{b.icon}</span>
                      <div><p className="font-bold text-deepGreen text-sm">{b.title}</p><p className="text-gray-500 text-xs mt-1 leading-relaxed">{b.desc}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 4. Product Cards ── */}
            <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 py-10 md:py-14">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <ProductCard
                  title="Hawan Samidha"
                  titleHindi="हवन समिधा"
                  badge="Ram Ki Nagri"
                  slug="hawan-wood-sticks-ayodhya"
                  inquiryBased={true}
                />
                <ProductCard
                  title="Havan Samagri"
                  titleHindi="हवन सामग्री"
                  badge="Pure"
                  slug="havan-samagri-ayodhya"
                  price={250}
                  unit="kg"
                />
              </div>
            </section>

            {/* ── 5. Content ── */}
            <section className="bg-cream border border-gray-200 rounded-2xl p-6 md:p-8 pt-14 md:pt-20 pb-10 md:pb-14 space-y-10 md:space-y-14">

              {/* About */}
              <div className="border border-gray-100 rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-black text-deepGreen mb-2">
                  Hawan Samidha in Ayodhya — Sacred Wood Sticks for Vedic Fire Rituals
                </h2>
                <p className="text-gray-400 text-sm font-devanagari mb-6">
                  अयोध्या में हवन समिधा — वैदिक अग्नि अनुष्ठानों के लिए पवित्र लकड़ी
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Samidha — the sacred wood offerings used in havan — are not merely fuel. In Vedic
                  tradition, specific wood types carry distinct energetic and medicinal properties that
                  are amplified when burned in a consecrated fire. Vedic Heritage is Ayodhya&apos;s
                  trusted source for authentic hawan wood sticks, sourced from naturally grown,
                  chemical-free trees and cut to the standard ritual size of 6 inches. We stock four
                  primary samidha varieties suited to the most common havan types performed in Ayodhya
                  homes and temples.
                </p>
                <p className="text-gray-500 text-sm font-devanagari leading-relaxed mt-4">
                  समिधा — हवन में उपयोग की जाने वाली पवित्र लकड़ी — केवल ईंधन नहीं है। वैदिक
                  परंपरा में, विशिष्ट लकड़ी के प्रकार विशिष्ट ऊर्जावान और औषधीय गुण रखते हैं।
                  वैदिक हेरिटेज अयोध्या में प्रामाणिक हवन समिधा का विश्वसनीय स्रोत है।
                </p>
              </div>

              {/* Wood Types */}
              <div className="bg-cream/40 border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-black text-deepGreen mb-4">
                  Types of Hawan Wood — Mango, Peepal, Palash, Chandan
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Aam (Mango) Samidha:</strong> The most widely used havan wood across all
                  Vedic traditions. Mango wood produces a steady, fragrant flame and is specifically
                  prescribed for Surya puja, general Navgraha havan, and daily agnihotra. Its sweet
                  smoke carries natural antiseptic compounds.
                  <br /><br />
                  <strong>Peepal (Sacred Fig) Samidha:</strong> Prescribed for Vishnu puja, Satyanarayan
                  katha havan, and Ram Navami ceremonies — especially significant in Ayodhya. Peepal
                  wood is believed to carry blessings for longevity and family prosperity.
                  <br /><br />
                  <strong>Palash (Flame of the Forest) Samidha:</strong> Used in health-focused havans,
                  Dhanvantari puja, Ayurvedic fire ceremonies, and educational rituals. Palash wood is
                  associated with Brahma and intellectual growth.
                  <br /><br />
                  <strong>Chandan (Sandalwood) Samidha:</strong> The most premium and sacred samidha,
                  used for Shiva puja, special Navratri yagyas, and occasions requiring the finest
                  spiritual offering. The fragrance of chandan smoke is immediately uplifting.
                </p>
                <p className="text-gray-500 text-sm font-devanagari leading-relaxed mt-4">
                  आम समिधा: सामान्य हवन के लिए सबसे व्यापक रूप से उपयोग की जाने वाली। सूर्य पूजा,
                  नवग्रह हवन के लिए प्रयोग होती है। पीपल समिधा: विष्णु पूजा, राम नवमी के लिए।
                  पलाश समिधा: स्वास्थ्य हवन, धन्वंतरि पूजा के लिए। चंदन समिधा: शिव पूजा और
                  विशेष यज्ञों के लिए सबसे पवित्र।
                </p>
              </div>

              {/* Bulk Supply */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-black text-deepGreen mb-4">
                  Bulk Hawan Samidha Supply for Temples and Yagyas
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Vedic Heritage supplies hawan wood sticks in bulk for temples, ashrams, and yagya
                  organizers across Ayodhya, Faizabad, and surrounding areas. Our wood is sourced from
                  sustainably managed groves and is completely free of paint, varnish, or chemical
                  treatment. Each bundle is dried for a minimum of 30 days to ensure a clean, efficient
                  burn. For standing orders (temples with daily havan requirements), we offer weekly
                  or monthly delivery plans with priority pricing.
                </p>
                <p className="text-gray-500 text-sm font-devanagari leading-relaxed mt-4">
                  वैदिक हेरिटेज अयोध्या, फैजाबाद और आसपास के क्षेत्रों में मंदिरों, आश्रमों और
                  यज्ञ आयोजकों के लिए थोक हवन समिधा की आपूर्ति करता है। हमारी लकड़ी पूरी तरह से
                  पेंट, वार्निश या रासायनिक उपचार से मुक्त है।
                </p>
              </div>

            </section>

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Contact Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="text-xs font-bold text-deepGreen/70 uppercase tracking-widest mb-1">Ram Ki Nagri</p>
                <h3 className="font-black text-deepGreen text-xl mb-1">Hawan Samidha</h3>
                <p className="text-gray-400 text-sm font-devanagari mb-5">हवन समिधा — अयोध्या</p>

                <div className="space-y-3">
                  <a
                    href={WA_ORDER}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-deepGreen hover:bg-deepGreen/90 text-white font-semibold px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm w-full"
                  >
                    <WaIcon />
                    WhatsApp pe Order Karein
                  </a>
                  <a
                    href="tel:+917840882270"
                    className="flex items-center justify-center gap-2 border-2 border-deepGreen text-deepGreen hover:bg-deepGreen hover:text-white font-semibold px-5 py-3 rounded-xl transition-all text-sm w-full"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                    </svg>
                    Call Now
                  </a>
                </div>

                <div className="pt-5 mt-5 border-t border-gray-100 space-y-2.5">
                  {[
                    { label: 'Multiple Wood Types', icon: '✓' },
                    { label: 'Ram Ki Nagri', icon: '✓' },
                    { label: 'Pan-India Delivery', icon: '✓' },
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
                      <p className="text-gray-500">Ayodhya, Uttar Pradesh</p>
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
                      <p className="text-gray-500">Pan-India Available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="bg-deepGreen border border-deepGreen/30 rounded-2xl p-6 shadow-md">
                <div className="inline-flex items-center bg-white/10 border border-white/20 text-white/80 text-[10px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-full mb-3">
                  PLACE YOUR ORDER
                </div>
                <h3 className="text-lg font-black text-white mb-1">
                  Order Hawan Samidha in Ayodhya
                </h3>
                <p className="text-white/55 text-xs mb-5 font-devanagari">
                  हवन समिधा ऑर्डर करें
                </p>
                <InquiryForm defaultProduct="Hawan Wood Sticks" />
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Service Areas */}
      <section className="bg-deepGreen py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">Pan-India Delivery — Ram ki Nagri se Aapke Ghar Tak</h2>
          <p className="text-white/60 text-sm font-devanagari mb-8">पूरे भारत में डिलीवरी — राम की नगरी से आपके घर तक</p>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
            {serviceAreas.map((area) => (
              <span key={area} className="bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/15 transition-colors">📍 {area}</span>
            ))}
          </div>
          <p className="text-white/50 text-sm mt-8">Pan-India Delivery Available &nbsp;|&nbsp; Cash on Delivery Options</p>
          <a href={WA_ORDER} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-8 bg-white text-deepGreen font-bold px-6 py-3 rounded-xl hover:bg-cream transition-colors text-sm shadow-md">Order on WhatsApp</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqSection faqs={faqs} heading="Hawan Samidha FAQs — Ayodhya" headingHindi="अक्सर पूछे जाने वाले सवाल" />
        </div>
      </section>

      {/* Related */}
      <section className="bg-cream py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-deepGreen">You May Also Like</h2>
            <Link href="/products" className="text-deepGreen hover:text-ochre font-semibold text-sm transition-colors flex items-center gap-1">
              All Products<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {relatedProducts.map((p) => <ProductCard key={p.slug} {...p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
