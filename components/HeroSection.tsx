import Link from 'next/link';

const heroStats = [
  { icon: '👨‍🌾', value: '500+', label: 'Farmers Served' },
  { icon: '🥛', value: '25%', label: 'Milk Increase' },
  { icon: '✅', value: '100%', label: 'Pure' },
];

const statsBar = [
  { icon: '📦', value: '10K+', label: 'Orders Delivered' },
  { icon: '🚚', value: 'Free Delivery', label: 'Within 25km' },
  { icon: '�', value: 'Ayodhya Based', label: 'Uttar Pradesh' },
  { icon: '🏆', value: 'Since 2020', label: 'Trusted Brand' },
];

const WA_HREF =
  'https://wa.me/919911662492?text=' +
  encodeURIComponent('नमस्ते! मुझे Vedic Heritage के products के बारे में जानकारी चाहिए।');

export default function HeroSection() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — Content */}
            <div className="order-2 lg:order-1">
              {/* Pill label */}
              <div className="inline-flex items-center gap-1.5 bg-deepGreen/10 border border-deepGreen/20 text-deepGreen text-[11px] font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full mb-6">
                🌿 AYODHYA KA VISHWAAS
              </div>

              {/* H1 */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-deepGreen leading-[1.1] tracking-tight">
                Premium Cattle Feed
                <br />
                <span className="text-ochre">for Better Milk</span>{' '}
                <span className="text-deepGreen">Health</span>
              </h1>

              {/* Hindi sub-heading */}
              <p className="text-gray-400 text-sm mt-2 font-devanagari">
                बेहतर दूध उत्पादन के लिए श्रेष्ठ पशु आहार
              </p>

              {/* Subtitle */}
              <p className="text-gray-600 text-base mt-5 max-w-lg leading-relaxed">
                Pure &amp; natural cattle feed trusted by farmers across Ayodhya.
                Authorized distributor of Kapila Pashu Aahar.
              </p>
              <p className="text-gray-400 text-sm mt-1.5 font-devanagari">
                अयोध्या के किसानों का विश्वास — शुद्ध और प्राकृतिक पशु आहार
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-deepGreen hover:bg-deepGreen/90 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm"
                >
                  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp pe Order Karein
                </Link>
                <a
                  href="tel:+917840882270"
                  className="inline-flex items-center gap-2 border-2 border-deepGreen text-deepGreen hover:bg-deepGreen hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                  </svg>
                  Call Now
                </a>
              </div>

              {/* Inline stats row */}
              <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-deepGreen/10">
                {heroStats.map((s) => (
                  <div key={s.label} className="flex items-center gap-2.5">
                    <span className="text-2xl">{s.icon}</span>
                    <div>
                      <p className="font-black text-deepGreen text-lg leading-none">{s.value}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Video */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 sm:w-[380px] sm:h-[380px] lg:w-[460px] lg:h-[460px]">
                {/* Decorative rotated bg slab */}
                <div className="absolute inset-6 bg-deepGreen/10 rounded-3xl rotate-6" />
                <div className="absolute inset-6 bg-ochre/10 rounded-3xl -rotate-3" />
                {/* Main video frame */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-deepGreen/10">
                  <video
                    src="/videos/hero-bg.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className="bg-deepGreen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {statsBar.map((s) => (
              <div key={s.label} className="flex items-center gap-3 px-4 sm:px-6 py-5">
                <span className="text-2xl shrink-0">{s.icon}</span>
                <div className="min-w-0">
                  <p className="text-white font-bold text-sm sm:text-base leading-tight truncate">{s.value}</p>
                  <p className="text-white/50 text-xs">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
