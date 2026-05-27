import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import BreadcrumbList from '@/components/BreadcrumbList';
import FaqSection, { type FaqItem } from '@/components/FaqSection';
import InquiryForm from '@/components/InquiryForm';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Cattle Feed Dealer in Ayodhya & Faizabad | Vedic Heritage | Bulk Supply',
  description:
    'Trusted cattle feed dealer in Ayodhya and Faizabad. Multiple brands, bulk supply, free delivery 25km. पशु आहार डीलर अयोध्या। Call or WhatsApp now.',
  alternates: { canonical: '/cattle-feed-dealer-ayodhya' },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cattle Feed — Ayodhya Dealer',
  description: 'Premium cattle feed supply in Ayodhya and Faizabad. Multiple brands, bulk rates, free delivery within 25km.',
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
    q: 'Ayodhya mein sabse accha cattle feed kaun sa hai?',
    qHindi: 'अयोध्या में सबसे अच्छा पशु आहार कौन सा है?',
    a: 'For dairy cows and buffaloes, Kapila Pashu Aahar is our top recommendation — scientifically formulated, bypass protein-rich, and proven to increase milk yield by 20–30%. For general livestock, we also supply other quality brands. WhatsApp us to get a recommendation based on your herd size and breed.',
  },
  {
    q: 'Bulk cattle feed pe kya rate milta hai Ayodhya mein?',
    qHindi: 'बल्क पशु आहार पर क्या रेट मिलता है?',
    a: 'We offer special bulk pricing for orders of 100kg and above. Dairy farms, gaushalas, and cooperative societies get dedicated rates. WhatsApp us with your requirement and we will provide a custom quotation within 1 hour.',
  },
  {
    q: 'Kahan kahan delivery hoti hai cattle feed ki?',
    qHindi: 'कहाँ-कहाँ डिलीवरी होती है पशु आहार की?',
    a: 'We deliver free within 25km of Ayodhya, covering Faizabad, Bikapur, Sohawal, Milkipur, Rudauli, Goshainganj, and more. For bulk orders above 500kg, we arrange delivery anywhere in Uttar Pradesh.',
  },
  {
    q: 'Ek gaay ko kitna cattle feed dena chahiye?',
    qHindi: 'एक गाय को कितना पशु आहार देना चाहिए?',
    a: 'A standard dairy cow requires 1–2 kg of concentrated cattle feed per day alongside roughage (green fodder, dry straw). High-yielding cows may need 3–4 kg daily. Our team can advise you based on the specific breed and milk production level.',
  },
  {
    q: 'Bhains ke liye alag feed hoti hai kya?',
    qHindi: 'भैंस के लिए अलग फ़ीड होती है क्या?',
    a: 'Buffaloes have higher energy requirements than cows. We stock feeds specifically formulated for Murrah and other buffalo breeds with higher fat content for superior milk fat output. Contact us for buffalo-specific product recommendations.',
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
    { '@type': 'ListItem', position: 3, name: 'Cattle Feed Dealer Ayodhya', item: 'https://vedicheritage.in/cattle-feed-dealer-ayodhya' },
  ],
};

const benefits = [
  { icon: '🏪', title: 'Multiple Brands', desc: 'Kapila, and other leading certified cattle feed brands' },
  { icon: '📦', title: 'Bulk Supply', desc: 'From 25kg bags to full truckloads for large farms' },
  { icon: '💰', title: 'Best Rates', desc: 'Competitive wholesale and retail pricing in Ayodhya' },
  { icon: '🚚', title: 'Free Delivery', desc: 'Free doorstep delivery within 25km of Ayodhya' },
  { icon: '🧑‍🌾', title: 'Expert Advice', desc: 'Personalized feed plans based on breed and yield' },
  { icon: '✅', title: 'Quality Tested', desc: 'Only certified, FSSAI-approved feeds stocked' },
];

const packs = [
  { name: 'Small Farm Pack', weight: '25 kg', bestFor: 'Farmers with 1–3 cattle', wa: '25kg cattle feed' },
  { name: 'Medium Farm Pack', weight: '50 kg', bestFor: 'Farms with 4–10 cattle', wa: '50kg cattle feed' },
  { name: 'Bulk Supply', weight: '100 kg+', bestFor: 'Large farms, gaushalas, dairies', wa: 'Bulk cattle feed 100kg+' },
];

const serviceAreas = ['Ayodhya', 'Faizabad', 'Bikapur', 'Sohawal', 'Milkipur', 'Rudauli', 'Maya Bazar', 'Tanda', 'Akbarpur', 'Sohratgarh', 'Nawabganj', 'Tarabganj', 'Goshainganj', 'Kumarganj', 'Masaudha'];

