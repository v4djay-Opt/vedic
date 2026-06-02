import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import BreadcrumbList from '@/components/BreadcrumbList';
import FaqSection, { type FaqItem } from '@/components/FaqSection';
import InquiryForm from '@/components/InquiryForm';
import ProductCard from '@/components/ProductCard';

/* ─── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Kapila Pashu Aahar Dealer in Ayodhya | Vedic Heritage | Free Delivery',
  description:
    'Authorized Kapila Pashu Aahar dealer in Ayodhya. Best price, genuine product, free delivery within 25km. Call or WhatsApp now. कपिला पशु आहार अयोध्या।',
  alternates: { canonical: '/kapila-pashu-aahar-ayodhya' },
};

/* ─── JSON-LD Schemas ──────────────────────────────────────── */
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Kapila Pashu Aahar',
  description:
    'Authorized Kapila Pashu Aahar dealer in Ayodhya, Uttar Pradesh. Genuine product, best price, free delivery within 25km.',
  brand: { '@type': 'Brand', name: 'Kapila' },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    areaServed: { '@type': 'City', name: 'Ayodhya', addressRegion: 'Uttar Pradesh' },
    seller: {
      '@type': 'LocalBusiness',
      name: 'Vedic Heritage',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ayodhya',
        addressRegion: 'Uttar Pradesh',
        postalCode: '224001',
      },
    },
  },
};

const faqs: FaqItem[] = [
  {
    q: 'Ayodhya mein Kapila Pashu Aahar kahan milta hai?',
    qHindi: 'कपिला पशु आहार अयोध्या में कहाँ मिलता है?',
    a: 'Vedic Heritage is the authorized dealer of Kapila Pashu Aahar in Ayodhya and surrounding areas including Faizabad, Bikapur, Sohawal, and Milkipur. Call or WhatsApp us at +91 78408 82270 to place your order.',
  },
  {
    q: 'Kapila Pashu Aahar ki price kya hai Ayodhya mein?',
    qHindi: 'कपिला पशु आहार की कीमत क्या है?',
    a: 'Price varies by pack size (10kg, 25kg, 50kg). We offer the best competitive rates in Ayodhya. WhatsApp us for current prices and bulk discounts — we always match or beat local market rates.',
  },
  {
    q: 'Kya home delivery milti hai Kapila Pashu Aahar ki?',
    qHindi: 'क्या होम डिलीवरी मिलती है?',
    a: 'Yes, we offer free home delivery within 25km of Ayodhya. For areas like Bikapur, Sohawal, Milkipur, and Rudauli, delivery is available. For bulk orders, we also deliver pan Uttar Pradesh.',
  },
  {
    q: 'Kapila Pashu Aahar feed se kitna doodh badhta hai?',
    qHindi: 'कपिला फ़ीड से कितना दूध बढ़ता है?',
    a: 'Farmers in Ayodhya region consistently report a 20–30% increase in daily milk yield within just 4 to 6 weeks of regular use. The bypass protein component maximizes amino acid availability for milk protein synthesis.',
  },
  {
    q: 'Bulk order pe discount milta hai?',
    qHindi: 'बल्क ऑर्डर पर डिस्काउंट मिलता है?',
    a: 'Yes, special rates are available for orders above 100kg. Dairy farms, cooperative societies, and gaushala owners can contact us on WhatsApp for custom pricing. Minimum delivery guaranteed within 24 hours.',
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
    { '@type': 'ListItem', position: 3, name: 'Kapila Pashu Aahar', item: 'https://vedicheritage.in/kapila-pashu-aahar-ayodhya' },
  ],
};

/* ─── Static data ──────────────────────────────────────────── */
const benefits = [
  { icon: '🥛', title: '25% More Milk', desc: 'Proven increase in milk yield within 4–6 weeks' },
  { icon: '💪', title: 'Strong Bones', desc: 'Calcium-rich formula for healthy skeletal growth' },
  { icon: '🌿', title: 'Natural Ingredients', desc: 'No harmful additives or synthetic hormones' },
  { icon: '⚡', title: 'More Energy', desc: 'Active, alert, and healthy cattle all day' },
  { icon: '🏥', title: 'Vet Approved', desc: 'Recommended by veterinarians across Ayodhya' },
  { icon: '💰', title: 'Best Value', desc: 'Competitive price with bulk order discounts' },
];

const packs = [
  { name: 'Starter Pack', weight: '10 kg', bestFor: 'Small farmers (1–2 cattle)', wa: 'Starter 10kg' },
  { name: 'Standard Pack', weight: '25 kg', bestFor: 'Medium farms (3–5 cattle)', wa: 'Standard 25kg' },
  { name: 'Bulk Pack', weight: '50 kg', bestFor: 'Large farms & gaushalas', wa: 'Bulk 50kg' },
];

const serviceAreas = [
  'Ayodhya', 'Faizabad', 'Bikapur', 'Sohawal', 'Milkipur', 'Rudauli',
  'Maya Bazar', 'Tanda', 'Akbarpur', 'Sohratgarh', 'Nawabganj',
  'Tarabganj', 'Goshainganj', 'Kumarganj', 'Masaudha',
];

