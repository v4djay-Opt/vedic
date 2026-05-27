import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import FaqSection, { type FaqItem } from '@/components/FaqSection';
import InquiryForm from '@/components/InquiryForm';

export const metadata: Metadata = {
  title: 'Puja Samagri Ayodhya — Havan, Gobar Upla, Samidha | Call 7840882270',
  description:
    'Pure puja samagri from Ram ki Nagri, Ayodhya. Havan samagri, cow dung cakes, hawan wood sticks. Pan-India delivery. Call 7840882270 or WhatsApp 9911662492.',
  alternates: { canonical: '/puja-products' },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Havan Samagri', url: 'https://vedicheritage.in/havan-samagri-ayodhya' },
    { '@type': 'ListItem', position: 2, name: 'Cow Dung Cake', url: 'https://vedicheritage.in/cow-dung-cake-ayodhya' },
    { '@type': 'ListItem', position: 3, name: 'Hawan Wood Sticks', url: 'https://vedicheritage.in/hawan-wood-sticks-ayodhya' },
  ],
};

const pujaItems = [
  {
    name: 'Havan Samagri',
    nameHindi: 'हवन सामग्री',
    desc: 'Pure Vedic havan samagri prepared with sacred herbs and ghee-ready ingredients from Ayodhya.',
    slug: 'havan-samagri-ayodhya',
    badge: 'Pure',
    sizes: ['500 g', '1 kg'],
  },
  {
    name: 'Cow Dung Cake',
    nameHindi: 'गोबर उपला',
    desc: 'Desi cow dung cakes (gobar upla) for havan, puja, and traditional cooking. Natural and eco-friendly.',
    slug: 'cow-dung-cake-ayodhya',
    badge: 'Natural',
    sizes: ['Pack of 10', 'Pack of 25'],
  },
  {
    name: 'Hawan Wood Sticks',
    nameHindi: 'हवन समिधा',
    desc: 'Sacred mango and mixed wood sticks (samidha) for temple havan and daily puja rituals.',
    slug: 'hawan-wood-sticks-ayodhya',
    badge: 'Authentic',
    sizes: ['250 g', '500 g'],
  },
];

