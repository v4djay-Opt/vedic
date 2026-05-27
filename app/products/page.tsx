import type { Metadata } from 'next';
import { client } from '@/lib/sanity.client';
import { getAllProducts, urlFor } from '@/lib/sanity.queries';
import ProductsClient, { type FilterProduct } from '@/components/ProductsClient';

export const metadata: Metadata = {
  title: 'All Products | Vedic Heritage Ayodhya',
  description:
    'Browse all Vedic Heritage products — Kapila Pashu Aahar cattle feed, havan samagri, cow dung cakes, and hawan sticks in Ayodhya.',
};

const STATIC_PRODUCTS: FilterProduct[] = [
  {
    title: 'Kapila Pashu Aahar — Dairy Mix',
    titleHindi: 'कपिला पशु आहार — डेयरी मिक्स',
    slug: 'kapila-pashu-aahar-dairy-mix',
    price: null,
    badge: 'Best Seller',
    brand: 'Kapila Pashu Aahar',
    brandSlug: 'kapila-pashu-aahar',
    category: 'Cattle Feed',
    size: '50 kg',
  },
  {
    title: 'Kapila Pashu Aahar — Calf Starter',
    titleHindi: 'कपिला पशु आहार — कैल्फ स्टार्टर',
    slug: 'kapila-pashu-aahar-calf-starter',
    price: null,
    brand: 'Kapila Pashu Aahar',
    brandSlug: 'kapila-pashu-aahar',
    category: 'Cattle Feed',
    size: '25 kg',
  },
  {
    title: 'Pure Havan Samagri — 500g',
    titleHindi: 'शुद्ध हवन सामग्री — 500ग्राम',
    slug: 'havan-samagri-ayodhya',
    price: null,
    badge: 'Pure',
    brand: 'Vedic Havan Samagri',
    brandSlug: 'vedic-havan-samagri',
    category: 'Puja Products',
    size: '500 g',
  },
  {
    title: 'Premium Havan Samagri — 1kg',
    titleHindi: 'प्रीमियम हवन सामग्री — 1किग्रा',
    slug: 'havan-samagri-ayodhya',
    price: null,
    brand: 'Vedic Havan Samagri',
    brandSlug: 'vedic-havan-samagri',
    category: 'Puja Products',
    size: '1 kg',
  },
  {
    title: 'Cow Dung Cake — Pack of 10',
    titleHindi: 'गोबर के उपले — 10 का पैक',
    slug: 'cow-dung-cake-ayodhya',
    price: null,
    badge: 'Natural',
    brand: 'Gau Amrit',
    brandSlug: 'gau-amrit',
    category: 'Organic',
    size: 'Pack of 10',
  },
  {
    title: 'Cow Dung Cake — Pack of 25',
    titleHindi: 'गोबर के उपले — 25 का पैक',
    slug: 'cow-dung-cake-ayodhya',
    price: null,
    brand: 'Gau Amrit',
    brandSlug: 'gau-amrit',
    category: 'Organic',
    size: 'Pack of 25',
  },
  {
    title: 'Mango Hawan Sticks — 250g',
    titleHindi: 'आम की समिधा — 250ग्राम',
    slug: 'hawan-wood-sticks-ayodhya',
    price: null,
    brand: 'Pavitra Samidha',
    brandSlug: 'pavitra-samidha',
    category: 'Puja Products',
    size: '250 g',
  },
  {
    title: 'Mixed Samidha Pack — 500g',
    titleHindi: 'मिश्रित समिधा पैक — 500ग्राम',
    slug: 'hawan-wood-sticks-ayodhya',
    price: null,
    badge: 'Vedic',
    brand: 'Pavitra Samidha',
    brandSlug: 'pavitra-samidha',
    category: 'Puja Products',
    size: '500 g',
  },
];

interface SanityProduct {
  title: string;
  titleHindi?: string;
  slug: { current: string };
  mainImage?: { asset: { _ref: string }; alt?: string };
  price?: number;
  unit?: string;
  badge?: string;
  brand?: string;
  brandSlug?: string;
  category?: string;
  size?: string;
}

async function getProducts(): Promise<FilterProduct[]> {
  try {
    const data = await client.fetch<SanityProduct[]>(getAllProducts);
    return data.map((p) => ({
      title: p.title,
      titleHindi: p.titleHindi,
      slug: p.slug.current,
      image: p.mainImage ? urlFor(p.mainImage).width(400).height(400).url() : null,
      price: p.price ?? null,
      unit: p.unit,
      badge: p.badge ?? null,
      brand: p.brand ?? null,
      brandSlug: p.brandSlug ?? null,
      category: p.category ?? null,
      size: p.size ?? null,
    }));
  } catch {
    return [];
  }
}

export default async function ProductsPage() {
  const sanityProducts = await getProducts();
  const products = sanityProducts.length > 0 ? sanityProducts : STATIC_PRODUCTS;

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
          <div className="inline-flex items-center bg-white/10 border border-white/20 text-white/90 text-[11px] font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full mb-5">
            🛒 ALL PRODUCTS
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white">
            Our Product Range
          </h1>
          <p className="text-white/60 text-sm mt-2 font-devanagari">हमारे उत्पाद</p>
          <p className="text-white/80 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            Premium cattle feed, pure havan samagri, cow dung cakes, and hawan sticks — all
            sourced from trusted brands in Ayodhya.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductsClient
            products={products}
          />
        </div>
      </section>
    </main>
  );
}
