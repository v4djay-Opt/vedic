'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const BRANDS = [
  { name: 'Kapila Pashu Aahar', slug: 'kapila-pashu-aahar-ayodhya', icon: '🐄', desc: 'Premium dairy feed' },
  { name: 'Bansuri Pashu Aahar', slug: 'bansuri-pashu-aahar-bikapur', icon: '🐄', desc: 'Best selling brand' },
  { name: 'Brajwasi Feeds', slug: 'brajwasi-feeds-bikapur', icon: '🐄', desc: 'Popular cattle feed' },
  { name: 'Godrej Agrovet', slug: 'godrej-agrovet-bikapur', icon: '🐄', desc: 'Trusted brand' },
];

const PRODUCT_TYPES = [
  { label: 'Pashu Aahar (Cattle Feed)', href: '/pashu-aahar', icon: '🐄' },
  { label: 'Puja Products', href: '/puja-products', icon: '🔥' },
];

function LogoImage() {
  const [imgError, setImgError] = useState(false);
  if (imgError) {
    return (
      <svg className="w-40 h-16 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21 3C21 3 14 5 12 12C10 5 3 3 3 3C3 3 3 14 10 17C10.57 17.21 11.29 17.36 12 17.41V21H13V17.41C13.71 17.36 14.43 17.21 15 17C22 14 21 3 21 3Z" />
      </svg>
    );
  }
  return (
    <Image
      src="/logo.png"
      alt="Vedic Heritage Logo"
      width={160}
      height={64}
      className="w-40 h-16 object-contain shrink-0"
      onError={() => setImgError(true)}
    />
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname();
  const brandsRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const productsTimeout = useRef<number>(0);
  const brandsTimeout = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (brandsRef.current && !brandsRef.current.contains(e.target as Node)) {
        setBrandsOpen(false);
      }
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-deepGreen/95 backdrop-blur-sm border-white/10 shadow-md'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <LogoImage />
          </Link>

          {/* Center nav — desktop */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            <Link
              href="/"
              className="font-medium text-sm transition-colors duration-150 relative group text-white/90 hover:text-white"
            >
              Home
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-200 bg-white" />
            </Link>
            <Link
              href="/about"
              className="font-medium text-sm transition-colors duration-150 relative group text-white/90 hover:text-white"
            >
              About Us
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-200 bg-white" />
            </Link>

            {/* Products dropdown */}
            <div
              className="relative"
              ref={productsRef}
              onMouseEnter={() => {
                window.clearTimeout(productsTimeout.current);
                setProductsOpen(true);
              }}
              onMouseLeave={() => {
                productsTimeout.current = window.setTimeout(() => setProductsOpen(false), 200);
              }}
            >
              <button
                onClick={() => setProductsOpen((p) => !p)}
                className="flex items-center gap-1 font-medium text-sm transition-colors duration-150 relative group text-white/90 hover:text-white"
              >
                Products
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-200 bg-white" />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden z-50">
                  <div className="p-2">
                    {PRODUCT_TYPES.map((p) => (
                      <Link
                        key={p.label}
                        href={p.href}
                        onClick={() => setProductsOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-sage transition-colors group"
                      >
                        <span className="text-xl w-8 text-center">{p.icon}</span>
                        <p className="text-sm font-semibold text-deepGreen group-hover:text-ochre transition-colors leading-tight">
                          {p.label}
                        </p>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 px-4 py-3">
                    <Link
                      href="/products"
                      onClick={() => setProductsOpen(false)}
                      className="flex items-center justify-between text-xs font-semibold text-deepGreen hover:text-ochre transition-colors"
                    >
                      View all products
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Brands dropdown */}
            <div
              className="relative"
              ref={brandsRef}
              onMouseEnter={() => {
                window.clearTimeout(brandsTimeout.current);
                setBrandsOpen(true);
              }}
              onMouseLeave={() => {
                brandsTimeout.current = window.setTimeout(() => setBrandsOpen(false), 200);
              }}
            >
              <button
                onClick={() => setBrandsOpen((p) => !p)}
                className="flex items-center gap-1 font-medium text-sm transition-colors duration-150 relative group text-white/90 hover:text-white"
              >
                Brands
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${brandsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-200 bg-white" />
              </button>

              {brandsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden z-50">
                  <div className="p-2">
                    {BRANDS.map((b) => (
                      <Link
                        key={b.slug}
                        href={`/${b.slug}`}
                        onClick={() => setBrandsOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-sage transition-colors group"
                      >
                        <span className="text-xl w-8 text-center">{b.icon}</span>
                        <div>
                          <p className="text-sm font-semibold text-deepGreen group-hover:text-ochre transition-colors leading-tight">
                            {b.name}
                          </p>
                          <p className="text-xs text-gray-400">{b.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 px-4 py-3">
                    <Link
                      href="/products"
                      onClick={() => setBrandsOpen(false)}
                      className="flex items-center justify-between text-xs font-semibold text-deepGreen hover:text-ochre transition-colors"
                    >
                      View all products
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="font-medium text-sm transition-colors duration-150 relative group text-white/90 hover:text-white"
            >
              Blog
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-200 bg-white" />
            </Link>
            <Link
              href="/contact"
              className="font-medium text-sm transition-colors duration-150 relative group text-white/90 hover:text-white"
            >
              Contact us
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-200 bg-white" />
            </Link>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+917840882270"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 border-2 border-white text-white hover:bg-white hover:text-deepGreen"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
              </svg>
              78408 82270
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-lg transition-colors text-white hover:text-white/80 hover:bg-white/10"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-[600px] border-t border-gray-100' : 'max-h-0'
        } bg-white`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center py-2.5 px-3 text-gray-700 hover:text-deepGreen hover:bg-sage font-medium text-sm rounded-lg transition-colors duration-150"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="flex items-center py-2.5 px-3 text-gray-700 hover:text-deepGreen hover:bg-sage font-medium text-sm rounded-lg transition-colors duration-150"
          >
            About Us
          </Link>

          {/* Mobile Products accordion */}
          <div>
            <button
              onClick={() => setMobileProductsOpen((p) => !p)}
              className="w-full flex items-center justify-between py-2.5 px-3 text-gray-700 hover:text-deepGreen hover:bg-sage font-medium text-sm rounded-lg transition-colors duration-150"
            >
              Products
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileProductsOpen && (
              <div className="ml-3 mt-1 space-y-1 border-l-2 border-sage pl-3">
                {PRODUCT_TYPES.map((p) => (
                  <Link
                    key={p.label}
                    href={p.href}
                    onClick={() => { setMenuOpen(false); setMobileProductsOpen(false); }}
                    className="flex items-center gap-2 py-2 px-2 text-gray-600 hover:text-deepGreen text-sm rounded-lg hover:bg-sage transition-colors"
                  >
                    <span>{p.icon}</span>
                    {p.label}
                  </Link>
                ))}
                <Link
                  href="/products"
                  onClick={() => { setMenuOpen(false); setMobileProductsOpen(false); }}
                  className="flex items-center gap-1 py-2 px-2 text-deepGreen font-semibold text-xs hover:text-ochre transition-colors"
                >
                  View all products →
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Brands accordion */}
          <div>
            <button
              onClick={() => setMobileBrandsOpen((p) => !p)}
              className="w-full flex items-center justify-between py-2.5 px-3 text-gray-700 hover:text-deepGreen hover:bg-sage font-medium text-sm rounded-lg transition-colors duration-150"
            >
              Brands
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileBrandsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileBrandsOpen && (
              <div className="ml-3 mt-1 space-y-1 border-l-2 border-sage pl-3">
                {BRANDS.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/${b.slug}`}
                    onClick={() => { setMenuOpen(false); setMobileBrandsOpen(false); }}
                    className="flex items-center gap-2 py-2 px-2 text-gray-600 hover:text-deepGreen text-sm rounded-lg hover:bg-sage transition-colors"
                  >
                    <span>{b.icon}</span>
                    {b.name}
                  </Link>
                ))}
                <Link
                  href="/products"
                  onClick={() => { setMenuOpen(false); setMobileBrandsOpen(false); }}
                  className="flex items-center gap-1 py-2 px-2 text-deepGreen font-semibold text-xs hover:text-ochre transition-colors"
                >
                  View all products →
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/blog"
            onClick={() => setMenuOpen(false)}
            className="flex items-center py-2.5 px-3 text-gray-700 hover:text-deepGreen hover:bg-sage font-medium text-sm rounded-lg transition-colors duration-150"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center py-2.5 px-3 text-gray-700 hover:text-deepGreen hover:bg-sage font-medium text-sm rounded-lg transition-colors duration-150"
          >
            Contact us
          </Link>

          <a
            href="tel:+917840882270"
            className="mt-2 flex items-center justify-center gap-2 border-2 border-deepGreen text-deepGreen font-semibold py-2.5 px-4 rounded-lg text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
            </svg>
            78408 82270
          </a>
        </div>
      </div>
    </header>
  );
}
