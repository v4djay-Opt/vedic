'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-gray-100 transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex flex-col items-start gap-0">
            <div className="flex items-center gap-2">
              <svg
                className="w-8 h-8 text-deepGreen shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M21 3C21 3 14 5 12 12C10 5 3 3 3 3C3 3 3 14 10 17C10.57 17.21 11.29 17.36 12 17.41V21H13V17.41C13.71 17.36 14.43 17.21 15 17C22 14 21 3 21 3Z" />
              </svg>
              <span className="font-black text-deepGreen text-xl tracking-tight leading-none">
                Vedic Heritage
              </span>
            </div>
            <span className="text-gray-400 text-[11px] font-devanagari ml-10 leading-tight">
              वैदिक हेरिटेज
            </span>
          </Link>

          {/* Center nav — desktop */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-deepGreen font-medium text-sm transition-colors duration-150 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-deepGreen group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919999999999"
              className="hidden sm:inline-flex items-center gap-2 border-2 border-deepGreen text-deepGreen hover:bg-deepGreen hover:text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200"
            >
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
                />
              </svg>
              +91 99999 99999
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-deepGreen hover:bg-gray-100 transition-colors"
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
          menuOpen ? 'max-h-96 border-t border-gray-100' : 'max-h-0'
        } bg-white`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center py-2.5 px-3 text-gray-700 hover:text-deepGreen hover:bg-sage font-medium text-sm rounded-lg transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+919999999999"
            className="mt-2 flex items-center justify-center gap-2 border-2 border-deepGreen text-deepGreen font-semibold py-2.5 px-4 rounded-lg text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
              />
            </svg>
            +91 99999 99999
          </a>
        </div>
      </div>
    </header>
  );
}
