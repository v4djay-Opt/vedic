import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import BreadcrumbList from '@/components/BreadcrumbList';
import FaqSection, { type FaqItem } from '@/components/FaqSection';
import InquiryForm from '@/components/InquiryForm';
import ProductCard from '@/components/ProductCard';

/* ─── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Godrej Agrovet Dealer Bikapur — Call 7840882270 | Vedic Heritage',
  description:
    'Authorized Godrej Agrovet dealer in Bikapur, Ayodhya. Cattle feed at best price. Visit our store 8AM–7PM. Call 7840882270. गोदरेज एग्रोवेट बीकापुर।',
  alternates: { canonical: '/godrej-agrovet-bikapur' },
};

/* ─── JSON-LD Schemas ──────────────────────────────────────── */
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Godrej Agrovet Cattle Feed',
  description:
    'Godrej Agrovet cattle feed available at Vedic Heritage, Ramnagar, Bikapur, Ayodhya District. Visit our store 8AM–7PM.',
  brand: { '@type': 'Brand', name: 'Godrej Agrovet' },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    areaServed: { '@type': 'City', name: 'Bikapur', addressRegion: 'Uttar Pradesh' },
    seller: {
      '@type': 'LocalBusiness',
      name: 'Vedic Heritage',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bikapur',
        addressRegion: 'Uttar Pradesh',
        postalCode: '224001',
      },
    },
  },
};

const faqs: FaqItem[] = [
  {
    q: 'Bikapur mein Godrej Agrovet dealer kaun hai?',
    qHindi: 'बीकापुर में गोदरेज एग्रोवेट डीलर कौन है?',
    a: 'Vedic Heritage in Ramnagar, Bikapur is an authorized dealer of Godrej Agrovet cattle feed. Visit our store between 8AM–7PM or call 7840882270 to check availability.',
  },
  {
    q: 'Godrej Agrovet feed ki price kya hai Bikapur mein?',
    qHindi: 'गोदरेज एग्रोवेट फीड की कीमत क्या है?',
    a: 'We stock Godrej Agrovet cattle feed at competitive market rates in Bikapur. For current pricing on 10kg, 25kg, and 50kg packs, call 7840882270 or WhatsApp 9911662492. Bulk discounts available.',
  },
  {
    q: 'Godrej Agrovet feed kyon best hai?',
    qHindi: 'गोदरेज एग्रोवेट फीड क्यों बेस्ट है?',
    a: 'Godrej Agrovet is a trusted national brand with decades of research-backed formulations. Their cattle feed is manufactured in ISO-certified facilities with strict quality control, delivering consistent nutrition that improves milk yield, animal health, and fertility.',
  },
  {
    q: 'Godrej Agrovet kis pack mein available hai?',
    qHindi: 'गोदरेज एग्रोवेट किस पैक में उपलब्ध है?',
    a: 'We stock Godrej Agrovet cattle feed in 10kg, 25kg, and 50kg packs at our Bikapur store. Whether you are a small farmer or run a large dairy operation, we have the right quantity and pack size for your needs.',
  },
  {
    q: 'Wholesale mein Godrej Agrovet ka rate kya hai?',
    qHindi: 'थोक में गोदरेज एग्रोवेट का रेट क्या है?',
    a: 'Special wholesale rates are available for bulk orders above 100kg. Dairy farms, cooperatives, and gaushala operators in Bikapur, Ayodhya, Faizabad, and nearby areas can contact us on WhatsApp 9911662492 for negotiated pricing.',
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vedicheritage.in' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://vedicheritage.in/products' },
    { '@type': 'ListItem', position: 3, name: 'Godrej Agrovet Bikapur', item: 'https://vedicheritage.in/godrej-agrovet-bikapur' },
  ],
};

/* ─── Static data ──────────────────────────────────────────── */
const benefits = [
  { icon: '🥛', title: 'Proven Results', desc: 'Scientifically formulated for better milk yield' },
  { icon: '💪', title: 'Strong Immunity', desc: 'Rich in vitamins A, D3, and E' },
  { icon: '🌿', title: 'Quality Assured', desc: 'Manufactured in ISO-certified facilities' },
  { icon: '⚡', title: 'High Energy', desc: 'Balanced energy for active dairy animals' },
  { icon: '🏥', title: 'Trusted Brand', desc: 'Decades of trust across Indian dairy farms' },
  { icon: '💰', title: 'Competitive Price', desc: 'Best rates for Godrej in Bikapur market' },
];

