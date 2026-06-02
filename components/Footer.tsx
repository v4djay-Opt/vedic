'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

function FooterLogo() {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <svg className="w-7 h-7 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21 3C21 3 14 5 12 12C10 5 3 3 3 3C3 3 3 14 10 17C10.57 17.21 11.29 17.36 12 17.41V21H13V17.41C13.71 17.36 14.43 17.21 15 17C22 14 21 3 21 3Z" />
      </svg>
    );
  }
  return (
    <Image
      src="/logo.png"
      alt="Vedic Heritage"
      width={28}
      height={28}
      className="w-7 h-7 object-contain shrink-0"
      onError={() => setErr(true)}
    />
  );
}

interface Segment {
  text: string;
  className?: string;
}

function TypeWriter({ segments, speed = 80 }: { segments: Segment[]; speed?: number }) {
  const fullText = segments.map((s) => s.text).join('');
  const [display, setDisplay] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplay(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [fullText, speed]);

  let charIndex = 0;
  const nodes: React.ReactNode[] = [];

  segments.forEach((seg, idx) => {
    const len = seg.text.length;
    const start = charIndex;
    const visibleLen = Math.max(0, Math.min(len, display.length - start));
    const visible = seg.text.slice(0, visibleLen);

    if (visible) {
      nodes.push(
        <span key={idx} className={seg.className}>
          {visible}
        </span>
      );
    }
    charIndex += len;
  });

  return (
    <span>
      {nodes}
      <span className="ml-0.5 animate-pulse">|</span>
    </span>
  );
}

const productLinks = [
  { label: 'Kapila Pashu Aahar', href: '/kapila-pashu-aahar-ayodhya' },
  { label: 'Havan Samagri', href: '/havan-samagri-ayodhya' },
  { label: 'Cow Dung Cake', href: '/cow-dung-cake-ayodhya' },
  { label: 'Hawan Wood Sticks', href: '/hawan-wood-sticks-ayodhya' },
  { label: 'Bulk Inquiry', href: '/bulk-inquiry' },
];

const supportLinks = [
  { label: 'Contact Us', href: '/contact' },
  { label: 'Our Brands', href: '/brands' },
  { label: 'Cattle Feed Dealers', href: '/cattle-feed-dealer-ayodhya' },
  { label: 'Blog', href: '/blog' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Image Converter', href: '/tools/image-converter' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

export default function Footer() {
  return (
    <footer>
      {/* Main body */}
      <div className="relative bg-deepGreen">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{ backgroundImage: 'url(/images/footerbg.png)' }}
        />
        <div className="absolute inset-0 bg-deepGreen/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Col 1 — About + Logo + Social */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <FooterLogo />
                <span className="font-black text-white text-lg">Vedic Heritage</span>
              </div>
              <p className="text-white/40 text-xs font-devanagari mb-4 ml-9">वैदिक हेरिटेज</p>
              <p className="text-white/65 text-sm leading-relaxed">
                Authentic Vedic products and premium cattle feed sourced from the sacred city of
                Ayodhya, Uttar Pradesh.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-2.5 mt-5">
                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white text-white/60 hover:text-deepGreen flex items-center justify-center transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white text-white/60 hover:text-deepGreen flex items-center justify-center transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white text-white/60 hover:text-deepGreen flex items-center justify-center transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2 — Products */}
            <div>
              <h4 className="font-bold text-white/80 text-xs mb-5 uppercase tracking-widest">
                Products
              </h4>
              <ul className="space-y-3">
                {productLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-150 flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-white transition-colors shrink-0" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Support */}
            <div>
              <h4 className="font-bold text-white/80 text-xs mb-5 uppercase tracking-widest">
                Support
              </h4>
              <ul className="space-y-3">
                {supportLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-150 flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-white transition-colors shrink-0" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Contact Info */}
            <div>
              <h4 className="font-bold text-white/80 text-xs mb-5 uppercase tracking-widest">
                Contact Info
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+917840882270"
                    className="flex items-start gap-3 text-white/60 hover:text-white text-sm transition-colors duration-150 group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-white/20 flex items-center justify-center shrink-0 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs text-white/40 mb-0.5">Phone</p>
                      78408 82270
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919911662492"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-white/60 hover:text-white text-sm transition-colors duration-150 group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-white/20 flex items-center justify-center shrink-0 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs text-white/40 mb-0.5">WhatsApp</p>
                      Chat with us
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-white/60 text-sm">
                  <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">Address</p>
                    Ayodhya, Uttar Pradesh – 224001
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative bg-deepGreen/90 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Vedic Heritage. All rights reserved.
            </p>
            <a
              href="https://optimaxstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 text-xs hover:text-white/80 transition-colors"
            >
              <TypeWriter
                segments={[
                  { text: 'Design and ', className: 'text-white/50' },
                  { text: '♥ ', className: 'text-ochre' },
                  { text: 'by ', className: 'text-white/50' },
                  { text: 'Optimax Studio', className: 'text-ochre font-semibold' },
                ]}
                speed={60}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
