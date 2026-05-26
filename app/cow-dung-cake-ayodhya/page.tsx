import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import BreadcrumbList from '@/components/BreadcrumbList';
import FaqSection, { type FaqItem } from '@/components/FaqSection';
import InquiryForm from '@/components/InquiryForm';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Cow Dung Cake (Gobar Upla) in Ayodhya | Vedic Heritage | Havan & Puja',
  description:
    'Pure desi cow dung cakes (gobar upla) for havan, puja, and eco-friendly use in Ayodhya. Bulk supply for temples and events. Free delivery. गोबर उपला अयोध्या।',
  alternates: { canonical: '/cow-dung-cake-ayodhya' },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cow Dung Cake (Gobar Upla) — Ayodhya',
  description: 'Pure desi cow dung cakes for havan, puja, and eco-friendly use. Sold in Ayodhya with bulk supply for temples and events.',
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
    q: 'Cow dung cake (gobar upla) Ayodhya mein kahan milta hai?',
    qHindi: 'गोबर उपला अयोध्या में कहाँ मिलता है?',
    a: 'Vedic Heritage supplies pure desi cow dung cakes in Ayodhya. Our cakes are made from indigenous (desi) cow dung, sun-dried naturally without any chemicals. Order via WhatsApp for same-day or next-day delivery within 25km of Ayodhya.',
  },
  {
    q: 'Gobar upla ka size aur pack kaisa hota hai?',
    qHindi: 'गोबर उपला का साइज़ और पैक कैसा होता है?',
    a: 'We offer cakes in standard size (approx. 15cm diameter) and large size (approx. 20cm diameter). Packs are available in 10-piece, 25-piece, and bulk (100+) options. Custom sizes for large yagyas are available on request.',
  },
  {
    q: 'Havan ke liye gobar upla kaise use karein?',
    qHindi: 'हवन के लिए गोबर उपला कैसे उपयोग करें?',
    a: 'Place 2–3 cow dung cakes at the base of the havan kund along with dried mango wood (samidha). Light with a cotton wick and ghee. The slow, steady burn of cow dung cakes creates the ideal heat for havan and produces purifying, aromatic smoke. They are far superior to regular firewood for ritual fire.',
  },
  {
    q: 'Kya gobar upla eco-friendly hai?',
    qHindi: 'क्या गोबर उपला इको-फ्रेंडली है?',
    a: 'Yes, cow dung cakes are 100% natural and biodegradable. They produce less smoke than wood, reduce carbon emissions, and the ash can be used as organic fertilizer. Using gobar upla instead of firewood helps protect forests and is a traditional, sustainable practice endorsed by Vedic scriptures.',
  },
  {
    q: 'Events aur mandir ke liye bulk gobar upla milta hai?',
    qHindi: 'इवेंट्स और मंदिर के लिए बल्क गोबर उपला मिलता है?',
    a: 'Yes, we supply bulk cow dung cakes for Navratri yagyas, Ram Navami events, weddings, and daily temple rituals in and around Ayodhya. For orders of 100 pieces and above, we offer special pricing and guaranteed delivery. WhatsApp us with the date and quantity.',
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
    { '@type': 'ListItem', position: 3, name: 'Cow Dung Cake Ayodhya', item: 'https://vedicheritage.in/cow-dung-cake-ayodhya' },
  ],
};

const benefits = [
  { icon: '🐄', title: 'Desi Gau Based', desc: 'Made only from indigenous (desi) cow dung, not buffalo' },
  { icon: '🌱', title: 'Eco-Friendly', desc: '100% natural, biodegradable, zero chemicals' },
  { icon: '🔥', title: 'Havan Perfect', desc: 'Slow, steady burn ideal for rituals and havan kund' },
  { icon: '💨', title: 'Less Smoke', desc: 'Purifying, minimal smoke compared to regular firewood' },
  { icon: '🌾', title: 'Ash as Fertilizer', desc: 'Residual ash is rich organic fertilizer for farms' },
  { icon: '💰', title: 'Affordable', desc: 'Budget-friendly packs for homes and large events alike' },
];

const packs = [
  { name: 'Home Pack', weight: '10 pieces', bestFor: 'Home havan and daily puja', wa: 'Gobar Upla 10 pieces' },
  { name: 'Event Pack', weight: '25 pieces', bestFor: 'Small events and weekly rituals', wa: 'Gobar Upla 25 pieces' },
  { name: 'Bulk / Temple Pack', weight: '100+ pieces', bestFor: 'Temples, yagyas, large events', wa: 'Gobar Upla bulk 100+ pieces' },
];

const serviceAreas = ['Ayodhya', 'Faizabad', 'Bikapur', 'Sohawal', 'Milkipur', 'Rudauli', 'Maya Bazar', 'Tanda', 'Akbarpur', 'Sohratgarh', 'Nawabganj', 'Tarabganj', 'Goshainganj', 'Kumarganj', 'Masaudha'];