const relatedProducts = [
  { title: 'Kapila Pashu Aahar', titleHindi: 'कपिला पशु आहार', badge: 'Best Seller', slug: 'kapila-pashu-aahar-ayodhya', inquiryBased: true as const },
  { title: 'Havan Samagri', titleHindi: 'हवन सामग्री', badge: 'Pure', slug: 'havan-samagri-ayodhya', price: 250, unit: 'kg' },
  { title: 'Bulk Order', titleHindi: 'थोक ऑर्डर', badge: 'Best Value', slug: 'bulk-inquiry', inquiryBased: true as const },
];

const WA_ORDER = `https://wa.me/919999999999?text=${encodeURIComponent('नमस्ते! मुझे Cattle Feed चाहिए। कृपया price और availability बताएं।')}`;

function WaIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function CattleFeedDealerPage() {
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
            ✓ TRUSTED DEALER — AYODHYA & FAIZABAD
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
            Cattle Feed Dealer
            <br /><span className="text-ochre">in Ayodhya | Faizabad</span>
          </h1>
          <p className="text-white/60 text-sm mt-2 font-devanagari leading-relaxed">
            पशु आहार डीलर — अयोध्या, फैजाबाद
          </p>
          <p className="text-white/80 text-base mt-5 leading-relaxed max-w-2xl mx-auto">
            Vedic Heritage is your trusted cattle feed dealer in Ayodhya and Faizabad. We
            stock multiple premium brands, offer bulk supply, and deliver free within 25km.
          </p>
          <p className="text-white/50 text-sm mt-2 font-devanagari leading-relaxed max-w-2xl mx-auto">
            वैदिक हेरिटेज अयोध्या और फैजाबाद में आपका विश्वसनीय पशु आहार डीलर है।
            हम कई प्रीमियम ब्रांड स्टॉक करते हैं, थोक सप्लाई देते हैं और 25 किमी के भीतर मुफ्त डिलीवरी करते हैं।
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
                    Why Choose Vedic Heritage for Cattle Feed?
                  </h2>
                  <p className="text-gray-400 text-sm mt-1.5 font-devanagari">वैदिक हेरिटेज से पशु आहार क्यों खरीदें?</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {benefits.map((b) => (
                    <div key={b.title} className="bg-white border border-deepGreen/10 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md hover:border-deepGreen/30 transition-all duration-200">
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
                  title="Cattle Feed Mix"
                  titleHindi="पशु आहार मिक्स"
                  badge="Popular"
                  slug="cattle-feed-dealer-ayodhya"
                  inquiryBased={true}
                />
                <ProductCard
                  title="Kapila Pashu Aahar"
                  titleHindi="कपिला पशु आहार"
                  badge="Authorized Dealer"
                  slug="kapila-pashu-aahar-ayodhya"
                  inquiryBased={true}
                />
              </div>
            </section>

            {/* ── 5. Content ── */}
            <section className="bg-cream border border-gray-200 rounded-2xl p-6 md:p-8 pt-14 md:pt-20 pb-10 md:pb-14 space-y-10 md:space-y-14">

              {/* About */}
              <div className="border border-gray-100 rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-black text-deepGreen mb-2">
                  Cattle Feed Dealer in Ayodhya — Quality Feed for Dairy Cows and Buffaloes
                </h2>
                <p className="text-gray-400 text-sm font-devanagari mb-6">
                  अयोध्या में पशु आहार डीलर — डेयरी गाय और भैंस के लिए गुणवत्ता आहार
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Vedic Heritage has been a trusted name for cattle feed supply in Ayodhya and the wider
                  Faizabad district since 2020. We stock a carefully curated range of scientifically
                  formulated cattle feeds suited to the specific needs of dairy cows, buffaloes, and
                  mixed livestock common across the Ayodhya region. Whether you are a small farmer with
                  two or three cattle or a large gaushala managing hundreds of animals, we have the right
                  feed and the right quantities for your operation.
                </p>
                <p className="text-gray-500 text-sm font-devanagari leading-relaxed mt-4">
                  वैदिक हेरिटेज 2020 से अयोध्या और फैजाबाद जिले में पशु आहार की आपूर्ति में एक
                  विश्वसनीय नाम रहा है। हम वैज्ञानिक रूप से तैयार पशु आहार की एक सावधानीपूर्वक
                  चुनी हुई रेंज स्टॉक करते हैं।
                </p>
              </div>

              {/* Types of Feed */}
              <div className="bg-cream/40 border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-black text-deepGreen mb-4">
                  Types of Cattle Feed Available
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our product range includes concentrated dairy cattle feeds (daaney/pellets), bypass
                  protein supplements, mineral mixtures, cotton seed cake, de-oiled rice bran, and
                  complete ration mixes. Our flagship product, Kapila Pashu Aahar, is an all-in-one
                  formulated feed that delivers balanced nutrition in a single bag — ideal for farmers
                  who want simplicity and proven results. We also stock specialty buffalo feeds with
                  higher fat-producing ingredients for the Murrah and Surti breeds commonly found in
                  the Ayodhya and Barabanki region.
                </p>
              </div>

              {/* Why Quality */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-black text-deepGreen mb-4">
                  Why Quality Cattle Feed Matters
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The quality of cattle feed directly determines milk yield, fat percentage, and the
                  long-term reproductive health of dairy animals. Substandard or adulterated feeds are
                  unfortunately common in many local markets and can cause digestive disorders, reduced
                  fertility, and even early culling of animals. At Vedic Heritage, every brand we stock
                  is sourced from FSSAI-registered manufacturers with certified nutritional profiles.
                  We never compromise on quality — and our repeat customers across Bikapur, Sohawal,
                  Milkipur, and surrounding areas are a testament to that commitment.
                </p>
                <p className="text-gray-500 text-sm font-devanagari leading-relaxed mt-4">
                  पशु आहार की गुणवत्ता सीधे दूध उत्पादन, वसा प्रतिशत और डेयरी पशुओं के दीर्घकालिक
                  प्रजनन स्वास्थ्य को निर्धारित करती है। वैदिक हेरिटेज में, हम जो भी ब्रांड स्टॉक
                  करते हैं वे FSSAI-पंजीकृत निर्माताओं से प्रमाणित पोषण प्रोफाइल के साथ आते हैं।
                </p>
              </div>

              {/* Bulk Supply */}
              <div className="bg-cream/40 border border-gray-100 rounded-2xl p-6 md:p-8">
                <h2 className="text-3xl font-black text-deepGreen mb-4">
                  Bulk Cattle Feed Supply — Gaushalas and Dairy Farms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We specialise in bulk cattle feed supply for gaushalas, registered dairy societies,
                  and large private dairy farms across Ayodhya district. Our bulk pricing is among the
                  most competitive in the region, and we offer flexible ordering — you can start with
                  25kg bags and scale to full pallet deliveries as your needs grow. For standing orders
                  (monthly subscriptions), we offer priority delivery and locked-in rates, ensuring you
                  never face stock shortages during peak seasons.
                </p>
                <p className="text-gray-500 text-sm font-devanagari leading-relaxed mt-4">
                  हम अयोध्या जिले की गौशालाओं, पंजीकृत डेयरी सोसाइटियों और बड़े निजी डेयरी
                  फार्मों के लिए थोक पशु आहार आपूर्ति में विशेषज्ञ हैं। हमारी थोक कीमत क्षेत्र
                  में सबसे प्रतिस्पर्धी है।
                </p>
              </div>

              {/* Service Areas */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-black text-deepGreen mb-4">
                  Serving Farmers Across Ayodhya, Faizabad, Bikapur and Beyond
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our delivery network covers all major cattle-farming areas in the Ayodhya and Faizabad
                  belt, including Bikapur, Sohawal, Milkipur, Rudauli, Goshainganj, Kumarganj, and
                  Masaudha. Call or WhatsApp us to check availability and get same-day or next-day
                  delivery for most areas within 25km of Ayodhya city.
                </p>
              </div>

            </section>

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Contact Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="text-xs font-bold text-deepGreen/70 uppercase tracking-widest mb-1">Trusted Dealer</p>
                <h3 className="font-black text-deepGreen text-xl mb-1">Cattle Feed</h3>
                <p className="text-gray-400 text-sm font-devanagari mb-5">पशु आहार — अयोध्या</p>

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
                    href="tel:+919999999999"
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
                    { label: 'Multiple Brands', icon: '✓' },
                    { label: 'Bulk Supply', icon: '✓' },
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
                  Order Cattle Feed in Ayodhya
                </h3>
                <p className="text-white/55 text-xs mb-5 font-devanagari">
                  पशु आहार ऑर्डर करें
                </p>
                <InquiryForm defaultProduct="Cattle Feed Mix" />
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Service Areas */}
      <section className="bg-deepGreen py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">Cattle Feed Delivery Areas — Ayodhya Region</h2>
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqSection faqs={faqs} heading="Cattle Feed FAQs — Ayodhya Farmers" headingHindi="अक्सर पूछे जाने वाले सवाल" />
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
