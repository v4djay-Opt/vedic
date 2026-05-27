import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import FaqSection, { type FaqItem } from '@/components/FaqSection';

export const metadata: Metadata = {
  title: 'Bulk Pashu Aahar Order Bikapur — Call 7840882270 | Vedic Heritage',
  description:
    'Bulk cattle feed orders in Bikapur at special rates. Kapila, Bansuri, Brajwasi, Godrej, Mineral Mixture — all brands. Call 7840882270 or WhatsApp 9911662492.',
  alternates: { canonical: '/bulk-inquiry' },
};

const faqs: FaqItem[] = [
  {
    q: 'Minimum bulk order kitna hai?',
    qHindi: 'मिनिमम बल्क ऑर्डर कितना है?',
    a: 'We accept bulk orders starting from 50kg for special discounted rates. For smaller quantities, you can visit our store directly. Call 7840882270 for bulk pricing.',
  },
  {
    q: 'Kaunse brands bulk mein milte hain?',
    qHindi: 'कौन से ब्रांड्स बल्क में मिलते हैं?',
    a: 'All brands are available for bulk orders — Kapila Pashu Aahar, Bansuri Pashu Aahar, Brajwasi Feeds, Godrej Agrovet, and Mineral Mixture / Khal / Chuni. Mix and match brands for best pricing.',
  },
  {
    q: 'Bulk mein kitna discount milta hai?',
    qHindi: 'बल्क में कितना डिस्काउंट मिलता है?',
    a: 'Discounts vary by quantity and brand. Typically 50kg+ orders receive 5–10% off retail price, and 200kg+ orders receive even better rates. Contact us on WhatsApp 9911662492 for an exact quote.',
  },
  {
    q: 'Payment kaise karein?',
    qHindi: 'पेमेंट कैसे करें?',
    a: 'We accept cash at the store, UPI payments, and bank transfers for bulk orders. For very large orders, a partial advance may be required to reserve stock.',
  },
  {
    q: 'Order kaise place karein?',
    qHindi: 'ऑर्डर कैसे प्लेस करें?',
    a: 'Call 7840882270 or WhatsApp 9911662492 with your requirements. Tell us the brand, quantity, and your village name. We will confirm availability and pricing, then prepare your order for pickup at our Ramnagar, Bikapur store.',
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

const benefits = [
  { icon: '💰', title: 'Special Price', desc: '50kg+ pe best rate' },
  { icon: '📦', title: 'All Brands', desc: 'Kapila, Bansuri, Brajwasi sab' },
  { icon: '🏪', title: 'Direct from Store', desc: 'Ramnagar, Bikapur' },
  { icon: '⚡', title: 'Same Day Ready', desc: '8AM-7PM available' },
];

const WA_BULK = `https://wa.me/919911662492?text=${encodeURIComponent('नमस्ते! मुझे bulk order karna hai. Brand aur quantity batata hoon.')}`;

export default function BulkInquiryPage() {
  return (
    <>
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
            BULK ORDERS WELCOME
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
            Bulk Order — Call 7840882270
          </h1>
          <p className="text-white/60 text-sm mt-2 font-devanagari leading-relaxed">
            थोक ऑर्डर — वैदिक हेरिटेज
          </p>
          <p className="text-white/80 text-base mt-5 leading-relaxed max-w-2xl mx-auto">
            50kg se upar ke orders pe special rate milta hai. Gaushala, dairy farm, aur cooperative
            samitiyon ke liye best price guarantee. Call karein: 7840882270
          </p>
          <p className="text-white/50 text-sm mt-2 font-devanagari leading-relaxed max-w-2xl mx-auto">
            ५० किलो से ऊपर के ऑर्डर पर स्पेशल रेट। गौशाला, डेयरी फार्म और सहकारी समितियों के लिए
            बेस्ट प्राइस गारंटी।
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-7">
            <a href="tel:+917840882270" className="inline-flex items-center gap-2 bg-white hover:bg-cream text-deepGreen font-semibold px-6 py-3 rounded-xl shadow-md transition-all text-sm">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" /></svg>
              Call 7840882270
            </a>
            <a href={WA_BULK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-deepGreen font-semibold px-6 py-3 rounded-xl transition-all text-sm">
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp 9911662492
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-sage/40 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-deepGreen">Why Bulk Order?</h2>
            <p className="text-gray-400 text-sm mt-1.5 font-devanagari">थोक ऑर्डर क्यों करें?</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white border border-deepGreen/10 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md hover:border-deepGreen/30 transition-all text-center">
                <span className="text-3xl">{b.icon}</span>
                <div>
                  <p className="font-bold text-deepGreen text-sm">{b.title}</p>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed font-devanagari">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Inquiry Form */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-deepGreen">Bulk Inquiry Form</h2>
            <p className="text-gray-400 text-sm mt-1 font-devanagari">थोक ऑर्डर के लिए पूछताछ करें</p>
          </div>
          <BulkInquiryForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqSection
            faqs={faqs}
            heading="Frequently Asked Questions — Bulk Orders"
            headingHindi="अक्सर पूछे जाने वाले सवाल"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deepGreen py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Call 7840882270 for Bulk Pricing</h2>
          <p className="text-white/60 text-sm font-devanagari mb-6">थोक रेट के लिए कॉल करें</p>
          <a
            href="tel:+917840882270"
            className="inline-flex items-center gap-2 bg-white text-deepGreen font-bold px-8 py-4 rounded-xl hover:bg-cream transition-colors text-base shadow-md"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" /></svg>
            Call 7840882270
          </a>
        </div>
      </section>
    </>
  );
}

function BulkInquiryForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get('name')?.toString() ?? '';
    const phone = fd.get('phone')?.toString() ?? '';
    const area = fd.get('area')?.toString() ?? '';
    const brand = fd.get('brand')?.toString() ?? '';
    const qty = fd.get('quantity')?.toString() ?? '';
    const msg = fd.get('message')?.toString() ?? '';
    const text = encodeURIComponent(
      `नमस्ते! Bulk Order Inquiry:\nName: ${name}\nPhone: ${phone}\nArea: ${area}\nBrand: ${brand}\nQuantity: ${qty}kg\nMessage: ${msg}`
    );
    window.open(`https://wa.me/919911662492?text=${text}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-sage/30 border border-deepGreen/10 rounded-2xl p-6 sm:p-8 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-deepGreen mb-1">Name <span className="text-red-500">*</span></label>
          <input id="name" name="name" required className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-deepGreen/30 focus:border-deepGreen transition-all" placeholder="Aapka naam" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-deepGreen mb-1">Phone <span className="text-red-500">*</span></label>
          <input id="phone" name="phone" type="tel" required className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-deepGreen/30 focus:border-deepGreen transition-all" placeholder="Phone number" />
        </div>
      </div>
      <div>
        <label htmlFor="area" className="block text-sm font-semibold text-deepGreen mb-1">Village / Area</label>
        <input id="area" name="area" className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-deepGreen/30 focus:border-deepGreen transition-all" placeholder="Aapka gaon ya area" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="brand" className="block text-sm font-semibold text-deepGreen mb-1">Brand Preference</label>
          <select id="brand" name="brand" className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-deepGreen/30 focus:border-deepGreen transition-all bg-white">
            <option>Kapila</option>
            <option>Bansuri</option>
            <option>Brajwasi</option>
            <option>Godrej Agrovet</option>
            <option>Mineral Mixture</option>
            <option>Any / All</option>
          </select>
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-semibold text-deepGreen mb-1">Quantity (kg)</label>
          <input id="quantity" name="quantity" type="number" min="50" className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-deepGreen/30 focus:border-deepGreen transition-all" placeholder="Minimum 50kg" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-deepGreen mb-1">Message</label>
        <textarea id="message" name="message" rows={3} className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-deepGreen/30 focus:border-deepGreen transition-all" placeholder="Koi sawaal ya vishesh jaankari..." />
      </div>
      <button type="submit" className="w-full bg-deepGreen hover:bg-deepGreen/90 text-white font-bold py-3 rounded-xl transition-colors text-sm">
        WhatsApp pe Inquiry Bhejein
      </button>
    </form>
  );
}

