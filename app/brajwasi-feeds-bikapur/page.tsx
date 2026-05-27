import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import BreadcrumbList from '@/components/BreadcrumbList';
import FaqSection, { type FaqItem } from '@/components/FaqSection';
import InquiryForm from '@/components/InquiryForm';
import ProductCard from '@/components/ProductCard';

/* ─── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Brajwasi Feeds Bikapur — Call 7840882270 | Vedic Heritage',
  description:
    'Buy Brajwasi Feeds in Bikapur, Ayodhya. Quality cattle feed at best price. Visit our store 8AM–7PM. Call 7840882270. ब्रजवासी फीड्स बीकापुर।',
  alternates: { canonical: '/brajwasi-feeds-bikapur' },
};

/* ─── JSON-LD Schemas ──────────────────────────────────────── */
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Brajwasi Feeds',
  description:
    'Brajwasi Feeds cattle feed available at Vedic Heritage, Ramnagar, Bikapur, Ayodhya District. Visit our store 8AM–7PM.',
  brand: { '@type': 'Brand', name: 'Brajwasi' },
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
    q: 'Bikapur mein Brajwasi Feeds kahan milta hai?',
    qHindi: 'बीकापुर में ब्रजवासी फीड्स कहाँ मिलता है?',
    a: 'Vedic Heritage store in Ramnagar, Bikapur stocks genuine Brajwasi Feeds cattle feed. Visit our store between 8AM–7PM or call 7840882270 to check availability before coming.',
  },
  {
    q: 'Brajwasi Feeds ki price kya hai?',
    qHindi: 'ब्रजवासी फीड्स की कीमत क्या है?',
    a: 'We offer competitive market pricing for Brajwasi Feeds in Bikapur. Price depends on pack size and quantity. For the latest rates and bulk discounts, call 7840882270 or WhatsApp 9911662492.',
  },
  {
    q: 'Brajwasi Feeds kis size mein available hai?',
    qHindi: 'ब्रजवासी फीड्स किस साइज में उपलब्ध है?',
    a: 'Brajwasi Feeds is available in 10kg, 25kg, and 50kg packs at our Bikapur store. Small farmers can start with 10kg, while larger dairy operations prefer the 50kg pack for better economy.',
  },
  {
    q: 'Brajwasi Feeds se doodh badhta hai kya?',
    qHindi: 'ब्रजवासी फीड्स से दूध बढ़ता है क्या?',
    a: 'Yes, dairy farmers in Bikapur, Ayodhya, and nearby areas report a 12–20% improvement in milk yield after regular use of Brajwasi Feeds. The balanced nutrition formula supports lactation and overall animal health.',
  },
  {
    q: 'Wholesale mein Brajwasi Feeds ka rate kya hai?',
    qHindi: 'थोक में ब्रजवासी फीड्स का रेट क्या है?',
    a: 'Wholesale and bulk pricing is available for orders above 100kg. Dairy farms, cooperatives, and gaushala operators in Bikapur, Ramnagar, Milkipur, and surrounding areas can contact us on WhatsApp 9911662492 for special rates.',
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
    { '@type': 'ListItem', position: 3, name: 'Brajwasi Feeds Bikapur', item: 'https://vedicheritage.in/brajwasi-feeds-bikapur' },
  ],
};

/* ─── Static data ──────────────────────────────────────────── */
const benefits = [
  { icon: '🥛', title: 'Better Milk Yield', desc: '12–20% improvement in milk production' },
  { icon: '💪', title: 'Strong Cattle', desc: 'Complete nutrition for healthy growth' },
  { icon: '🌿', title: 'Balanced Formula', desc: 'Optimal mix of protein, fibre, and minerals' },
  { icon: '⚡', title: 'High Energy', desc: 'Keeps animals active and productive' },
  { icon: '🏥', title: 'Vet Approved', desc: 'Recommended by local veterinarians' },
  { icon: '💰', title: 'Affordable', desc: 'Best price in the Bikapur market' },
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
  { title: 'Godrej Agrovet', titleHindi: 'गोदरेज एग्रोवेट', badge: 'Trusted', slug: 'godrej-agrovet-bikapur', inquiryBased: true as const },
  { title: 'Mineral Mixture', titleHindi: 'मिनरल मिक्सचर', badge: 'Essential', slug: 'mineral-mixture-bikapur', inquiryBased: true as const },
];

