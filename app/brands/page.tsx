import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/lib/sanity.client';
import { getAllBrands, urlFor, type Brand } from '@/lib/sanity.queries';

export const metadata: Metadata = {
  title: 'Our Brands | Vedic Heritage Ayodhya',
  description:
    'Explore the trusted brands we carry at Vedic Heritage — premium cattle feed, havan samagri, and Vedic products in Ayodhya.',
};

const STATIC_BRANDS = [
  {
    name: 'Kapila Pashu Aahar',
    slug: { current: 'kapila-pashu-aahar' },
    tagline: 'Premium cattle feed for healthier livestock',
    description:
      'Trusted cattle feed brand providing natural, vet-approved nutrition for better milk yield and animal health. Available across Ayodhya and surrounding districts.',
    icon: '🐄',
    href: '/kapila-pashu-aahar-ayodhya',
    accentColor: 'bg-emerald-50 border-emerald-200',
    badgeColor: 'bg-emerald-100 text-emerald-800',
  },
  {
    name: 'Vedic Havan Samagri',
    slug: { current: 'vedic-havan-samagri' },
    tagline: 'Pure ingredients for sacred rituals',
    description:
      'Authentic havan samagri made from natural herbs, cow ghee, and traditional Vedic ingredients. Sourced and prepared as per ancient scriptures.',
    icon: '🔥',
    href: '/havan-samagri-ayodhya',
    accentColor: 'bg-orange-50 border-orange-200',
    badgeColor: 'bg-orange-100 text-orange-800',
  },
  {
    name: 'Gau Amrit',
    slug: { current: 'gau-amrit' },
    tagline: 'Sacred cow dung products from Ayodhya',
    description:
      'Pure cow dung cakes crafted from desi gau mata, ideal for havan, pooja, and organic farming. Eco-friendly and handmade in Ayodhya.',
    icon: '🌿',
    href: '/cow-dung-cake-ayodhya',
    accentColor: 'bg-lime-50 border-lime-200',
    badgeColor: 'bg-lime-100 text-lime-800',
  },
  {
    name: 'Pavitra Samidha',
    slug: { current: 'pavitra-samidha' },
    tagline: 'Traditional hawan wood sticks',
    description:
      'Handpicked hawan wood sticks from sacred trees — mango, peepal, palash, and more — prepared as per Vedic guidelines for pure and effective yagnas.',
    icon: '🪵',
    href: '/hawan-wood-sticks-ayodhya',
    accentColor: 'bg-amber-50 border-amber-200',
    badgeColor: 'bg-amber-100 text-amber-800',
  },
];

async function getBrands(): Promise<Brand[]> {
  try {
    return await client.fetch<Brand[]>(getAllBrands);
  } catch {
    return [];
  }
}

export default async function BrandsPage() {
  const sanityBrands = await getBrands();
  const hasSanityBrands = sanityBrands.length > 0;

  return (
    <main>
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
          <div className="inline-flex items-center bg-white/10 border border-white/20 text-white/90 text-[11px] font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full mb-6">
            🏷️ OUR BRANDS
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
            Trusted Brands We Carry
          </h1>
          <p className="text-white/60 text-base mt-2 font-devanagari">
            हमारे विश्वसनीय ब्रांड
          </p>
          <p className="text-white/80 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            We partner with the finest brands in cattle nutrition and Vedic ritual products — each
            selected for purity, quality, and trust.
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {hasSanityBrands ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {sanityBrands.map((brand) => (
                <Link
                  key={brand.slug.current}
                  href={`/brands/${brand.slug.current}`}
                  className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-deepGreen/30 transition-all duration-200 p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-sage flex items-center justify-center overflow-hidden shrink-0">
                      {brand.logo ? (
                        <Image
                          src={urlFor(brand.logo).width(128).height(128).url()}
                          alt={brand.name}
                          width={64}
                          height={64}
                          className="object-contain"
                        />
                      ) : (
                        <span className="text-3xl">🌿</span>
                      )}
                    </div>
                    <div>
                      <h2 className="font-bold text-deepGreen text-lg leading-tight group-hover:text-ochre transition-colors">
                        {brand.name}
                      </h2>
                      {brand.tagline && (
                        <p className="text-gray-400 text-xs mt-0.5">{brand.tagline}</p>
                      )}
                    </div>
                  </div>
                  {brand.description && (
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
                      {brand.description}
                    </p>
                  )}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-deepGreen text-xs font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5">
                      View Products →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
              {STATIC_BRANDS.map((brand) => (
                <Link
                  key={brand.slug.current}
                  href={brand.href}
                  className={`group flex flex-col border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-200 p-6 ${brand.accentColor}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                      <span className="text-3xl">{brand.icon}</span>
                    </div>
                    <div className="flex-1">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${brand.badgeColor}`}>
                        Brand
                      </span>
                      <h2 className="font-black text-deepGreen text-xl leading-tight mt-2 group-hover:text-ochre transition-colors">
                        {brand.name}
                      </h2>
                      <p className="text-gray-500 text-xs mt-0.5">{brand.tagline}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {brand.description}
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 bg-deepGreen text-white text-xs font-semibold px-4 py-2 rounded-lg group-hover:bg-deepGreen/90 transition-colors">
                      View Products
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <a
                      href="https://wa.me/919911662492"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 border border-deepGreen text-deepGreen text-xs font-semibold px-4 py-2 rounded-lg hover:bg-deepGreen/10 transition-colors"
                    >
                      Bulk Inquiry
                    </a>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deepGreen py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Want to stock our brands?
          </h2>
          <p className="text-white/60 text-sm mt-3 max-w-md mx-auto">
            Get in touch for wholesale and bulk pricing across all brands.
          </p>
          <div className="flex items-center justify-center gap-4 mt-7">
            <a
              href="https://wa.me/919911662492"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-deepGreen font-bold text-sm px-6 py-3 rounded-xl hover:bg-white/90 transition-colors shadow-md"
            >
              WhatsApp Inquiry
            </a>
            <a
              href="tel:+917840882270"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold text-sm px-6 py-3 rounded-xl hover:border-white/60 transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