const packs = [
  { name: 'Starter Pack', weight: '10 kg', bestFor: 'Small farmers (1–2 cattle)', wa: 'Starter 10kg' },
  { name: 'Standard Pack', weight: '25 kg', bestFor: 'Medium farms (3–5 cattle)', wa: 'Standard 25kg' },
  { name: 'Bulk Pack', weight: '50 kg', bestFor: 'Large farms & gaushalas', wa: 'Bulk 50kg' },
];

const serviceAreas = [
  'Bikapur', 'Ramnagar', 'Bharatkund', 'Milkipur', 'Sohawal',
  'Goshainganj', 'Ayodhya', 'Faizabad',
];

const relatedProducts = [
  { title: 'Bansuri Pashu Aahar', titleHindi: 'बांसुरी पशु आहार', badge: 'Best Seller', slug: 'bansuri-pashu-aahar-bikapur', inquiryBased: true as const },
  { title: 'Brajwasi Feeds', titleHindi: 'ब्रजवासी फीड्स', badge: 'Popular', slug: 'brajwasi-feeds-bikapur', inquiryBased: true as const },
  { title: 'Mineral Mixture', titleHindi: 'मिनरल मिक्सचर', badge: 'Essential', slug: 'mineral-mixture-bikapur', inquiryBased: true as const },
];

const WA_ORDER = `https://wa.me/919911662492?text=${encodeURIComponent('नमस्ते! मुझे Godrej Agrovet Cattle Feed चाहिए। कृपया price बताएं।')}`;

