import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import BreadcrumbList from '@/components/BreadcrumbList';
import FaqSection, { type FaqItem } from '@/components/FaqSection';
import InquiryForm from '@/components/InquiryForm';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Pure Havan Samagri in Ayodhya near Ram Mandir | Vedic Heritage',
  description:
    'Buy pure, authentic havan samagri in Ayodhya near Ram Mandir. Bulk supply for temples, events and homes. Free delivery. शुद्ध हवन सामग्री अयोध्या। Call now.',
  alternates: { canonical: '/havan-samagri-ayodhya' },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Havan Samagri — Pure Ayodhya',
  description: 'Pure and authentic havan samagri sourced and sold in Ayodhya near Ram Mandir. Bulk supply for temples, rituals, and events.',
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
    q: 'Ayodhya mein shuddh havan samagri kahan milti hai?',
    qHindi: 'अयोध्या में शुद्ध हवन सामग्री कहाँ मिलती है?',
    a: 'Vedic Heritage sells pure, handcrafted havan samagri in Ayodhya near the Ram Mandir area. We source ingredients from trusted Ayurvedic suppliers. You can order online via WhatsApp or visit us in person. Free delivery within 25km.',
  },
  {
    q: 'Havan samagri mein kya kya hota hai?',
    qHindi: 'हवन सामग्री में क्या-क्या होता है?',
    a: 'Our havan samagri contains a blend of pure ingredients: dried mango wood chips, til (sesame), jau (barley), ghee-soaked cotton wicks, kapoor (camphor), guggul, loban, dried herbs (shatavari, brahmi, ashwagandha), samagri flowers, and natural resins. All ingredients are free of synthetic fragrances or chemicals.',
  },
  {
    q: 'Mandir aur events ke liye bulk havan samagri milti hai?',
    qHindi: 'मंदिर और इवेंट्स के लिए बल्क हवन सामग्री मिलती है?',
    a: 'Yes, we are a preferred supplier for multiple temples in Ayodhya and nearby areas, including Ram Mandir pujas. For bulk orders above 5kg, we offer custom packaging and special pricing. WhatsApp us with the event date and quantity needed.',
  },
  {
    q: 'Havan samagri ki price kya hai?',
    qHindi: 'हवन सामग्री की कीमत क्या है?',
    a: 'Pricing starts at ₹150 for 250g and scales up to bulk rates for temple supply. Exact pricing depends on the specific blend (standard, premium, or Ram Mandir special blend). WhatsApp us for current rate list.',
  },
  {
    q: 'Havan samagri ko store kaise karein?',
    qHindi: 'हवन सामग्री को स्टोर कैसे करें?',
    a: 'Store havan samagri in an airtight container away from moisture and direct sunlight. Properly stored, it retains its fragrance and potency for 6–12 months. Our packaging includes a moisture-resistant inner seal for freshness.',
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
    { '@type': 'ListItem', position: 3, name: 'Havan Samagri Ayodhya', item: 'https://vedicheritage.in/havan-samagri-ayodhya' },
  ],
};

const benefits = [
  { icon: '🌿', title: '100% Pure', desc: 'No synthetic fragrances, dyes, or chemical fillers' },
  { icon: '🕉️', title: 'Ram Mandir Trusted', desc: 'Supplied to temples in and around Ayodhya' },
  { icon: '✋', title: 'Hand Curated', desc: 'Each batch blended with traditional proportions' },
  { icon: '📦', title: 'Bulk for Events', desc: 'Custom packs for yagyas, weddings, temple pujas' },
  { icon: '🌸', title: 'Natural Fragrance', desc: 'Rich, authentic vedic aroma from pure herbs' },
  { icon: '🚚', title: 'Fast Delivery', desc: 'Same or next day delivery in Ayodhya district' },
];

