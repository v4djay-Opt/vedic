import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import InquiryForm from '@/components/InquiryForm';
import JsonLd, { localBusinessSchema, webSiteSchema } from '@/components/JsonLd';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata: Metadata = {
  title: 'Kapila Pashu Aahar Dealer Ayodhya | Vedic Heritage',
  description:
    'Authorized Kapila Pashu Aahar dealer in Ayodhya. Pure havan samagri, cow dung cake, hawan sticks. Free delivery 25km. Call now.',
};

/* ─── Static Data ────────────────────────────────────────────── */

const features = [
  {
    icon: '🌿',
    title: 'Natural Ingredients',
    desc: 'No harmful chemicals, pure natural feed sourced directly from trusted suppliers.',
  },
  {
    icon: '✓',
    title: 'Vet Approved',
    desc: 'Recommended by local veterinarians for healthier livestock and better yields.',
  },
  {
    icon: '🥛',
    title: 'Improves Milk Quality',
    desc: 'Proven results for healthier, stronger cows with up to 25% more milk production.',
  },
  {
    icon: '🚚',
    title: 'Free Local Delivery',
    desc: 'Free doorstep delivery within 25km of Ayodhya — no minimum order.',
  },
];

const products = [
  {
    title: 'Kapila Pashu Aahar',
    titleHindi: 'कपिला पशु आहार',
    badge: 'Best Seller',
    slug: 'kapila-pashu-aahar-ayodhya',
    inquiryBased: true,
  },
  {
    title: 'Cattle Feed Mix',
    titleHindi: 'पशु आहार मिक्स',
    badge: 'Popular',
    slug: 'cattle-feed-dealer-ayodhya',
    inquiryBased: true,
  },
  {
    title: 'Havan Samagri',
    titleHindi: 'हवन सामग्री',
    badge: 'Pure',
    slug: 'havan-samagri-ayodhya',
    price: 250,
    unit: 'kg',
  },
  {
    title: 'Cow Dung Cake',
    titleHindi: 'गोबर उपला',
    badge: 'Natural',
    slug: 'cow-dung-cake-ayodhya',
    price: 80,
    unit: 'pack',
  },
  {
    title: 'Hawan Wood Sticks',
    titleHindi: 'हवन समिधा',
    badge: 'Authentic',
    slug: 'hawan-wood-sticks-ayodhya',
    price: 150,
    unit: 'bundle',
  },
  {
    title: 'Bulk Order',
    titleHindi: 'थोक ऑर्डर',
    badge: 'Best Value',
    slug: 'bulk-inquiry',
    inquiryBased: true,
  },
];

const testimonials = [
  {
    quote:
      'Kapila pashu aahar use karne ke baad meri gaay ka doodh 30% badh gaya. Bahut accha product hai.',
    name: 'Ramesh Yadav',
    role: 'Farmer, Bikapur',
    initials: 'RY',
  },
  {
    quote:
      'Havan samagri bahut shuddh hai, Ram Mandir ke liye yahi se lete hain. Quality ekdum top hai.',
    name: 'Sunita Devi',
    role: 'Ayodhya',
    initials: 'SD',
  },
  {
    quote:
      'Bulk order pe bahut accha rate milta hai, delivery bhi time pe aati hai. Highly recommended!',
    name: 'Suresh Patel',
    role: 'Farmer, Sohawal',
    initials: 'SP',
  },
];

const steps = [
  {
    icon: '🔍',
    title: 'Browse Products',
    desc: 'Explore our cattle feed and puja products on the website.',
  },
  {
    icon: '💬',
    title: 'WhatsApp / Call',
    desc: 'Send us a message on WhatsApp or call directly to place your order.',
  },
  {
    icon: '🚚',
    title: 'Get Delivered',
    desc: 'Receive free doorstep delivery within 25km of Ayodhya.',
  },
];

