import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import BreadcrumbList from '@/components/BreadcrumbList';
import FaqSection, { type FaqItem } from '@/components/FaqSection';
import InquiryForm from '@/components/InquiryForm';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Cow Dung Cake Ayodhya — Call 7840882270 | Vedic Heritage',
  description:
    'Pure desi cow dung cakes (gobar upla) from Ram ki Nagri, Ayodhya. Pan-India delivery for havan, puja & eco use. गोबर उपला अयोध्या। Call 7840882270.',
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

const WA_ORDER = `https://wa.me/919911662492?text=${encodeURIComponent('नमस्ते! मुझे गाय का गोबर उपला चाहिए। कृपया price और availability बताएं।')}`;

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
            🌱 RAM KI NAGRI SE SHUDDH SAMAGRI
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
            Cow Dung Cake Ayodhya
            <br /><span className="text-ochre">— Call 7840882270</span>
          </h1>
          <p className="text-white/60 text-sm mt-2 font-devanagari leading-relaxed">
            गाय का गोबर उपला अयोध्या — शुद्ध और प्राकृतिक
          </p>
          <p className="text-white/80 text-base mt-5 leading-relaxed max-w-2xl mx-auto">
            Pure desi cow dung cakes (gobar upla) from Ram ki Nagri, Ayodhya for havan,
            puja, and eco-friendly use. Sun-dried naturally, free of chemicals.
            Pan-India delivery available. Call 7840882270 or WhatsApp 9911662492.
          </p>
          <p className="text-white/50 text-sm mt-2 font-devanagari leading-relaxed max-w-2xl mx-auto">
            राम की नगरी अयोध्या से शुद्ध देसी गाय के गोबर उपले — हवन, पूजा और इको-फ्रेंडली उपयोग के
            लिए। पैन-इंडिया डिलीवरी उपलब्ध है।
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
                    Benefits of Our Desi Cow Dung Cakes
                  </h2>
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

            {/* ── 4. Product Cards ── */}
            <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 py-10 md:py-14">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <ProductCard
                  title="Cow Dung Cake"
                  titleHindi="गोबर उपला"
                  badge="Ram Ki Nagri"
                  slug="cow-dung-cake-ayodhya"
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
                  Cow Dung Cakes in Ayodhya — Pure Desi Gau Gobar Upla for Havan and Puja
                </h2>
                <p className="text-gray-400 text-sm font-devanagari mb-6">
                  अयोध्या में गोबर उपला — हवन और पूजा के लिए शुद्ध देसी गाय का गोबर
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Cow dung cakes, known as gobar upla or kanda in Hindi, are one of the most sacred and
                  eco-friendly fuel sources in Vedic tradition. In Ayodhya — a city deeply rooted in
                  Hindu spiritual practice — demand for pure, authentic gobar upla has grown significantly,
                  especially with the expansion of ritual activities around the Ram Mandir. Vedic Heritage
                  supplies cow dung cakes made exclusively from the dung of indigenous (desi) Gir, Sahiwal,
                  and Haryanvi cows, never from buffalo or hybrid breeds, ensuring the highest spiritual
                  and practical quality.
                </p>
                <p className="text-gray-500 text-sm font-devanagari leading-relaxed mt-4">
                  गोबर उपला (कंडे) वैदिक परंपरा में सबसे पवित्र और पर्यावरण-अनुकूल ईंधन स्रोतों में
                  से एक है। वैदिक हेरिटेज केवल देसी गाय के गोबर से बने उपले की आपूर्ति करता है —
                  भैंस या संकर नस्लों के गोबर से नहीं।
                </p>
              </div>

              {/* Why Superior */}
              <div className="bg-cream/40 border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-black text-deepGreen mb-4">
                  Why Desi Cow Gobar Upla is Superior for Havan
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  According to Ayurvedic and Vedic texts, the dung of indigenous cows contains natural
                  antiseptic, antibiotic, and atmospheric-purifying properties that buffalo dung simply
                  does not possess. When burned in a havan kund, genuine desi cow dung cakes release
                  bio-active compounds including phenols, indoles, and volatile fatty acids that have
                  been scientifically shown to reduce airborne pathogens. The smoke produced has a
                  distinctly different quality — less acrid, more aromatic, and spiritually considered
                  more potent for prayer and offering. This is why Vedic Ayodhya temples and yagyas
                  specifically request desi cow gobar upla, not just any cow dung cake.
                </p>
                <p className="text-gray-500 text-sm font-devanagari leading-relaxed mt-4">
                  आयुर्वेदिक और वैदिक ग्रंथों के अनुसार, देसी गाय के गोबर में प्राकृतिक एंटीसेप्टिक,
                  एंटीबायोटिक और वायुमंडल-शुद्धिकरण गुण होते हैं। हवन कुंड में जलाने पर, असली
                  देसी गाय के उपले बायो-एक्टिव यौगिक छोड़ते हैं जो हवाई रोगजनकों को कम करते हैं।
                </p>
              </div>

              {/* Eco-Friendly */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-black text-deepGreen mb-4">
                  Eco-Friendly and Traditional — Sustainable Living in Ayodhya
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Beyond ritual use, gobar upla has practical eco-friendly applications. They are an
                  excellent substitute for coal or firewood in rural cooking, producing consistent heat
                  with far lower carbon emissions. The ash left after burning is rich in calcium, potash,
                  and phosphorus — an excellent organic fertilizer for crops and kitchen gardens. In
                  Ayodhya and surrounding farming villages like Bikapur, Sohawal, and Milkipur, many
                  progressive farmers are reviving the traditional use of cow dung cakes as part of
                  a zero-waste, sustainable farming cycle.
                </p>
              </div>

              {/* Bulk Supply */}
              <div className="bg-cream/40 border border-gray-100 rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-black text-deepGreen mb-4">
                  Bulk Gobar Upla Supply for Temples and Events
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Vedic Heritage is a trusted bulk supplier of cow dung cakes for temple committees,
                  event organizers, and households across Ayodhya and Faizabad district. For major
                  festivals like Navratri, Ram Navami, Diwali, and Makar Sankranti, we pre-stock large
                  quantities to meet demand. Our cakes are uniform in size, fully sun-dried, and
                  packaged in jute sacks for easy transport. Orders above 100 pieces receive priority
                  delivery and are guaranteed to arrive before your event date.
                </p>
                <p className="text-gray-500 text-sm font-devanagari leading-relaxed mt-4">
                  वैदिक हेरिटेज मंदिर समितियों, इवेंट आयोजकों और अयोध्या तथा फैजाबाद जिले के
                  परिवारों के लिए गोबर उपले का एक विश्वसनीय थोक आपूर्तिकर्ता है।
                  100 से अधिक उपलों के ऑर्डर को प्राथमिकता डिलीवरी मिलती है।
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
                <h3 className="font-black text-deepGreen text-xl mb-1">Cow Dung Cake</h3>
                <p className="text-gray-400 text-sm font-devanagari mb-5">गोबर उपला — अयोध्या</p>

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
                    { label: 'Desi Cow Only', icon: '✓' },
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
                  Order Gobar Upla in Ayodhya
                </h3>
                <p className="text-white/55 text-xs mb-5 font-devanagari">
                  गोबर उपला ऑर्डर करें
                </p>
                <InquiryForm defaultProduct="Cow Dung Cake" />
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
          <FaqSection faqs={faqs} heading="Cow Dung Cake FAQs — Ayodhya" headingHindi="अक्सर पूछे जाने वाले सवाल" />
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
