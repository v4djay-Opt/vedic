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
    a: 'Vedic Heritage is the authorized dealer of Kapila Pashu Aahar in Ayodhya and surrounding areas including Faizabad, Bikapur, Sohawal, and Milkipur. Call or WhatsApp us at +91 99999 99999 to place your order.',
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

const WA_ORDER = `https://wa.me/919999999999?text=${encodeURIComponent('नमस्ते! मुझे Kapila Pashu Aahar चाहिए। कृपया price और delivery बताएं।')}`;

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

      {/* ── 1. Breadcrumb ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <BreadcrumbList
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' },
              { label: 'Kapila Pashu Aahar' },
            ]}
          />
        </div>
      </div>

      {/* ── 2. Hero Block ── */}
      <section className="bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* Left */}
            <div>
              <div className="inline-flex items-center bg-deepGreen/10 border border-deepGreen/20 text-deepGreen text-[11px] font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full mb-5">
                ✓ AUTHORIZED DEALER — AYODHYA
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-deepGreen leading-[1.1] tracking-tight">
                Kapila Pashu Aahar
                <br />
                <span className="text-ochre">in Ayodhya</span>
              </h1>
              <p className="text-gray-400 text-sm mt-2 font-devanagari leading-relaxed">
                कपिला पशु आहार — अयोध्या के अधिकृत डीलर
              </p>
              <p className="text-gray-700 text-base mt-5 leading-relaxed max-w-lg">
                We are the authorized dealer of Kapila Pashu Aahar in Ayodhya and surrounding
                areas. Genuine product, best price, and free delivery within 25km of Ayodhya.
              </p>
              <p className="text-gray-400 text-sm mt-2 font-devanagari leading-relaxed">
                हम अयोध्या और आसपास के क्षेत्रों में कपिला पशु आहार के अधिकृत डीलर हैं।
                असली उत्पाद, सबसे अच्छी कीमत, और 25 किमी के भीतर मुफ्त डिलीवरी।
              </p>

              <div className="flex flex-wrap gap-3 mt-7">
                <a
                  href={WA_ORDER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-deepGreen hover:bg-deepGreen/90 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
                >
                  <WaIcon />
                  WhatsApp pe Order Karein
                </a>
                <a
                  href="tel:+919999999999"
                  className="inline-flex items-center gap-2 border-2 border-deepGreen text-deepGreen hover:bg-deepGreen hover:text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                  </svg>
                  Call Now
                </a>
              </div>

              <div className="flex flex-wrap gap-5 mt-6 pt-5 border-t border-deepGreen/10">
                {['Genuine Product', 'Best Price', 'Free Delivery 25km'].map((t) => (
                  <div key={t} className="flex items-center gap-1.5 text-sm text-deepGreen font-semibold">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 sm:w-80 lg:w-[400px]">
                <div className="absolute -top-3 -right-3 z-10 bg-deepGreen text-white text-[10px] font-black tracking-wide uppercase px-3 py-1.5 rounded-full shadow-md">
                  Authorized Dealer
                </div>
                <div className="aspect-square bg-sage rounded-2xl border border-deepGreen/10 shadow-xl flex flex-col items-center justify-center gap-3">
                  <div className="text-8xl">🐄</div>
                  <div className="text-center px-6">
                    <p className="text-deepGreen font-black text-lg">Kapila Pashu Aahar</p>
                    <p className="text-gray-400 text-sm font-devanagari mt-1">कपिला पशु आहार</p>
                    <p className="text-gray-400 text-xs mt-3 leading-relaxed">
                      Competitive Price &nbsp;|&nbsp; Bulk Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SEO Content ── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-black text-deepGreen mb-2">
            About Kapila Pashu Aahar — Premium Cattle Feed in Ayodhya
          </h2>
          <p className="text-gray-400 text-sm font-devanagari mb-6">
            कपिला पशु आहार के बारे में — अयोध्या में प्रीमियम पशु आहार
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Kapila Pashu Aahar is one of India&apos;s most trusted scientifically formulated cattle
            feed brands, designed to improve milk production, health, and vitality in dairy cows
            and buffaloes. Manufactured with a carefully balanced blend of proteins, carbohydrates,
            vitamins, and minerals, it is the preferred choice of dairy farmers across Uttar Pradesh,
            including the Ayodhya and Faizabad region.
          </p>

          <p className="text-gray-500 text-sm font-devanagari leading-relaxed mb-8">
            कपिला पशु आहार भारत के सबसे विश्वसनीय पशु आहार ब्रांड्स में से एक है। यह डेयरी
            गायों और भैंसों में दूध उत्पादन, स्वास्थ्य और जीवन शक्ति को बेहतर बनाने के लिए
            वैज्ञानिक रूप से तैयार किया गया है।
          </p>

          <h3 className="text-xl font-bold text-deepGreen mt-8 mb-3">
            Key Ingredients and Nutritional Value of Kapila Pashu Aahar
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Kapila Pashu Aahar formula contains de-oiled rice bran, cotton seed cake, maize,
            wheat bran, bypass protein, mineral mixture, and salt. This combination delivers a
            high-energy, high-protein diet that supports optimal rumen function and milk fat
            synthesis. The feed is manufactured under strict quality control at FSSAI-registered
            facilities, ensuring every bag meets certified nutritional standards.
          </p>

          <h3 className="text-xl font-bold text-deepGreen mt-8 mb-3">
            How Kapila Pashu Aahar Increases Milk Production in Cows — Ayodhya Farmers&apos; Experience
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dairy farmers in Ayodhya who switched to Kapila Pashu Aahar report a consistent
            20–30% increase in daily milk yield within 4 to 6 weeks of regular use. The feed&apos;s
            bypass protein component is absorbed directly in the small intestine, maximizing amino
            acid availability for milk protein synthesis. Combined with a balanced energy-to-protein
            ratio, it reduces metabolic stress in lactating animals and improves both milk quantity
            and fat percentage — critical factors for dairy profitability in the Faizabad and
            Ayodhya market.
          </p>

          <p className="text-gray-500 text-sm font-devanagari leading-relaxed mb-8">
            अयोध्या में जिन किसानों ने कपिला पशु आहार का उपयोग शुरू किया, उन्होंने नियमित
            उपयोग के 4 से 6 हफ्तों के भीतर दैनिक दूध उत्पादन में 20–30% की वृद्धि दर्ज की है।
            बायपास प्रोटीन घटक सीधे छोटी आंत में अवशोषित होता है, जो दूध प्रोटीन संश्लेषण
            के लिए अमीनो एसिड की उपलब्धता को अधिकतम करता है।
          </p>

          <h2 className="text-3xl font-black text-deepGreen mt-10 mb-3">
            Why Buy Kapila Pashu Aahar from Vedic Heritage, Ayodhya?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vedic Heritage is the officially authorized Kapila Pashu Aahar dealer in Ayodhya,
            Uttar Pradesh. When you buy from us, you receive 100% genuine product directly sourced
            from the authorized distribution network — no adulteration, no short-weight bags. We
            offer the most competitive pricing in the Ayodhya market, and all orders receive free
            doorstep delivery within 25km. Our team has been serving local dairy farmers since
            2020 and has built a reputation for timely delivery and honest pricing.
          </p>

          <p className="text-gray-500 text-sm font-devanagari leading-relaxed mb-8">
            वैदिक हेरिटेज अयोध्या, उत्तर प्रदेश में कपिला पशु आहार का आधिकारिक अधिकृत डीलर है।
            हमसे खरीदने पर आपको 100% असली उत्पाद की गारंटी मिलती है। हम अयोध्या बाज़ार में
            सबसे प्रतिस्पर्धी मूल्य प्रदान करते हैं और 25 किमी के भीतर सभी ऑर्डर पर मुफ्त
            डोरस्टेप डिलीवरी देते हैं।
          </p>

          <h3 className="text-xl font-bold text-deepGreen mt-8 mb-3">
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

      {/* ── 4. Benefits Grid ── */}
      <section className="bg-sage/40 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
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

      {/* ── 5. Packs ── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-deepGreen">
              Available Packs of Kapila Pashu Aahar in Ayodhya
            </h2>
            <p className="text-gray-400 text-sm mt-1.5 font-devanagari">
              उपलब्ध पैक आकार — अयोध्या में डिलीवरी
            </p>
          </div>
          <div className="hidden sm:grid grid-cols-4 bg-deepGreen text-white text-xs font-bold uppercase tracking-widest rounded-xl px-5 py-3 gap-4 mb-2">
            <span>Pack</span><span>Weight</span><span>Best For</span><span></span>
          </div>
          <div className="space-y-3">
            {packs.map((p, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl px-5 py-4 sm:grid sm:grid-cols-4 sm:items-center sm:gap-4 flex flex-col gap-3 bg-white hover:border-deepGreen/30 hover:shadow-md transition-all"
              >
                <p className="font-bold text-deepGreen text-sm">{p.name}</p>
                <p className="text-gray-600 text-sm font-semibold">{p.weight}</p>
                <p className="text-gray-500 text-sm">{p.bestFor}</p>
                <a
                  href={`https://wa.me/919999999999?text=${encodeURIComponent(`नमस्ते! मुझे Kapila Pashu Aahar ${p.wa} चाहिए।`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-deepGreen hover:bg-deepGreen/90 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  <WaIcon />
                  Inquire on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Service Areas ── */}
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

      {/* ── 7. FAQ ── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqSection
            faqs={faqs}
            heading="Frequently Asked Questions — Kapila Pashu Aahar Ayodhya"
            headingHindi="अक्सर पूछे जाने वाले सवाल"
          />
        </div>
      </section>

      {/* ── 8. Inquiry Form ── */}
      <section className="bg-deepGreen/95 py-14 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 border border-white/20 text-white/80 text-[11px] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full mb-5">
            PLACE YOUR ORDER
          </div>
          <h2 className="text-3xl font-black text-white mb-2">
            Order Kapila Pashu Aahar in Ayodhya
          </h2>
          <p className="text-white/55 text-sm mb-8 font-devanagari">
            कपिला पशु आहार ऑर्डर करें — हम 24 घंटे में जवाब देते हैं
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 text-left">
            <InquiryForm defaultProduct="Kapila Pashu Aahar" />
          </div>
        </div>
      </section>

      {/* ── 9. Related Products ── */}
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