/* ─── Section label helper ────────────────────────────────────── */
function SectionPill({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center bg-deepGreen/10 border border-deepGreen/20 text-deepGreen text-[11px] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full mb-4">
      {label}
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <JsonLd schema={localBusinessSchema as Record<string, unknown>} />
      <JsonLd schema={webSiteSchema as Record<string, unknown>} />

      {/* ── 1. Hero ── */}
      <HeroSection />

      {/* ── 2. Features ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionPill label="WHY CHOOSE US" />
            <h2 className="text-3xl sm:text-4xl font-black text-deepGreen mt-1">
              Why Farmers Trust Vedic Heritage
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group bg-cream border border-deepGreen/10 rounded-2xl p-6 hover:bg-deepGreen hover:border-deepGreen transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-deepGreen/10 group-hover:bg-white/20 flex items-center justify-center text-2xl mb-4 transition-colors duration-300">
                  {f.icon}
                </div>
                <h3 className="font-bold text-deepGreen group-hover:text-white text-base mb-2 transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/75 text-sm leading-relaxed transition-colors duration-300">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Products ── */}
      <section className="bg-sage/40 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <SectionPill label="OUR PRODUCTS" />
              <h2 className="text-3xl sm:text-4xl font-black text-deepGreen mt-1">
                Our Best Selling Products
              </h2>
              <p className="text-gray-400 text-sm mt-1 font-devanagari">
                हमारे सबसे लोकप्रिय उत्पाद
              </p>
            </div>
            <Link
              href="/products"
              className="shrink-0 inline-flex items-center gap-1.5 border-2 border-deepGreen text-deepGreen hover:bg-deepGreen hover:text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200"
            >
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {products.map((p) => (
              <ProductCard key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Testimonials ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionPill label="TESTIMONIALS" />
            <h2 className="text-3xl sm:text-4xl font-black text-deepGreen mt-1">
              Happy Farmers, Healthier Cows
            </h2>
            <p className="text-gray-400 text-sm mt-1.5 font-devanagari">
              खुश किसान, स्वस्थ गाय
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-cream border border-deepGreen/10 rounded-2xl p-6 flex flex-col gap-4"
              >
                {/* Stars */}
                <div className="flex gap-0.5" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-ochre" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-gray-700 text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-deepGreen/10">
                  <div className="w-10 h-10 rounded-full bg-deepGreen flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-deepGreen text-sm leading-tight">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. How to Order ── */}
      <section className="bg-deepGreen py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/10 border border-white/20 text-white/80 text-[11px] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full mb-4">
              SIMPLE PROCESS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">
              How to Order?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-12 left-[calc(33.333%-12px)] right-[calc(33.333%-12px)] h-0.5 bg-white/20" />
            {steps.map((step, i) => (
              <div key={step.title} className="relative flex flex-col items-center text-center gap-4">
                <div className="relative z-10 w-16 h-16 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-3xl">
                  {step.icon}
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-ochre flex items-center justify-center text-white text-[10px] font-black">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">{step.title}</h3>
                  <p className="text-white/60 text-sm mt-1 max-w-xs mx-auto leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-deepGreen font-bold px-7 py-3 rounded-xl hover:bg-cream transition-colors text-sm shadow-md"
            >
              Start on WhatsApp
            </a>
            <a
              href="tel:+919999999999"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-deepGreen font-bold px-7 py-3 rounded-xl transition-all text-sm"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. Expert Help + Inquiry Form ── */}
      <section className="bg-deepGreen/95 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left — Contact options */}
            <div>
              <div className="inline-flex items-center bg-white/10 border border-white/20 text-white/80 text-[11px] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full mb-5">
                GET EXPERT HELP
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
                Need Help Choosing
                <br />
                the Right Feed?
              </h2>
              <p className="text-white/65 text-sm leading-relaxed mb-8 max-w-sm">
                Our team in Ayodhya will guide you to the right product for your cattle and budget.
                Reach us any way you prefer.
              </p>
              <div className="space-y-4">
                {/* Call */}
                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl px-5 py-4 transition-colors group"
                >
                  <span className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm">Call Directly</p>
                    <p className="text-white/55 text-xs">+91 99999 99999</p>
                  </div>
                  <svg className="w-4 h-4 text-white/40 group-hover:text-white/70 ml-auto transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl px-5 py-4 transition-colors group"
                >
                  <span className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm">WhatsApp</p>
                    <p className="text-white/55 text-xs">Quick reply guaranteed</p>
                  </div>
                  <svg className="w-4 h-4 text-white/40 group-hover:text-white/70 ml-auto transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                {/* Visit */}
                <div className="flex items-center gap-4 bg-white/10 border border-white/15 rounded-xl px-5 py-4">
                  <span className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm">Visit Us</p>
                    <p className="text-white/55 text-xs">Ayodhya, Uttar Pradesh — 224001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Inquiry Form */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-white font-bold text-lg mb-1">Send an Inquiry</h3>
              <p className="text-white/50 text-xs mb-6">We&apos;ll respond within 1 hour on WhatsApp.</p>
              <InquiryForm />
            </div>

          </div>
        </div>
      </section>

      {/* ── 7. Newsletter / Blog CTA ── */}
      <section className="bg-cream border-t border-deepGreen/10 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-deepGreen/10 border border-deepGreen/20 text-deepGreen text-[11px] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full mb-5">
            🌱 VEDIC TIPS & BLOGS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-deepGreen">
            Stay Updated on Vedic Tips
          </h2>
          <p className="text-gray-400 text-sm mt-2 font-devanagari">
            वैदिक ज्ञान से जुड़े रहें
          </p>
          <p className="text-gray-600 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Weekly blogs on cattle care, farming tips, and puja guidance — straight to your inbox.
          </p>
          <NewsletterForm />
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 mt-6 text-deepGreen hover:text-ochre font-semibold text-sm transition-colors"
          >
            Browse our blog
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
