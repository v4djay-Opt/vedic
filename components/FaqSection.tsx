'use client';

import { useState } from 'react';

export interface FaqItem {
  q: string;
  qHindi?: string;
  a: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  heading?: string;
  headingHindi?: string;
}

export default function FaqSection({
  faqs,
  heading = 'Frequently Asked Questions',
  headingHindi,
}: FaqSectionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section>
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-black text-deepGreen">{heading}</h2>
        {headingHindi && (
          <p className="text-gray-400 text-sm mt-1.5 font-devanagari">{headingHindi}</p>
        )}
      </div>

      <div className="space-y-3 max-w-3xl mx-auto">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left hover:bg-cream transition-colors duration-150"
              aria-expanded={open === i}
            >
              <div>
                <p className="font-semibold text-gray-900 text-sm leading-snug">{faq.q}</p>
                {faq.qHindi && (
                  <p className="text-gray-400 text-xs font-devanagari mt-0.5 leading-snug">
                    {faq.qHindi}
                  </p>
                )}
              </div>
              <svg
                className={`w-5 h-5 text-deepGreen shrink-0 mt-0.5 transition-transform duration-200 ${
                  open === i ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-200 ${
                open === i ? 'max-h-60' : 'max-h-0'
              }`}
            >
              <div className="px-5 pb-5 pt-3 bg-cream border-t border-gray-100">
                <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