const relatedProducts = [
  { title: 'Cattle Feed Mix', titleHindi: 'पशु आहार मिक्स', badge: 'Popular', slug: 'cattle-feed-dealer-ayodhya', inquiryBased: true as const },
  { title: 'Havan Samagri', titleHindi: 'हवन सामग्री', badge: 'Pure', slug: 'havan-samagri-ayodhya', price: 250, unit: 'kg' },
  { title: 'Bulk Order', titleHindi: 'थोक ऑर्डर', badge: 'Best Value', slug: 'bulk-inquiry', inquiryBased: true as const },
];

const WA_ORDER = `https://wa.me/919911662492?text=${encodeURIComponent('नमस्ते! मुझे Kapila Pashu Aahar चाहिए। कृपया price और delivery बताएं।')}`;

/* ─── WA icon shared ───────────────────────────────────────── */
function WaIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─── Page ─────────────────────────────────────────────────── */
export default function KapilaPashuAaharPage() {
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
            ✓ AUTHORIZED DEALER — AYODHYA
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
            Kapila Pashu Aahar
            <br />
            <span className="text-ochre">in Ayodhya</span>
          </h1>
          <p className="text-white/60 text-sm mt-2 font-devanagari leading-relaxed">
            कपिला पशु आहार — अयोध्या के अधिकृत डीलर
          </p>
          <p className="text-white/80 text-base mt-5 leading-relaxed max-w-2xl mx-auto">
            We are the authorized dealer of Kapila Pashu Aahar in Ayodhya and surrounding
            areas. Genuine product, best price, and free delivery within 25km of Ayodhya.
          </p>
          <p className="text-white/50 text-sm mt-2 font-devanagari leading-relaxed max-w-2xl mx-auto">
            हम अयोध्या और आसपास के क्षेत्रों में कपिला पशु आहार के अधिकृत डीलर हैं।
            असली उत्पाद, सबसे अच्छी कीमत, और 25 किमी के भीतर मुफ्त डिलीवरी।
          </p>
        </div>
      </section>

      {/* ── Content + Sidebar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 md:space-y-10">

            {/* ── 1. Benefits Grid ── */}
            <section className="bg-sage/40 border border-deepGreen/20 rounded-2xl p-6 md:p-8 py-10 md:py-14">
              <div>
                <div className="mb-10 text-left">
                  <h2 className="text-3xl sm:text-4xl font-black text-deepGreen">
                    Benefits of Kapila Pashu Aahar
                  </h2>
                  <p className="text-gray-400 text-sm mt-1.5 font-devanagari">कपिला पशु आहार के फायदे</p>
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

            {/* ── 2. Product Cards ── */}
            <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 py-10 md:py-14">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <ProductCard
                  title="Kapila Pashu Aahar"
                  titleHindi="कपिला पशु आहार"
                  badge="Authorized Dealer"
                  slug="kapila-pashu-aahar-ayodhya"
                  inquiryBased={true}
                />
                <ProductCard
                  title="Cattle Feed Mix"
                  titleHindi="पशु आहार मिक्स"
                  badge="Popular"
                  slug="cattle-feed-dealer-ayodhya"
                  inquiryBased={true}
                />
              </div>
            </section>

            {/* ── 3. Content ── */}
            <section className="bg-cream border border-gray-200 rounded-2xl p-6 md:p-8 pt-14 md:pt-20 pb-10 md:pb-14 space-y-10 md:space-y-14">

              {/* About */}
              <div className="border border-gray-100 rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-black text-deepGreen mb-2">
                  About Kapila Pashu Aahar — Premium Cattle Feed in Ayodhya
                </h2>
                <p className="text-gray-400 text-sm font-devanagari mb-6">
                  कपिला पशु आहार के बारे में — अयोध्या में प्रीमियम पशु आहार
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Kapila Pashu Aahar is one of India&apos;s most trusted scientifically formulated cattle
                  feed brands, designed to improve milk production, health, and vitality in dairy cows
                  and buffaloes. Manufactured with a carefully balanced blend of proteins, carbohydrates,
                  vitamins, and minerals, it is the preferred choice of dairy farmers across Uttar Pradesh,
                  including the Ayodhya and Faizabad region.
                </p>
                <p className="text-gray-500 text-sm font-devanagari leading-relaxed mt-4">
                  कपिला पशु आहार भारत के सबसे विश्वसनीय पशु आहार ब्रांड्स में से एक है। यह डेयरी
                  गायों और भैंसों में दूध उत्पादन, स्वास्थ्य और जीवन शक्ति को बेहतर बनाने के लिए
                  वैज्ञानिक रूप से तैयार किया गया है।
                </p>
              </div>

              {/* Ingredients */}
              <div className="bg-cream/40 border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-black text-deepGreen mb-4">
                  Key Ingredients and Nutritional Value
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The Kapila Pashu Aahar formula contains de-oiled rice bran, cotton seed cake, maize,
                  wheat bran, bypass protein, mineral mixture, and salt. This combination delivers a
                  high-energy, high-protein diet that supports optimal rumen function and milk fat
                  synthesis. The feed is manufactured under strict quality control at FSSAI-registered
                  facilities, ensuring every bag meets certified nutritional standards.
                </p>
              </div>

              {/* Milk Production */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-black text-deepGreen mb-4">
                  How Kapila Pashu Aahar Increases Milk Production
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dairy farmers in Ayodhya who switched to Kapila Pashu Aahar report a consistent
                  20–30% increase in daily milk yield within 4 to 6 weeks of regular use. The feed&apos;s
                  bypass protein component is absorbed directly in the small intestine, maximizing amino
                  acid availability for milk protein synthesis. Combined with a balanced energy-to-protein
                  ratio, it reduces metabolic stress in lactating animals and improves both milk quantity
                  and fat percentage — critical factors for dairy profitability in the Faizabad and
                  Ayodhya market.
                </p>
                <p className="text-gray-500 text-sm font-devanagari leading-relaxed mt-4">
                  अयोध्या में जिन किसानों ने कपिला पशु आहार का उपयोग शुरू किया, उन्होंने नियमित
                  उपयोग के 4 से 6 हफ्तों के भीतर दैनिक दूध उत्पादन में 20–30% की वृद्धि दर्ज की है।
                  बायपास प्रोटीन घटक सीधे छोटी आंत में अवशोषित होता है, जो दूध प्रोटीन संश्लेषण
                  के लिए अमीनो एसिड की उपलब्धता को अधिकतम करता है।
                </p>
              </div>

              {/* Why Buy */}
              <div className="bg-cream/40 border border-gray-100 rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-black text-deepGreen mb-4">
                  Why Buy from Vedic Heritage, Ayodhya?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Vedic Heritage is the officially authorized Kapila Pashu Aahar dealer in Ayodhya,
                  Uttar Pradesh. When you buy from us, you receive 100% genuine product directly sourced
                  from the authorized distribution network — no adulteration, no short-weight bags. We
                  offer the most competitive pricing in the Ayodhya market, and all orders receive free
                  doorstep delivery within 25km. Our team has been serving local dairy farmers since
                  2020 and has built a reputation for timely delivery and honest pricing.
                </p>
                <p className="text-gray-500 text-sm font-devanagari leading-relaxed mt-4">
                  वैदिक हेरिटेज अयोध्या, उत्तर प्रदेश में कपिला पशु आहार का आधिकारिक अधिकृत डीलर है।
                  हमसे खरीदने पर आपको 100% असली उत्पाद की गारंटी मिलती है। हम अयोध्या बाज़ार में
                  सबसे प्रतिस्पर्धी मूल्य प्रदान करते हैं और 25 किमी के भीतर सभी ऑर्डर पर मुफ्त
                  डोरस्टेप डिलीवरी देते हैं।
                </p>
              </div>

              {/* Service Areas */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-black text-deepGreen mb-4">
                  Service Areas — Ayodhya, Faizabad, and Surrounding Villages
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We deliver Kapila Pashu Aahar to farms and households across Ayodhya, Faizabad,
                  Bikapur, Sohawal, Milkipur, Rudauli, Maya Bazar, Tanda, Akbarpur, Goshainganj,
                  Kumarganj, Masaudha, and other nearby areas. For bulk orders by gaushala operators,
                  dairy cooperatives, or large farms, we arrange delivery across all of Uttar Pradesh.
                  Contact us to confirm availability in your village or town.
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
                <h3 className="font-black text-deepGreen text-xl mb-1">Kapila Pashu Aahar</h3>
                <p className="text-gray-400 text-sm font-devanagari mb-5">कपिला पशु आहार — अयोध्या</p>

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
                    { label: 'Genuine Product', icon: '✓' },
                    { label: 'Best Price', icon: '✓' },
                    { label: 'Free Delivery 25km', icon: '✓' },
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
                      <p className="text-gray-500">Free within 25km</p>
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
                  Order Kapila Pashu Aahar
                </h3>
                <p className="text-white/55 text-xs mb-5 font-devanagari">
                  कपिला पशु आहार ऑर्डर करें
                </p>
                <InquiryForm defaultProduct="Kapila Pashu Aahar" />
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ── 4. Service Areas Banner ── */}
      <section className="bg-deepGreen py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
            We Deliver Kapila Pashu Aahar in These Areas
          </h2>
          <p className="text-white/60 text-sm font-devanagari mb-8">
            हम इन क्षेत्रों में डिलीवरी करते हैं
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
            Free delivery within 25km &nbsp;|&nbsp; Bulk orders available pan-UP
          </p>
          <a
            href={WA_ORDER}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 bg-white text-deepGreen font-bold px-6 py-3 rounded-xl hover:bg-cream transition-colors text-sm shadow-md"
          >
            Check Delivery in Your Area
          </a>
        </div>
      </section>

      {/* ── 5. FAQ ── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqSection
            faqs={faqs}
            heading="Frequently Asked Questions — Kapila Pashu Aahar Ayodhya"
            headingHindi="अक्सर पूछे जाने वाले सवाल"
          />
        </div>
      </section>

      {/* ── 6. Related Products ── */}
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
