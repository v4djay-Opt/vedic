import Image from 'next/image';
import Link from 'next/link';

const PHONE = '+917840882270';
const WHATSAPP = '+919911662492';

interface ProductCardProps {
  title: string;
  titleHindi?: string;
  price?: number | null;
  unit?: string;
  image?: string | null;
  badge?: string | null;
  slug: string;
  size?: string | null;
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
  size,
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

        {size && (
          <span className="inline-flex items-center mt-2 bg-ochre/10 border border-ochre/20 text-ochre text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full">
            📐 {size}
          </span>
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
        <div className="mt-3.5 flex gap-2">
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`नमस्ते! I want a bulk inquiry for: ${title}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1 bg-deepGreen hover:bg-deepGreen/90 active:scale-[0.98] text-white text-xs font-semibold py-2.5 rounded-lg transition-all duration-200"
          >
            <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Bulk Inquiry
          </a>
          <a
            href={`tel:${PHONE}`}
            className="flex-1 flex items-center justify-center gap-1 border-2 border-deepGreen text-deepGreen hover:bg-deepGreen hover:text-white active:scale-[0.98] text-xs font-semibold py-2.5 rounded-lg transition-all duration-200"
          >
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
            </svg>
            Quick Call
          </a>
        </div>
      </div>
    </div>
  );
}
