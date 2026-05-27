import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { client } from '@/lib/sanity.client';
import {
  getBrandBySlug,
  getAllBrandSlugs,
  urlFor,
  type BrandWithProducts,
} from '@/lib/sanity.queries';
import ProductCard from '@/components/ProductCard';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch<{ slug: string }[]>(getAllBrandSlugs);
    return slugs.map((s) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const brand = await client.fetch<BrandWithProducts>(getBrandBySlug, { slug: params.slug });
    if (!brand) return { title: 'Brand Not Found' };
    return {
      title: `${brand.name} Products | Vedic Heritage Ayodhya`,
      description: brand.description ?? `Explore ${brand.name} products at Vedic Heritage, Ayodhya.`,
    };
  } catch {
    return { title: 'Brand' };
  }
}

export default async function BrandPage({ params }: PageProps) {
  let brand: BrandWithProducts | null = null;
  try {
    brand = await client.fetch<BrandWithProducts>(getBrandBySlug, { slug: params.slug });
  } catch {
    brand = null;
  }

  if (!brand) notFound();

  return (
    <main>
      {/* Brand Hero Banner */}
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
          <Link
            href="/brands"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            All Brands
          </Link>
          <div className="flex flex-col items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center overflow-hidden shrink-0">
              {brand.logo ? (
                <Image
                  src={urlFor(brand.logo).width(160).height(160).url()}
                  alt={brand.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              ) : (
                <span className="text-4xl">🌿</span>
              )}
            </div>
            <div>
              <div className="inline-flex items-center bg-white/10 border border-white/20 text-white/90 text-[11px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-full mb-3">
                Brand
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                {brand.name}
              </h1>
              {brand.tagline && (
                <p className="text-white/50 text-sm mt-1">{brand.tagline}</p>
              )}
              {brand.description && (
                <p className="text-white/70 text-sm mt-3 max-w-2xl leading-relaxed">
                  {brand.description}
                </p>
              )}
              {brand.website && (
                <a
                  href={brand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-deepGreen hover:text-ochre text-sm font-medium mt-3 transition-colors"
                >
                  Visit Website →
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-deepGreen mb-8">
            {brand.products?.length > 0
              ? `Products by ${brand.name}`
              : `No products listed yet for ${brand.name}`}
          </h2>
          {brand.products?.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {brand.products.map((product) => (
                <ProductCard
                  key={product.slug.current}
                  title={product.title}
                  titleHindi={product.titleHindi}
                  price={product.price ?? null}
                  unit={product.unit}
                  image={
                    product.mainImage
                      ? urlFor(product.mainImage).width(400).height(400).url()
                      : null
                  }
                  badge={product.badge ?? null}
                  slug={product.slug.current}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">📦</div>
              <p className="text-deepGreen font-bold">Products coming soon</p>
              <p className="text-gray-400 text-sm mt-1">
                Check back soon or contact us for availability.
              </p>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 bg-deepGreen text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-deepGreen/90 transition-colors"
              >
                WhatsApp Inquiry
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