const relatedProducts = [
  { title: 'Havan Samagri', titleHindi: 'हवन सामग्री', badge: 'Pure', slug: 'havan-samagri-ayodhya', price: 250, unit: 'kg' },
  { title: 'Hawan Wood Sticks', titleHindi: 'हवन समिधा', badge: 'Authentic', slug: 'hawan-wood-sticks-ayodhya', price: 150, unit: 'bundle' },
  { title: 'Bulk Order', titleHindi: 'थोक ऑर्डर', badge: 'Best Value', slug: 'bulk-inquiry', inquiryBased: true as const },
];

const WA_ORDER = `https://wa.me/919999999999?text=${encodeURIComponent('नमस्ते! मुझे गाय का गोबर उपला चाहिए। कृपया price और availability बताएं।')}`;

function WaIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function CowDungCakePage() {
  return (
    <>
      <JsonLd schema={productSchema as Record<string, unknown>} />
      <JsonLd schema={faqSchema as Record<string, unknown>} />
      <JsonLd schema={breadcrumbSchema as Record<string, unknown>} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <BreadcrumbList crumbs={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Cow Dung Cake Ayodhya' }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <div className="inline-flex items-center bg-deepGreen/10 border border-deepGreen/20 text-deepGreen text-[11px] font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full mb-5">
                🌱 PURE DESI COW — AYODHYA
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-deepGreen leading-[1.1] tracking-tight">
                Cow Dung Cake
                <br /><span className="text-ochre">(Gobar Upla) in Ayodhya</span>
              </h1>
              <p className="text-gray-400 text-sm mt-2 font-devanagari leading-relaxed">
                गाय का गोबर उपला — अयोध्या
              </p>
              <p className="text-gray-700 text-base mt-5 leading-relaxed max-w-lg">
                Pure desi cow dung cakes for havan, puja, and eco-friendly use. Sun-dried
                naturally, free of chemicals — ideal for home rituals and large temple events
                in Ayodhya.
              </p>
              <p className="text-gray-400 text-sm mt-2 font-devanagari leading-relaxed">
                शुद्ध देसी गाय के गोबर से बने उपले — हवन, पूजा और इको-फ्रेंडली उपयोग के लिए।
                प्राकृतिक रूप से सूखाए गए, बिना किसी रसायन के।
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
                {['Desi Cow Only', 'Eco-Friendly', 'Bulk for Events'].map((t) => (
                  <div key={t} className="flex items-center gap-1.5 text-sm text-deepGreen font-semibold">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 sm:w-80 lg:w-[400px]">
                <div className="absolute -top-3 -right-3 z-10 bg-deepGreen text-white text-[10px] font-black tracking-wide uppercase px-3 py-1.5 rounded-full shadow-md">Pure Desi Cow</div>
                <div className="aspect-square bg-sage rounded-2xl border border-deepGreen/10 shadow-xl flex flex-col items-center justify-center gap-3">
                  <div className="text-8xl">🌾</div>
                  <div className="text-center px-6">
                    <p className="text-deepGreen font-black text-lg">Gobar Upla</p>
                    <p className="text-gray-400 text-sm font-devanagari mt-1">गोबर उपला</p>
                    <p className="text-gray-400 text-xs mt-3">Pack of 10 / 25 / 100+ &nbsp;|&nbsp; Bulk Available</p>
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
            Cow Dung Cakes in Ayodhya — Pure Desi Gau Gobar Upla for Havan and Puja
          </h2>
          <p className="text-gray-400 text-sm font-devanagari mb-6">
            अयोध्या में गोबर उपला — हवन और पूजा के लिए शुद्ध देसी गाय का गोबर
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Cow dung cakes, known as gobar upla or kanda in Hindi, are one of the most sacred and
            eco-friendly fuel sources in Vedic tradition. In Ayodhya — a city deeply rooted in
            Hindu spiritual practice — demand for pure, authentic gobar upla has grown significantly,
            especially with the expansion of ritual activities around the Ram Mandir. Vedic Heritage
            supplies cow dung cakes made exclusively from the dung of indigenous (desi) Gir, Sahiwal,
            and Haryanvi cows, never from buffalo or hybrid breeds, ensuring the highest spiritual
            and practical quality.
          </p>
          <p className="text-gray-500 text-sm font-devanagari leading-relaxed mb-8">
            गोबर उपला (कंडे) वैदिक परंपरा में सबसे पवित्र और पर्यावरण-अनुकूल ईंधन स्रोतों में
            से एक है। वैदिक हेरिटेज केवल देसी गाय के गोबर से बने उपले की आपूर्ति करता है —
            भैंस या संकर नस्लों के गोबर से नहीं।
          </p>

          <h3 className="text-xl font-bold text-deepGreen mt-8 mb-3">
            Why Desi Cow Gobar Upla is Superior for Havan in Ayodhya
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            According to Ayurvedic and Vedic texts, the dung of indigenous cows contains natural
            antiseptic, antibiotic, and atmospheric-purifying properties that buffalo dung simply
            does not possess. When burned in a havan kund, genuine desi cow dung cakes release
            bio-active compounds including phenols, indoles, and volatile fatty acids that have
            been scientifically shown to reduce airborne pathogens. The smoke produced has a
            distinctly different quality — less acrid, more aromatic, and spiritually considered
            more potent for prayer and offering. This is why Vedic Ayodhya temples and yagyas
            specifically request desi cow gobar upla, not just any cow dung cake.
          </p>
          <p className="text-gray-500 text-sm font-devanagari leading-relaxed mb-8">
            आयुर्वेदिक और वैदिक ग्रंथों के अनुसार, देसी गाय के गोबर में प्राकृतिक एंटीसेप्टिक,
            एंटीबायोटिक और वायुमंडल-शुद्धिकरण गुण होते हैं। हवन कुंड में जलाने पर, असली
            देसी गाय के उपले बायो-एक्टिव यौगिक छोड़ते हैं जो हवाई रोगजनकों को कम करते हैं।
          </p>

          <h3 className="text-xl font-bold text-deepGreen mt-8 mb-3">
            Eco-Friendly and Traditional — Cow Dung Cakes for Sustainable Living in Ayodhya
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beyond ritual use, gobar upla has practical eco-friendly applications. They are an
            excellent substitute for coal or firewood in rural cooking, producing consistent heat
            with far lower carbon emissions. The ash left after burning is rich in calcium, potash,
            and phosphorus — an excellent organic fertilizer for crops and kitchen gardens. In
            Ayodhya and surrounding farming villages like Bikapur, Sohawal, and Milkipur, many
            progressive farmers are reviving the traditional use of cow dung cakes as part of
            a zero-waste, sustainable farming cycle.
          </p>

          <h2 className="text-3xl font-black text-deepGreen mt-10 mb-3">
            Bulk Gobar Upla Supply for Temples and Events in Ayodhya
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vedic Heritage is a trusted bulk supplier of cow dung cakes for temple committees,
            event organizers, and households across Ayodhya and Faizabad district. For major
            festivals like Navratri, Ram Navami, Diwali, and Makar Sankranti, we pre-stock large
            quantities to meet demand. Our cakes are uniform in size, fully sun-dried, and
            packaged in jute sacks for easy transport. Orders above 100 pieces receive priority
            delivery and are guaranteed to arrive before your event date.
          </p>
          <p className="text-gray-500 text-sm font-devanagari leading-relaxed">
            वैदिक हेरिटेज मंदिर समितियों, इवेंट आयोजकों और अयोध्या तथा फैजाबाद जिले के
            परिवारों के लिए गोबर उपले का एक विश्वसनीय थोक आपूर्तिकर्ता है।
            100 से अधिक उपलों के ऑर्डर को प्राथमिकता डिलीवरी मिलती है।
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-sage/40 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-deepGreen">Benefits of Our Desi Cow Dung Cakes</h2>
            <p className="text-gray-400 text-sm mt-1.5 font-devanagari">देसी गाय के गोबर उपले के फायदे</p>
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
            <h2 className="text-3xl sm:text-4xl font-black text-deepGreen">Gobar Upla Pack Options in Ayodhya</h2>
            <p className="text-gray-400 text-sm mt-1.5 font-devanagari">उपलब्ध पैक आकार</p>
          </div>
          <div className="hidden sm:grid grid-cols-4 bg-deepGreen text-white text-xs font-bold uppercase tracking-widest rounded-xl px-5 py-3 gap-4 mb-2">
            <span>Pack</span><span>Quantity</span><span>Best For</span><span></span>
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
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">Gobar Upla Delivery Areas — Ayodhya Region</h2>
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
          <FaqSection faqs={faqs} heading="Cow Dung Cake FAQs — Ayodhya" headingHindi="अक्सर पूछे जाने वाले सवाल" />
        </div>
      </section>

      {/* Inquiry */}
      <section className="bg-deepGreen/95 py-14 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 border border-white/20 text-white/80 text-[11px] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full mb-5">PLACE YOUR ORDER</div>
          <h2 className="text-3xl font-black text-white mb-2">Order Gobar Upla in Ayodhya</h2>
          <p className="text-white/55 text-sm mb-8 font-devanagari">गोबर उपला ऑर्डर करें — हम 24 घंटे में जवाब देते हैं</p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 text-left">
            <InquiryForm defaultProduct="Cow Dung Cake" />
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