const packs = [
  { name: 'Small Pack', weight: '250 g', bestFor: 'Home havan, daily puja', wa: 'Havan Samagri 250g' },
  { name: 'Standard Pack', weight: '500 g', bestFor: 'Weekly rituals and events', wa: 'Havan Samagri 500g' },
  { name: 'Bulk / Temple Pack', weight: '1 kg+', bestFor: 'Temples, yagyas, large events', wa: 'Havan Samagri bulk 1kg+' },
];

const serviceAreas = ['Ayodhya', 'Faizabad', 'Bikapur', 'Sohawal', 'Milkipur', 'Rudauli', 'Maya Bazar', 'Tanda', 'Akbarpur', 'Sohratgarh', 'Nawabganj', 'Tarabganj', 'Goshainganj', 'Kumarganj', 'Masaudha'];

const relatedProducts = [
  { title: 'Cow Dung Cake', titleHindi: 'गोबर उपला', badge: 'Natural', slug: 'cow-dung-cake-ayodhya', price: 80, unit: 'pack' },
  { title: 'Hawan Wood Sticks', titleHindi: 'हवन समिधा', badge: 'Authentic', slug: 'hawan-wood-sticks-ayodhya', price: 150, unit: 'bundle' },
  { title: 'Kapila Pashu Aahar', titleHindi: 'कपिला पशु आहार', badge: 'Best Seller', slug: 'kapila-pashu-aahar-ayodhya', inquiryBased: true as const },
];

const WA_ORDER = `https://wa.me/919999999999?text=${encodeURIComponent('नमस्ते! मुझे शुद्ध हवन सामग्री चाहिए। कृपया price और availability बताएं।')}`;

function WaIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function HavanSamagriPage() {
  return (
    <>
      <JsonLd schema={productSchema as Record<string, unknown>} />
      <JsonLd schema={faqSchema as Record<string, unknown>} />
      <JsonLd schema={breadcrumbSchema as Record<string, unknown>} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <BreadcrumbList crumbs={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Havan Samagri Ayodhya' }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <div className="inline-flex items-center bg-deepGreen/10 border border-deepGreen/20 text-deepGreen text-[11px] font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full mb-5">
                🕉️ PURE & AUTHENTIC — AYODHYA
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-deepGreen leading-[1.1] tracking-tight">
                Pure Havan Samagri
                <br /><span className="text-ochre">near Ram Mandir, Ayodhya</span>
              </h1>
              <p className="text-gray-400 text-sm mt-2 font-devanagari leading-relaxed">
                शुद्ध हवन सामग्री — अयोध्या, राम मंदिर के पास
              </p>
              <p className="text-gray-700 text-base mt-5 leading-relaxed max-w-lg">
                Vedic Heritage supplies 100% pure havan samagri in Ayodhya — free of synthetic
                additives, hand-curated with authentic Vedic ingredients. Trusted by temples and
                families near the Ram Mandir.
              </p>
              <p className="text-gray-400 text-sm mt-2 font-devanagari leading-relaxed">
                वैदिक हेरिटेज अयोध्या में 100% शुद्ध हवन सामग्री की आपूर्ति करता है।
                राम मंदिर के पास के मंदिरों और परिवारों द्वारा विश्वसनीय।
              </p>
              <div className="flex flex-wrap gap-3 mt-7">
                <a href={WA_ORDER} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-deepGreen hover:bg-deepGreen/90 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all text-sm">
                  <WaIcon />WhatsApp pe Order Karein
                </a>
                <a href="tel:+919999999999" className="inline-flex items-center gap-2 border-2 border-deepGreen text-deepGreen hover:bg-deepGreen hover:text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" /></svg>
                  Call Now
                </a>
              </div>
              <div className="flex flex-wrap gap-5 mt-6 pt-5 border-t border-deepGreen/10">
                {['100% Pure', 'No Chemicals', 'Bulk for Temples'].map((t) => (
                  <div key={t} className="flex items-center gap-1.5 text-sm text-deepGreen font-semibold">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 sm:w-80 lg:w-[400px]">
                <div className="absolute -top-3 -right-3 z-10 bg-deepGreen text-white text-[10px] font-black tracking-wide uppercase px-3 py-1.5 rounded-full shadow-md">Ram Mandir Trusted</div>
                <div className="aspect-square bg-sage rounded-2xl border border-deepGreen/10 shadow-xl flex flex-col items-center justify-center gap-3">
                  <div className="text-8xl">🔥</div>
                  <div className="text-center px-6">
                    <p className="text-deepGreen font-black text-lg">Havan Samagri</p>
                    <p className="text-gray-400 text-sm font-devanagari mt-1">हवन सामग्री</p>
                    <p className="text-gray-400 text-xs mt-3">From ₹150 &nbsp;|&nbsp; Bulk Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-deepGreen mb-2">
            About Our Pure Havan Samagri — Ayodhya&apos;s Vedic Source
          </h2>
          <p className="text-gray-400 text-sm font-devanagari mb-6">हमारी शुद्ध हवन सामग्री के बारे में</p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Havan, or the sacred fire ritual, is one of the most powerful Vedic practices for
            purifying the mind, body, and environment. The potency of a havan depends entirely
            on the purity of the samagri (offerings) used. At Vedic Heritage, we curate our havan
            samagri using only natural, Ayurveda-approved ingredients — no artificial colours,
            synthetic fragrances, or chemical fillers are ever used. Each batch is hand-blended
            according to traditional Vedic proportions that have been passed down through
            generations of practitioners in Ayodhya.
          </p>
          <p className="text-gray-500 text-sm font-devanagari leading-relaxed mb-8">
            हवन एक शक्तिशाली वैदिक अनुष्ठान है जो मन, शरीर और पर्यावरण को शुद्ध करता है।
            वैदिक हेरिटेज में, हम केवल प्राकृतिक, आयुर्वेद-अनुमोदित सामग्री का उपयोग करते हैं।
            कोई कृत्रिम रंग, सिंथेटिक सुगंध या रासायनिक भराव कभी उपयोग नहीं किया जाता।
          </p>

          <h3 className="text-xl font-bold text-deepGreen mt-8 mb-3">
            Ingredients in Our Havan Samagri — Authentic Vedic Blend
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our standard havan samagri blend includes: til (sesame seeds), jau (barley), dried
            mango wood chips, guggul resin, loban (benzoin), kapoor (natural camphor), havan
            flowers (marigold petals, dried rose), dried medicinal herbs including shatavari,
            brahmi, and ashwagandha, and pure cow ghee-infused cotton wicks. For our premium
            Ram Mandir blend, we also incorporate chandan (sandalwood) powder and rare forest
            herbs sourced from the Himalayas — creating a richer, longer-lasting fragrance and
            deeper spiritual potency.
          </p>

          <h3 className="text-xl font-bold text-deepGreen mt-8 mb-3">
            Havan Samagri for Ram Mandir Puja and Religious Events in Ayodhya
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Since the consecration of the Ram Mandir in Ayodhya, demand for high-quality havan
            samagri in the city has grown dramatically. Vedic Heritage has been privileged to
            supply samagri for several major puja events organized near the Ram Mandir complex.
            Our samagri is prepared with the spiritual sanctity of Ayodhya in mind — each
            ingredient is checked for authenticity, and our blending process honours traditional
            texts. For temple committees, ashrams, and event organizers, we offer bulk supply
            with consistent quality and timely delivery, even for large yagyas.
          </p>
          <p className="text-gray-500 text-sm font-devanagari leading-relaxed mb-8">
            राम मंदिर के प्राण-प्रतिष्ठा के बाद से अयोध्या में उच्च-गुणवत्ता वाली हवन सामग्री
            की मांग नाटकीय रूप से बढ़ी है। वैदिक हेरिटेज को राम मंदिर परिसर के पास आयोजित
            कई प्रमुख पूजा कार्यक्रमों के लिए सामग्री की आपूर्ति करने का सौभाग्य मिला है।
          </p>

          <h2 className="text-3xl font-black text-deepGreen mt-10 mb-3">
            Why Buy Havan Samagri from Vedic Heritage, Ayodhya?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In an age when many commercially available havan samagri products contain sawdust,
            synthetic colours, and artificial fragrances, finding truly pure samagri has become
            difficult. Vedic Heritage sources every ingredient individually, ensures freshness,
            and blends in small batches to maintain quality control. We do not compromise on
            purity even for bulk orders. Our pricing is transparent and competitive — and we
            deliver across Ayodhya, Faizabad, and surrounding areas.
          </p>

          <h3 className="text-xl font-bold text-deepGreen mt-8 mb-3">
            Bulk Havan Samagri Supply — Temples, Gaushalas and Event Organizers in Ayodhya
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We supply havan samagri in bulk quantities (1kg, 5kg, 10kg, and above) for temple
            daily rituals, Navratri events, Ram Navami celebrations, weddings, griha pravesh
            ceremonies, and other large-scale yagyas. Custom blends are available for specific
            ritual requirements. Contact us at least 3 days in advance for large event orders
            to ensure availability of all ingredients.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-sage/40 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-deepGreen">Why Our Havan Samagri is Different</h2>
            <p className="text-gray-400 text-sm mt-1.5 font-devanagari">हमारी हवन सामग्री क्यों अलग है</p>
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

      {/* Packs */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-deepGreen">Havan Samagri Pack Sizes in Ayodhya</h2>
            <p className="text-gray-400 text-sm mt-1.5 font-devanagari">उपलब्ध पैक आकार</p>
          </div>
          <div className="hidden sm:grid grid-cols-4 bg-deepGreen text-white text-xs font-bold uppercase tracking-widest rounded-xl px-5 py-3 gap-4 mb-2">
            <span>Pack</span><span>Weight</span><span>Best For</span><span></span>
          </div>
          <div className="space-y-3">
            {packs.map((p, i) => (
              <div key={i} className="border border-gray-200 rounded-xl px-5 py-4 sm:grid sm:grid-cols-4 sm:items-center sm:gap-4 flex flex-col gap-3 bg-white hover:border-deepGreen/30 hover:shadow-md transition-all">
                <p className="font-bold text-deepGreen text-sm">{p.name}</p>
                <p className="text-gray-600 text-sm font-semibold">{p.weight}</p>
                <p className="text-gray-500 text-sm">{p.bestFor}</p>
                <a href={`https://wa.me/919999999999?text=${encodeURIComponent(`नमस्ते! मुझे ${p.wa} चाहिए।`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 bg-deepGreen hover:bg-deepGreen/90 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors">
                  <WaIcon />Inquire on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-deepGreen py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">Havan Samagri Delivery Areas — Ayodhya Region</h2>
          <p className="text-white/60 text-sm font-devanagari mb-8">हम इन क्षेत्रों में डिलीवरी करते हैं</p>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
            {serviceAreas.map((area) => (
              <span key={area} className="bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/15 transition-colors">📍 {area}</span>
            ))}
          </div>
          <p className="text-white/50 text-sm mt-8">Free delivery within 25km &nbsp;|&nbsp; Bulk orders pan-UP</p>
          <a href={WA_ORDER} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-8 bg-white text-deepGreen font-bold px-6 py-3 rounded-xl hover:bg-cream transition-colors text-sm shadow-md">Check Delivery in Your Area</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqSection faqs={faqs} heading="Havan Samagri FAQs — Ayodhya" headingHindi="अक्सर पूछे जाने वाले सवाल" />
        </div>
      </section>

      {/* Inquiry */}
      <section className="bg-deepGreen/95 py-14 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 border border-white/20 text-white/80 text-[11px] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full mb-5">PLACE YOUR ORDER</div>
          <h2 className="text-3xl font-black text-white mb-2">Order Havan Samagri in Ayodhya</h2>
          <p className="text-white/55 text-sm mb-8 font-devanagari">हवन सामग्री ऑर्डर करें — हम 24 घंटे में जवाब देते हैं</p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 text-left">
            <InquiryForm defaultProduct="Havan Samagri" />
          </div>
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
