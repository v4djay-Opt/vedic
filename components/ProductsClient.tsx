'use client';

import { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';

export interface FilterProduct {
  title: string;
  titleHindi?: string;
  slug: string;
  image?: string | null;
  price?: number | null;
  unit?: string;
  badge?: string | null;
  brand?: string | null;
  brandSlug?: string | null;
  category?: string | null;
  size?: string | null;
}

interface Props {
  products: FilterProduct[];
}

export default function ProductsClient({ products }: Props) {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedProductType, setSelectedProductType] = useState<'all' | 'pashu' | 'puja'>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [search, setSearch] = useState('');

  const brands = useMemo(() => {
    const map = new Map<string, string>();
    products.forEach((p) => {
      if (p.brand && p.brandSlug) map.set(p.brandSlug, p.brand);
    });
    return Array.from(map.entries()).map(([slug, name]) => ({ slug, name }));
  }, [products]);

  const sizes = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.size).filter(Boolean) as string[]));
  }, [products]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchBrand = selectedBrand === 'all' || p.brandSlug === selectedBrand;
      const matchType =
        selectedProductType === 'all'
          ? true
          : selectedProductType === 'pashu'
            ? p.category === 'Cattle Feed'
            : p.category === 'Puja Products' || p.category === 'Organic';
      const matchSize = selectedSize === 'all' || p.size === selectedSize;
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        (p.titleHindi ?? '').includes(search);
      return matchBrand && matchType && matchSize && matchSearch;
    });
  }, [products, selectedBrand, selectedProductType, selectedSize, search]);

  const pillClass = (active: boolean) =>
    `cursor-pointer px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
      active
        ? 'bg-deepGreen text-white shadow-sm'
        : 'bg-white border border-gray-200 text-gray-600 hover:border-deepGreen/40 hover:text-deepGreen'
    }`;

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* ── Sidebar ── */}
      <aside className="w-full lg:w-60 shrink-0 space-y-6">
        {/* Search */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">
            Search
          </label>
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products…"
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-deepGreen/30 focus:border-deepGreen transition-colors"
            />
          </div>
        </div>

        {/* Brand filter */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-3">
            Brand
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedBrand('all')}
              className={pillClass(selectedBrand === 'all')}
            >
              All Brands
            </button>
            {brands.map((b: { slug: string; name: string }) => (
              <button
                key={b.slug}
                onClick={() => setSelectedBrand(b.slug)}
                className={pillClass(selectedBrand === b.slug)}
              >
                {b.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Type dropdown */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-3">
            Product Type
          </label>
          <select
            value={selectedProductType}
            onChange={(e) => setSelectedProductType(e.target.value as 'all' | 'pashu' | 'puja')}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-deepGreen/30 focus:border-deepGreen transition-colors"
          >
            <option value="all">All Products</option>
            <option value="pashu">Pashu Aahar (Cattle Feed)</option>
            <option value="puja">Puja Products</option>
          </select>
        </div>

        {/* Size / Volume filter */}
        {sizes.length > 0 && (
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-3">
              Size / Volume
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSize('all')}
                className={pillClass(selectedSize === 'all')}
              >
                All Sizes
              </button>
              {sizes.map((s: string) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={pillClass(selectedSize === s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Reset */}
        {(selectedBrand !== 'all' || selectedProductType !== 'all' || selectedSize !== 'all' || search) && (
          <button
            onClick={() => {
              setSelectedBrand('all');
              setSelectedProductType('all');
              setSelectedSize('all');
              setSearch('');
            }}
            className="text-xs text-gray-400 hover:text-deepGreen underline transition-colors"
          >
            Clear all filters
          </button>
        )}
      </aside>

      {/* ── Products grid ── */}
      <div className="flex-1">
        <p className="text-xs text-gray-400 mb-5">
          Showing <span className="font-bold text-gray-700">{filtered.length}</span> of {products.length} products
        </p>
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🌿</div>
            <p className="text-deepGreen font-bold">No products found</p>
            <p className="text-gray-400 text-sm mt-1">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6">
            {filtered.map((p) => (
              <ProductCard
                key={p.slug + (p.size ?? '')}
                title={p.title}
                titleHindi={p.titleHindi}
                price={p.price ?? null}
                unit={p.unit}
                image={p.image ?? null}
                badge={p.badge ?? null}
                slug={p.slug}
                size={p.size ?? null}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
