import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  titleHindi?: string;
  price?: number | null;
  unit?: string;
  image?: string | null;
  badge?: string | null;
  slug: string;
  inquiryBased?: boolean;
}

export default function ProductCard({
  title,
  titleHindi,
  price,
  unit,
  image,
  badge,
  slug,
  inquiryBased = false,
}: ProductCardProps) {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-deepGreen/30 hover:shadow-xl hover:-translate-y-0.5">

      {/* Image area */}
      <div className="relative aspect-square bg-[#F9F9F9]">
        {badge && (
          <span className="absolute top-3 left-3 z-10 bg-deepGreen text-white text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full shadow-sm">
            {badge}
          </span>
        )}
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-5 transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <span className="text-5xl">🌿</span>
            <span className="text-gray-300 text-xs font-devanagari">वैदिक हेरिटेज</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-sm leading-tight truncate">
          {title}
        </h3>
        {titleHindi && (
          <p className="text-gray-400 text-[11px] mt-0.5 font-devanagari leading-snug truncate">
            {titleHindi}
          </p>
        )}

        {/* Price row */}
        <div className="flex items-baseline justify-between mt-3">
          {inquiryBased || !price ? (
            <span className="text-ochre font-semibold text-sm">Inquiry Based</span>
          ) : (
            <>
              <span className="font-black text-gray-900 text-base">₹{price.toLocaleString('en-IN')}</span>
              {unit && (
                <span className="text-gray-400 text-xs">/ {unit}</span>
              )}
            </>
          )}
        </div>

        {/* CTA */}
        <Link
          href={`/products/${slug}`}
          className="mt-3.5 flex items-center justify-center gap-1.5 w-full bg-deepGreen hover:bg-deepGreen/90 active:scale-[0.98] text-white text-sm font-semibold py-2.5 rounded-lg transition-all duration-200"
        >
          Order Now
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