const WA_ORDER = `https://wa.me/919911662492?text=${encodeURIComponent('नमस्ते! मुझे Brajwasi Feeds चाहिए। कृपया price बताएं।')}`;

/* ─── WA icon shared ───────────────────────────────────────── */
function WaIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─── Page ─────────────────────────────────────────────────── */
export default function BrajwasiFeedsPage() {
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
            ✓ AVAILABLE IN BIKAPUR
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
            Brajwasi Feeds Bikapur — Call 7840882270
          </h1>
          <p className="text-white/60 text-sm mt-2 font-devanagari leading-relaxed">
            ब्रजवासी फीड्स बीकापुर — कॉल ७८४०८८२२७०
          </p>
          <p className="text-white/80 text-base mt-5 leading-relaxed max-w-2xl mx-auto">
            Get genuine Brajwasi Feeds cattle feed at Vedic Heritage, Ramnagar, Bikapur.
            Quality nutrition for your dairy animals at the best local price. Visit our store
            daily from 8AM to 7PM or inquire on WhatsApp for stock and pricing details.
          </p>
          <p className="text-white/50 text-sm mt-2 font-devanagari leading-relaxed max-w-2xl mx-auto">
            वैदिक हेरिटेज बीकापुर में मूल ब्रजवासी फीड्स उपलब्ध है। सुबह ८ बजे से शाम ७ बजे तक
            स्टोर खुला रहता है।
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
                    Benefits of Brajwasi Feeds
                  </h2>
                  <p className="text-gray-400 text-sm mt-1.5 font-devanagari">ब्रजवासी फीड्स के फायदे</p>
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
                  title="Brajwasi Feeds"
                  titleHindi="ब्रजवासी फीड्स"
                  badge="Available in Bikapur"
                  slug="brajwasi-feeds-bikapur"
                  inquiryBased={true}
                />
                <ProductCard
                  title="Godrej Agrovet"
                  titleHindi="गोदरेज एग्रोवेट"
                  badge="Trusted"
                  slug="godrej-agrovet-bikapur"
                  inquiryBased={true}
                />
              </div>
            </section>

            {/* ── 5. Content ── */}
            <section className="bg-cream border border-gray-200 rounded-2xl p-6 md:p-8 pt-14 md:pt-20 pb-10 md:pb-14 space-y-10 md:space-y-14">

              {/* About */}
              <div className="border border-gray-100 rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-black text-deepGreen mb-2">
                  About Brajwasi Feeds — Quality Cattle Feed in Bikapur
                </h2>
                <p className="text-gray-400 text-sm font-devanagari mb-6">
                  ब्रजवासी फीड्स के बारे में — बीकापुर में क्वालिटी पशु आहार
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Brajwasi Feeds is a well-known regional cattle feed brand that has earned the trust of
                  dairy farmers across Uttar Pradesh, particularly in the Ayodhya, Faizabad, and Bikapur
                  belt. Formulated with a balanced blend of oil cakes, grains, bran, mineral mixture, and
                  essential vitamins, Brajwasi Feeds provides complete daily nutrition for dairy cows and
                  buffaloes at an affordable price point. At Vedic Heritage in Ramnagar, Bikapur, we
                  stock genuine Brajwasi Feeds in all standard pack sizes, ensuring farmers never have
                  to compromise on quality due to distance or availability. Our store opens at 8AM and
                  remains open until 7PM, giving you ample time to visit after your morning farm work.
                </p>
                <p className="text-gray-500 text-sm font-devanagari leading-relaxed mt-4">
                  ब्रजवासी फीड्स उत्तर प्रदेश के डेयरी किसानों में एक जाना-माना क्षेत्रीय पशु आहार ब्रांड है।
                  यह तेल की खली, अनाज, चोकर, खनिज मिश्रण और आवश्यक विटामिन के संतुलित मिश्रण से तैयार किया
                  जाता है। वैदिक हेरिटेज रामनगर, बीकापुर में हम सभी मानक पैक साइज में मूल ब्रजवासी फीड्स
                  रखते हैं।
                </p>
              </div>

              {/* Ingredients */}
              <div className="bg-cream/40 border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-black text-deepGreen mb-4">
                  Nutritional Composition and Quality Standards
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Brajwasi Feeds is manufactured with a minimum crude protein content of 16–18%,
                  supplemented with digestible energy sources like maize and wheat bran. The formula
                  includes bypass protein for direct absorption in the small intestine, bypassing rumen
                  fermentation losses. Essential minerals such as calcium, phosphorus, and magnesium are
                  added in chelated form for better bioavailability. Vitamin premixes including A, D3, E,
                  and B-complex support immune function, reproductive health, and coat quality. Each
                  batch undergoes quality testing for moisture, aflatoxin, and crude fibre content before
                  dispatch from the manufacturing facility.
                </p>
              </div>

              {/* Milk Production */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-black text-deepGreen mb-4">
                  Milk Yield Improvement — Local Farmer Testimonials
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Farmers in Bikapur, Ramnagar, Bharatkund, and nearby areas who feed Brajwasi Feeds to
                  their dairy cattle consistently report a 12–20% improvement in milk yield within the
                  first month of use. The feed&apos;s balanced protein-to-energy ratio reduces negative energy
                  balance in early lactation, helping high-yielding animals maintain body condition while
                  maximizing milk output. Local dairy collectors in the Ayodhya and Faizabad markets note
                  that cattle fed with Brajwasi Feeds produce milk with higher SNF and fat content,
                  translating to better rates at milk collection centres.
                </p>
                <p className="text-gray-500 text-sm font-devanagari leading-relaxed mt-4">
                  बीकापुर, रामनगर, भरतकुंड और आसपास के क्षेत्रों के किसान जो अपने पशुओं को ब्रजवासी फीड्स
                  खिलाते हैं, वे पहले महीने में १२–२०% की सुधार देखते हैं। यह फीड संतुलित प्रोटीन-टू-एनर्जी
                  अनुपात दूध उत्पादन को अधिकतम करता है।
                </p>
              </div>

              {/* Why Buy */}
              <div className="bg-cream/40 border border-gray-100 rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-black text-deepGreen mb-4">
                  Why Choose from Vedic Heritage, Bikapur?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  When you buy Brajwasi Feeds from Vedic Heritage in Ramnagar, Bikapur, you are choosing
                  a local dealer who understands the specific needs of dairy farmers in the Ayodhya
                  district. We maintain only fresh stock sourced from authorized distributors, so you
                  never receive old or improperly stored feed. Our pricing is transparent and competitive
                  — we regularly survey the Bikapur market to ensure our rates are the best available.
                  Our team can advise you on feeding schedules, recommended quantities, and complementary
                  products like mineral mixture and chuni for optimal results. Visit us anytime between
                  8AM and 7PM, or call 7840882270 to confirm stock before your visit.
                </p>
                <p className="text-gray-500 text-sm font-devanagari leading-relaxed mt-4">
                  जब आप रामनगर, बीकापुर में वैदिक हेरिटेज से ब्रजवासी फीड्स खरीदते हैं, तो आप एक स्थानीय
                  डीलर का चयन कर रहे हैं जो अयोध्या जिले के डेयरी किसानों की विशिष्ट जरूरतों को समझता है।
                  हम केवल अधिकृत वितरकों से ताज़ा स्टॉक बनाए रखते हैं। किसी भी समय ८ बजे से ७ बजे तक आएं।
                </p>
              </div>

              {/* Service Areas */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-black text-deepGreen mb-4">
                  Service Reach — Bikapur, Ramnagar, and Nearby Villages
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our Vedic Heritage store in Ramnagar, Bikapur welcomes walk-in customers from Bikapur,
                  Ramnagar, Bharatkund, Milkipur, Sohawal, Goshainganj, Ayodhya, Faizabad, and surrounding
                  villages. We are open daily from 8AM to 7PM, including most local market days. For bulk
                  orders, dairy cooperatives, and gaushala operators, please call 7840882270 or WhatsApp
                  9911662492 in advance to reserve stock and discuss volume pricing. We do not offer home
                  delivery — all products must be collected from our store so you can verify quality and
                  freshness before purchase.
                </p>
              </div>

            </section>

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Contact Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="text-xs font-bold text-deepGreen/70 uppercase tracking-widest mb-1">Authorized Dealer</p>
                <h3 className="font-black text-deepGreen text-xl mb-1">Brajwasi Feeds</h3>
                <p className="text-gray-400 text-sm font-devanagari mb-5">ब्रजवासी फीड्स — बीकापुर</p>

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
                  Inquire About Brajwasi Feeds
                </h3>
                <p className="text-white/55 text-xs mb-5 font-devanagari">
                  ब्रजवासी फीड्स के बारे में पूछताछ करें
                </p>
                <InquiryForm defaultProduct="Brajwasi Feeds" />
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
            heading="Frequently Asked Questions — Brajwasi Feeds Bikapur"
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