/* ─── WA icon shared ───────────────────────────────────────── */
function WaIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─── Page ─────────────────────────────────────────────────── */
export default function GodrejAgrovetPage() {
  return (
    <>
      <JsonLd schema={productSchema as Record<string, unknown>} />
      <JsonLd schema={faqSchema as Record<string, unknown>} />
      <JsonLd schema={breadcrumbSchema as Record<string, unknown>} />

      {/* ── 2. Hero Banner ── */}
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
            ✓ TRUSTED BRAND DEALER — BIKAPUR
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
            Godrej Agrovet Cattle Feed Bikapur — Call 7840882270
          </h1>
          <p className="text-white/60 text-sm mt-2 font-devanagari leading-relaxed">
            गोदरेज एग्रोवेट पशु आहार बीकापुर — कॉल ७८४०८८२२७०
          </p>
          <p className="text-white/80 text-base mt-5 leading-relaxed max-w-2xl mx-auto">
            Buy genuine Godrej Agrovet cattle feed at Vedic Heritage, Ramnagar, Bikapur.
            Trusted national brand with scientifically proven results. Visit our store 8AM–7PM
            or inquire on WhatsApp for stock and pricing.
          </p>
          <p className="text-white/50 text-sm mt-2 font-devanagari leading-relaxed max-w-2xl mx-auto">
            वैदिक हेरिटेज बीकापुर में मूल गोदरेज एग्रोवेट पशु आहार उपलब्ध है। सुबह ८ बजे से शाम ७ बजे तक
            हमारे स्टोर पर आएं।
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
                    Benefits of Godrej Agrovet Cattle Feed
                  </h2>
                  <p className="text-gray-400 text-sm mt-1.5 font-devanagari">गोदरेज एग्रोवेट के फायदे</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {benefits.map((b) => (
                    <div
                      key={b.title}
                      className="bg-white border border-deepGreen/10 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md hover:border-deepGreen/30 transition-all duration-200"
                    >
                      <span className="text-3xl">{b.icon}</span>
                      <div>
                        <p className="font-bold text-deepGreen text-sm">{b.title}</p>
                        <p className="text-gray-500 text-xs mt-1 leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 4. Product Cards ── */}
            <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 py-10 md:py-14">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <ProductCard
                  title="Godrej Agrovet"
                  titleHindi="गोदरेज एग्रोवेट"
                  badge="Trusted Brand"
                  slug="godrej-agrovet-bikapur"
                  inquiryBased={true}
                />
                <ProductCard
                  title="Mineral Mixture"
                  titleHindi="मिनरल मिक्सचर"
                  badge="Essential"
                  slug="mineral-mixture-bikapur"
                  inquiryBased={true}
                />
              </div>
            </section>

            {/* ── 5. Content ── */}
            <section className="bg-cream border border-gray-200 rounded-2xl p-6 md:p-8 pt-14 md:pt-20 pb-10 md:pb-14 space-y-10 md:space-y-14">

              {/* About */}
              <div className="border border-gray-100 rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-black text-deepGreen mb-2">
                  About Godrej Agrovet Cattle Feed — Trusted Brand in Bikapur
                </h2>
                <p className="text-gray-400 text-sm font-devanagari mb-6">
                  गोदरेज एग्रोवेट पशु आहार के बारे में — बीकापुर में भरोसेमंद ब्रांड
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Godrej Agrovet is one of India&apos;s most respected and trusted names in animal nutrition,
                  with decades of research and development behind every product. Their cattle feed range
                  is scientifically formulated to meet the complete nutritional requirements of dairy cows
                  and buffaloes at every stage of life — from calves and heifers to high-yielding
                  lactating animals. At Vedic Heritage in Ramnagar, Bikapur, we are proud to bring this
                  trusted national brand to the dairy farmers of Ayodhya District. Our store stocks
                  genuine Godrej Agrovet cattle feed in multiple pack sizes, ensuring farmers of every
                  scale have access to quality nutrition. Visit us between 8AM and 7PM daily to purchase
                  or inquire about availability and current pricing.
                </p>
                <p className="text-gray-500 text-sm font-devanagari leading-relaxed mt-4">
                  गोदरेज एग्रोवेट भारत में पशु पोषण के क्षेत्र में सबसे सम्मानित और विश्वसनीय नामों में से
                  एक है। उनका पशु आहार डेयरी गायों और भैंसों की पूर्ण पोषण आवश्यकताओं को पूरा करने के लिए
                  वैज्ञानिक रूप से तैयार किया गया है। वैदिक हेरिटेज रामनगर, बीकापुर में हम इस ब्रांड को
                  अयोध्या जिले के किसानों तक लाते हैं।
                </p>
              </div>

              {/* Nutrition Science */}
              <div className="bg-cream/40 border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-black text-deepGreen mb-4">
                  Advanced Nutrition Science Behind Godrej Agrovet Feed
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Godrej Agrovet cattle feed is manufactured in state-of-the-art ISO-certified facilities
                  under strict quality control protocols. Each formulation contains precisely calibrated
                  levels of crude protein (18–20%), crude fat, crude fibre, and total digestible nutrients.
                  The feed incorporates bypass protein technology that protects amino acids from rumen
                  degradation, ensuring direct absorption in the small intestine for maximum milk protein
                  synthesis. Added yeast cultures improve rumen microbial activity and fibre digestion,
                  while chelated minerals (zinc, copper, manganese, selenium) and fat-soluble vitamins
                  (A, D3, E) boost immunity, reproductive efficiency, and hoof health in dairy animals.
                </p>
              </div>

              {/* Milk Yield */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-black text-deepGreen mb-4">
                  Proven Milk Yield Improvement in Ayodhya Region
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dairy farmers across Ayodhya, Faizabad, Bikapur, and surrounding areas who have
                  switched to Godrej Agrovet report consistent improvements in milk yield, fat content,
                  and overall animal health. The feed&apos;s optimal energy-to-protein ratio reduces negative
                  energy balance in early lactation, helping animals maintain body condition while
                  maximizing production. Local dairy collection centres in the region note that cattle
                  fed with Godrej Agrovet produce milk with higher SNF percentages, translating to
                  better payment rates for farmers. The inclusion of bypass fat further supports milk fat
                  synthesis without increasing body heat production, making it ideal for the Eastern UP
                  climate.
                </p>
                <p className="text-gray-500 text-sm font-devanagari leading-relaxed mt-4">
                  अयोध्या, फैजाबाद, बीकापुर और आसपास के क्षेत्रों के किसान जिन्होंने गोदरेज एग्रोवेट का उपयोग
                  शुरू किया है, उन्होंने दूध उत्पादन, वसा सामग्री और समग्र पशु स्वास्थ्य में लगातार सुधार
                  देखा है। इस फीड का इष्टतम ऊर्जा-टू-प्रोटीन अनुपात दूध उत्पादन को अधिकतम करता है।
                </p>
              </div>

              {/* Why Buy */}
              <div className="bg-cream/40 border border-gray-100 rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-black text-deepGreen mb-4">
                  Why Buy from Vedic Heritage, Bikapur?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Vedic Heritage in Ramnagar, Bikapur is your reliable local source for genuine Godrej
                  Agrovet cattle feed. We purchase directly from authorized Godrej distribution channels,
                  guaranteeing 100% authentic product with full batch traceability. Unlike unverified
                  local sellers who may mix or adulterate feed, every bag at our store carries the
                  original Godrej packaging and manufacturing date. We maintain competitive pricing that
                  reflects the Bikapur market while offering volume discounts for bulk buyers. Our
                  knowledgeable staff can guide you on feeding schedules, recommended quantities based
                  on body weight and lactation stage, and complementary products like mineral mixture
                  and khal. Visit us anytime between 8AM and 7PM, or call 7840882270 before your visit
                  to confirm stock.
                </p>
                <p className="text-gray-500 text-sm font-devanagari leading-relaxed mt-4">
                  वैदिक हेरिटेज रामनगर, बीकापुर में गोदरेज एग्रोवेट पशु आहार के लिए आपका विश्वसनीय स्थानीय
                  स्रोत है। हम प्रत्यक्ष रूप से अधिकृत गोदरेज वितरण चैनलों से खरीदते हैं, जो १००% प्रामाणिक
                  उत्पाद की गारंटी देता है। हमारा कर्मचारी आपको फीडिंग शेड्यूल और सही मात्रा की सलाह दे सकता
                  है। सुबह ८ बजे से शाम ७ बजे तक आएं।
                </p>
              </div>

              {/* Service Areas */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-black text-deepGreen mb-4">
                  Service Coverage — Bikapur, Ramnagar, and Nearby Villages
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our Vedic Heritage store in Ramnagar, Bikapur serves walk-in customers from across
                  Bikapur, Ramnagar, Bharatkund, Milkipur, Sohawal, Goshainganj, Ayodhya, Faizabad,
                  and neighbouring villages. We are open daily from 8AM to 7PM. For large volume
                  requirements by dairy cooperatives, gaushalas, and commercial farms, please call
                  7840882270 or WhatsApp 9911662492 to pre-book stock and discuss volume pricing.
                  We do not offer home delivery — all purchases must be collected from our store, allowing
                  you to inspect product quality, manufacturing date, and packaging integrity before buying.
                </p>
              </div>

            </section>

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Contact Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="text-xs font-bold text-deepGreen/70 uppercase tracking-widest mb-1">Trusted Brand Dealer</p>
                <h3 className="font-black text-deepGreen text-xl mb-1">Godrej Agrovet</h3>
                <p className="text-gray-400 text-sm font-devanagari mb-5">गोदरेज एग्रोवेट — बीकापुर</p>

                <div className="space-y-3">
                  <a
                    href={WA_ORDER}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-deepGreen hover:bg-deepGreen/90 text-white font-semibold px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm w-full"
                  >
                    <WaIcon />
                    WhatsApp pe Inquiry Karein
                  </a>
                  <a
                    href="tel:+917840882270"
                    className="flex items-center justify-center gap-2 border-2 border-deepGreen text-deepGreen hover:bg-deepGreen hover:text-white font-semibold px-5 py-3 rounded-xl transition-all text-sm w-full"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                    </svg>
                    Call 7840882270
                  </a>
                </div>

                <div className="pt-5 mt-5 border-t border-gray-100 space-y-2.5">
                  {[
                    { label: 'Genuine Product', icon: '✓' },
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
                  Inquire About Godrej Agrovet
                </h3>
                <p className="text-white/55 text-xs mb-5 font-devanagari">
                  गोदरेज एग्रोवेट के बारे में पूछताछ करें
                </p>
                <InquiryForm defaultProduct="Godrej Agrovet Cattle Feed" />
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ── 6. Service Areas ── */}
      <section className="bg-deepGreen py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
            We Serve These Areas from Our Bikapur Store
          </h2>
          <p className="text-white/60 text-sm font-devanagari mb-8">
            हम इन क्षेत्रों को अपने बीकापुर स्टोर से सेवा देते हैं
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/15 transition-colors"
              >
                📍 {area}
              </span>
            ))}
          </div>
          <p className="text-white/50 text-sm mt-8">
            Store Timings: 8AM – 7PM &nbsp;|&nbsp; Visit us at Ramnagar, Bikapur
          </p>
          <a
            href="tel:+917840882270"
            className="inline-flex items-center gap-2 mt-8 bg-white text-deepGreen font-bold px-6 py-3 rounded-xl hover:bg-cream transition-colors text-sm shadow-md"
          >
            Call 7840882270 to Confirm Stock
          </a>
        </div>
      </section>

      {/* ── 6. FAQ ── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqSection
            faqs={faqs}
            heading="Frequently Asked Questions — Godrej Agrovet Bikapur"
            headingHindi="अक्सर पूछे जाने वाले सवाल"
          />
        </div>
      </section>

      {/* ── 7. Related Products ── */}
      <section className="bg-cream py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-deepGreen">
              You May Also Like
            </h2>
            <Link
              href="/products"
              className="text-deepGreen hover:text-ochre font-semibold text-sm transition-colors flex items-center gap-1"
            >
              All Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
