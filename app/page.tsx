import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import JsonLd, { localBusinessSchema, webSiteSchema } from '@/components/JsonLd';
import { client } from '@/lib/sanity.client';
import { getRecentPosts, urlFor, type PostSummary } from '@/lib/sanity.queries';

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
export default async function HomePage() {
  const recentPosts = await client.fetch<PostSummary[]>(getRecentPosts).catch(() => []);
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
              href="https://wa.me/919911662492"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-deepGreen font-bold px-7 py-3 rounded-xl hover:bg-cream transition-colors text-sm shadow-md"
            >
              Start on WhatsApp
            </a>
            <a
              href="tel:+917840882270"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-deepGreen font-bold px-7 py-3 rounded-xl transition-all text-sm"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* ── 7. Blog Preview ── */}
      <section className="bg-cream border-t border-deepGreen/10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center bg-deepGreen/10 border border-deepGreen/20 text-deepGreen text-[11px] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full mb-5">
              🌱 VEDIC TIPS & BLOGS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-deepGreen">
              Latest from Our Blog
            </h2>
            <p className="text-gray-400 text-sm mt-2 font-devanagari">
              वैदिक ज्ञान से जुड़े रहें
            </p>
            <p className="text-gray-600 mt-4 max-w-md mx-auto text-sm leading-relaxed">
              Weekly blogs on cattle care, farming tips, and puja guidance.
            </p>
          </div>
          {recentPosts.length === 0 ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">📖</div>
              <p className="text-deepGreen font-bold">Blogs coming soon — check back weekly</p>
              <p className="text-gray-400 text-sm mt-1 font-devanagari">जल्द ही ब्लॉग पोस्ट आएंगी</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug.current}
                  href={`/blog/${post.slug.current}`}
                  className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-deepGreen/30 transition-all duration-200"
                >
                  <div className="relative h-48 bg-sage overflow-hidden">
                    {post.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage).width(600).height(400).url()}
                        alt={post.mainImage.alt ?? post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-5xl select-none">📜</div>
                    )}
                    {post.category && (
                      <span className="absolute top-3 left-3 bg-deepGreen text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="font-bold text-deepGreen text-base leading-snug group-hover:text-ochre transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-gray-500 text-sm mt-2 leading-relaxed line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <time className="text-gray-400 text-xs">
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
                          : ''}
                      </time>
                      <span className="text-deepGreen text-xs font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-deepGreen hover:text-ochre font-semibold text-sm transition-colors"
            >
              Browse all blogs
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