const faqs: FaqItem[] = [
  {
    q: 'Ayodhya ki havan samagri mein kya hota hai?',
    qHindi: 'अयोध्या की हवन सामग्री में क्या होता है?',
    a: 'Our havan samagri from Ayodhya contains a sacred blend of dried herbs (jadi-booti), ghee-ready pellets, sandalwood powder, rose petals, camphor, and natural resins. Each ingredient is sourced locally from trusted suppliers in the Ram ki Nagri region.',
  },
  {
    q: 'Pan-India delivery available hai?',
    qHindi: 'पैन-इंडिया डिलीवरी उपलब्ध है?',
    a: 'Yes, we offer pan-India delivery for all puja products. Whether you are in Delhi, Mumbai, Bengaluru, or any corner of India, we can ship havan samagri, cow dung cakes, and hawan wood sticks to your doorstep. Call 7840882270 or WhatsApp 9911662492 to place your order.',
  },
  {
    q: 'Gobar upla ka use kya hai?',
    qHindi: 'गोबर उपले का उपयोग क्या है?',
    a: 'Cow dung cakes (gobar upla) are used in havan, yagna, and traditional Indian cooking. They burn clean with a pleasant earthy aroma and are considered sacred in Vedic rituals. Our gobar upla are made from desi cow dung and sun-dried naturally in Ayodhya.',
  },
  {
    q: 'Order kaise place karein?',
    qHindi: 'ऑर्डर कैसे प्लेस करें?',
    a: 'You can place an order by calling 7840882270 or messaging us on WhatsApp at 9911662492. Tell us the product, quantity, and your delivery address. We will confirm availability, pricing, and estimated delivery time. Payment accepted via UPI, bank transfer, or cash on delivery for local orders.',
  },
  {
    q: 'Delivery kitne din mein aati hai?',
    qHindi: 'डिलीवरी कितने दिन में आती है?',
    a: 'For orders within Uttar Pradesh, delivery typically takes 2–4 days. For other states, delivery takes 4–7 days depending on courier service to your pincode. We ship via trusted courier partners to ensure your puja samagri reaches you safely.',
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

export default function PujaProductsPage() {
  return (
    <>
      <JsonLd schema={productSchema as Record<string, unknown>} />
      <JsonLd schema={faqSchema as Record<string, unknown>} />

      {/* Hero Banner */}
      <section className="relative bg-deepGreen -mt-24 pt-24 flex items-center h-[55vh] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute -top-20 -right-20 w-80 h-80 text-white/5" viewBox="0 0 200 200" fill="currentColor">
            <circle cx="100" cy="100" r="100" />
          </svg>
          <svg className="absolute top-1/3 -left-12 w-48 h-48 text-white/5" viewBox="0 0 200 200" fill="currentColor">
            <ellipse cx="100" cy="100" rx="100" ry="70" />
          </svg>
          <svg className="absolute bottom-8 right-8 w-32 h-32 text-white/10" viewBox="0 0 100 100">
            <circle cx="20" cy="20" r="8" /><circle cx="50" cy="20" r="8" /><circle cx="80" cy="20" r="8" />
            <circle cx="20" cy="50" r="8" /><circle cx="50" cy="50" r="8" /><circle cx="80" cy="50" r="8" />
            <circle cx="20" cy="80" r="8" /><circle cx="50" cy="80" r="8" /><circle cx="80" cy="80" r="8" />
          </svg>
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 border border-white/20 text-white/90 text-[11px] font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full mb-5">
            🔥 RAM KI NAGRI SE SHUDDH SAMAGRI
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
            Puja Samagri Ayodhya — Call 7840882270
          </h1>
          <p className="text-white/60 text-sm mt-2 font-devanagari leading-relaxed">
            पूजा सामग्री अयोध्या — राम की नगरी से शुद्ध सामग्री
          </p>
          <p className="text-white/80 text-base mt-5 leading-relaxed max-w-2xl mx-auto">
            Pure puja samagri sourced from Ram ki Nagri, Ayodhya. Havan samagri, cow dung cakes
            (gobar upla), and sacred hawan wood sticks (samidha) delivered across India.
          </p>
          <p className="text-white/50 text-sm mt-2 font-devanagari leading-relaxed max-w-2xl mx-auto">
            राम की नगरी अयोध्या से शुद्ध पूजा सामग्री। हवन सामग्री, गोबर उपले और पवित्र हवन लकड़ी
            पूरे भारत में डिलीवर की जाती है।
          </p>
          <div className="inline-flex items-center bg-ochre/20 border border-ochre/30 text-ochre text-xs font-bold tracking-wide uppercase px-4 py-2 rounded-full mt-5">
            🚚 PAN-INDIA DELIVERY AVAILABLE
          </div>
        </div>
      </section>

      {/* ── Content + Sidebar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 md:space-y-10">

            {/* ── Products Grid ── */}
            <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 py-10 md:py-14">
              <div className="mb-10 text-left">
                <h2 className="text-3xl sm:text-4xl font-black text-deepGreen">Our Puja Products</h2>
                <p className="text-gray-400 text-sm mt-1.5 font-devanagari">हमारी पूजा सामग्री</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {pujaItems.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/${p.slug}`}
                    className="group bg-cream border border-deepGreen/10 rounded-2xl p-6 hover:shadow-md hover:border-deepGreen/30 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-deepGreen/10 text-deepGreen text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full">
                        {p.badge}
                      </span>
                      <span className="text-2xl">🔥</span>
                    </div>
                    <p className="font-bold text-deepGreen text-base group-hover:text-ochre transition-colors">{p.name}</p>
                    <p className="text-gray-400 text-xs font-devanagari mt-0.5">{p.nameHindi}</p>
                    <p className="text-gray-500 text-sm mt-2 leading-relaxed">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {p.sizes.map((s) => (
                        <span key={s} className="bg-ochre/10 text-ochre text-[10px] font-bold px-2 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                    <p className="text-deepGreen text-xs font-semibold mt-3 flex items-center gap-1">
                      View Details →
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            {/* ── Ayodhya Connection ── */}
            <section className="bg-sage/40 border border-deepGreen/20 rounded-2xl p-6 md:p-8 py-10 md:py-14 text-center">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-black text-deepGreen mb-3">Ram ki Nagri ki Shuddhata</h2>
                <p className="text-gray-500 text-sm font-devanagari mb-6">राम की नगरी की शुद्धता</p>
                <p className="text-gray-700 text-base leading-relaxed">
                  Ayodhya, the sacred birthplace of Lord Ram, holds a special spiritual significance for
                  every Hindu. The puja samagri from this holy land carries the blessings of centuries of
                  Vedic tradition. When you perform havan with our samagri, you are connecting with the
                  same spiritual energy that has flowed through Ayodhya for thousands of years. Every
                  ingredient is carefully selected and prepared following ancient Vedic guidelines.
                </p>
                <p className="text-gray-400 text-sm mt-3 font-devanagari leading-relaxed">
                  अयोध्या, भगवान राम की पावन जन्मभूमि, हर हिंदू के लिए एक विशेष आध्यात्मिक महत्व रखती है।
                  इस पवित्र भूमि से पूजा सामग्री सदियों की वैदिक परंपरा का आशीर्वाद लेकर आती है।
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
                <h3 className="font-black text-deepGreen text-xl mb-1">Puja Samagri</h3>
                <p className="text-gray-400 text-sm font-devanagari mb-5">पूजा सामग्री — अयोध्या</p>

                <div className="space-y-3">
                  <a
                    href="https://wa.me/919911662492"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-deepGreen hover:bg-deepGreen/90 text-white font-semibold px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm w-full"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    WhatsApp pe Order Karein
                  </a>
                  <a
                    href="tel:+917840882270"
                    className="flex items-center justify-center gap-2 border-2 border-deepGreen text-deepGreen hover:bg-deepGreen hover:text-white font-semibold px-5 py-3 rounded-xl transition-all text-sm w-full"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" /></svg>
                    Call 7840882270
                  </a>
                </div>

                <div className="pt-5 mt-5 border-t border-gray-100 space-y-2.5">
                  {[
                    { label: '100% Pure', icon: '✓' },
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
                  Order Puja Samagri from Ayodhya
                </h3>
                <p className="text-white/55 text-xs mb-5 font-devanagari">
                  पूजा सामग्री ऑर्डर करें
                </p>
                <InquiryForm defaultProduct="Puja Samagri" />
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Delivery CTA */}
      <section className="bg-deepGreen py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-2">Pan-India Delivery</h2>
          <p className="text-white/60 text-sm font-devanagari mb-6">पूरे भारत में डिलीवरी</p>
          <p className="text-white/80 text-base max-w-xl mx-auto mb-6">
            We ship pure puja samagri from Ayodhya to every corner of India. Temples, households,
            and puja organizers can order with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+917840882270" className="inline-flex items-center gap-2 bg-white text-deepGreen font-bold px-6 py-3 rounded-xl hover:bg-cream transition-colors text-sm shadow-md">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" /></svg>
              Call 7840882270
            </a>
            <a href="https://wa.me/919911662492" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-deepGreen font-semibold px-6 py-3 rounded-xl transition-all text-sm">
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp 9911662492
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqSection
            faqs={faqs}
            heading="Frequently Asked Questions — Puja Samagri Ayodhya"
            headingHindi="अक्सर पूछे जाने वाले सवाल"
          />
        </div>
      </section>
    </>
  );
}
