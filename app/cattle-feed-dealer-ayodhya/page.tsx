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

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <BreadcrumbList crumbs={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'Cattle Feed Dealer Ayodhya' }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <div className="inline-flex items-center bg-deepGreen/10 border border-deepGreen/20 text-deepGreen text-[11px] font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full mb-5">
                ✓ TRUSTED DEALER — AYODHYA & FAIZABAD
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-deepGreen leading-[1.1] tracking-tight">
                Cattle Feed Dealer
                <br /><span className="text-ochre">in Ayodhya | Faizabad</span>
              </h1>
              <p className="text-gray-400 text-sm mt-2 font-devanagari leading-relaxed">
                पशु आहार डीलर — अयोध्या, फैजाबाद
              </p>
              <p className="text-gray-700 text-base mt-5 leading-relaxed max-w-lg">
                Vedic Heritage is your trusted cattle feed dealer in Ayodhya and Faizabad. We
                stock multiple premium brands, offer bulk supply, and deliver free within 25km.
              </p>
              <p className="text-gray-400 text-sm mt-2 font-devanagari leading-relaxed">
                वैदिक हेरिटेज अयोध्या और फैजाबाद में आपका विश्वसनीय पशु आहार डीलर है।
                हम कई प्रीमियम ब्रांड स्टॉक करते हैं, थोक सप्लाई देते हैं और 25 किमी के भीतर मुफ्त डिलीवरी करते हैं।
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
                {['Multiple Brands', 'Bulk Supply', 'Free Delivery 25km'].map((t) => (
                  <div key={t} className="flex items-center gap-1.5 text-sm text-deepGreen font-semibold">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 sm:w-80 lg:w-[400px]">
                <div className="absolute -top-3 -right-3 z-10 bg-deepGreen text-white text-[10px] font-black tracking-wide uppercase px-3 py-1.5 rounded-full shadow-md">Bulk Available</div>
                <div className="aspect-square bg-sage rounded-2xl border border-deepGreen/10 shadow-xl flex flex-col items-center justify-center gap-3">
                  <div className="text-8xl">🌾</div>
                  <div className="text-center px-6">
                    <p className="text-deepGreen font-black text-lg">Cattle Feed</p>
                    <p className="text-gray-400 text-sm font-devanagari mt-1">पशु आहार</p>
                    <p className="text-gray-400 text-xs mt-3">Multiple Brands &nbsp;|&nbsp; Bulk Rates</p>
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
            Cattle Feed Dealer in Ayodhya — Quality Feed for Dairy Cows and Buffaloes
          </h2>
          <p className="text-gray-400 text-sm font-devanagari mb-6">
            अयोध्या में पशु आहार डीलर — डेयरी गाय और भैंस के लिए गुणवत्ता आहार
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vedic Heritage has been a trusted name for cattle feed supply in Ayodhya and the wider
            Faizabad district since 2020. We stock a carefully curated range of scientifically
            formulated cattle feeds suited to the specific needs of dairy cows, buffaloes, and
            mixed livestock common across the Ayodhya region. Whether you are a small farmer with
            two or three cattle or a large gaushala managing hundreds of animals, we have the right
            feed and the right quantities for your operation.
          </p>
          <p className="text-gray-500 text-sm font-devanagari leading-relaxed mb-8">
            वैदिक हेरिटेज 2020 से अयोध्या और फैजाबाद जिले में पशु आहार की आपूर्ति में एक
            विश्वसनीय नाम रहा है। हम वैज्ञानिक रूप से तैयार पशु आहार की एक सावधानीपूर्वक
            चुनी हुई रेंज स्टॉक करते हैं।
          </p>

          <h3 className="text-xl font-bold text-deepGreen mt-8 mb-3">
            Types of Cattle Feed Available at Our Ayodhya Store
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our product range includes concentrated dairy cattle feeds (daaney/pellets), bypass
            protein supplements, mineral mixtures, cotton seed cake, de-oiled rice bran, and
            complete ration mixes. Our flagship product, Kapila Pashu Aahar, is an all-in-one
            formulated feed that delivers balanced nutrition in a single bag — ideal for farmers
            who want simplicity and proven results. We also stock specialty buffalo feeds with
            higher fat-producing ingredients for the Murrah and Surti breeds commonly found in
            the Ayodhya and Barabanki region.
          </p>

          <h3 className="text-xl font-bold text-deepGreen mt-8 mb-3">
            Why Quality Cattle Feed Matters for Dairy Farmers in Faizabad and Ayodhya
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The quality of cattle feed directly determines milk yield, fat percentage, and the
            long-term reproductive health of dairy animals. Substandard or adulterated feeds are
            unfortunately common in many local markets and can cause digestive disorders, reduced
            fertility, and even early culling of animals. At Vedic Heritage, every brand we stock
            is sourced from FSSAI-registered manufacturers with certified nutritional profiles.
            We never compromise on quality — and our repeat customers across Bikapur, Sohawal,
            Milkipur, and surrounding areas are a testament to that commitment.
          </p>
          <p className="text-gray-500 text-sm font-devanagari leading-relaxed mb-8">
            पशु आहार की गुणवत्ता सीधे दूध उत्पादन, वसा प्रतिशत और डेयरी पशुओं के दीर्घकालिक
            प्रजनन स्वास्थ्य को निर्धारित करती है। वैदिक हेरिटेज में, हम जो भी ब्रांड स्टॉक
            करते हैं वे FSSAI-पंजीकृत निर्माताओं से प्रमाणित पोषण प्रोफाइल के साथ आते हैं।
          </p>

          <h2 className="text-3xl font-black text-deepGreen mt-10 mb-3">
            Bulk Cattle Feed Supply — Ayodhya Gaushalas and Dairy Farms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We specialise in bulk cattle feed supply for gaushalas, registered dairy societies,
            and large private dairy farms across Ayodhya district. Our bulk pricing is among the
            most competitive in the region, and we offer flexible ordering — you can start with
            25kg bags and scale to full pallet deliveries as your needs grow. For standing orders
            (monthly subscriptions), we offer priority delivery and locked-in rates, ensuring you
            never face stock shortages during peak seasons.
          </p>
          <p className="text-gray-500 text-sm font-devanagari leading-relaxed mb-6">
            हम अयोध्या जिले की गौशालाओं, पंजीकृत डेयरी सोसाइटियों और बड़े निजी डेयरी
            फार्मों के लिए थोक पशु आहार आपूर्ति में विशेषज्ञ हैं। हमारी थोक कीमत क्षेत्र
            में सबसे प्रतिस्पर्धी है।
          </p>

          <h3 className="text-xl font-bold text-deepGreen mt-8 mb-3">
            Serving Cattle Farmers Across Ayodhya, Faizabad, Bikapur and Beyond
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our delivery network covers all major cattle-farming areas in the Ayodhya and Faizabad
            belt, including Bikapur, Sohawal, Milkipur, Rudauli, Goshainganj, Kumarganj, and
            Masaudha. Call or WhatsApp us to check availability and get same-day or next-day
            delivery for most areas within 25km of Ayodhya city.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-sage/40 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-deepGreen">Why Choose Vedic Heritage for Cattle Feed?</h2>
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

      {/* Packs */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-deepGreen">Cattle Feed Pack Sizes Available in Ayodhya</h2>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqSection faqs={faqs} heading="Cattle Feed FAQs — Ayodhya Farmers" headingHindi="अक्सर पूछे जाने वाले सवाल" />
        </div>
      </section>

      {/* Inquiry */}
      <section className="bg-deepGreen/95 py-14 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 border border-white/20 text-white/80 text-[11px] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full mb-5">PLACE YOUR ORDER</div>
          <h2 className="text-3xl font-black text-white mb-2">Order Cattle Feed in Ayodhya</h2>
          <p className="text-white/55 text-sm mb-8 font-devanagari">पशु आहार ऑर्डर करें — हम 24 घंटे में जवाब देते हैं</p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 text-left">
            <InquiryForm defaultProduct="Cattle Feed Mix" />
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
