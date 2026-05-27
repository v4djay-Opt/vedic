import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Vedic Heritage',
  description: 'Privacy Policy for Vedic Heritage, Ayodhya — how we collect, use and protect your information.',
};

const sections = [
  {
    title: '1. Information We Collect',
    body: `We collect information you voluntarily provide when you contact us via WhatsApp, call us, or fill out any inquiry form on our website. This may include your name, phone number, and the nature of your inquiry. We do not collect payment information as we do not process online transactions.`,
  },
  {
    title: '2. How We Use Your Information',
    body: `Information you provide is used solely to respond to your inquiries, provide product information, and process bulk orders. We may also use your contact details to follow up on previous conversations or inform you of new products relevant to your inquiry.`,
  },
  {
    title: '3. WhatsApp Communication',
    body: `When you click any "WhatsApp" button on our site, you are redirected to WhatsApp with a pre-filled message. This interaction is governed by WhatsApp's own privacy policy. We do not store or log WhatsApp message content.`,
  },
  {
    title: '4. Cookies & Analytics',
    body: `Our website may use basic browser cookies to improve functionality. We may use anonymous analytics tools (e.g., Google Analytics) to understand visitor behaviour. These tools do not identify you personally. You may disable cookies in your browser settings.`,
  },
  {
    title: '5. Third-Party Services',
    body: `Our website uses Sanity CMS for content management. Product images and blog content are served via Sanity's CDN. We also use Next.js (Vercel infrastructure) for hosting. These services have their own privacy policies which you are encouraged to review.`,
  },
  {
    title: '6. Data Sharing',
    body: `We do not sell, rent, or share your personal information with third parties for marketing purposes. Information is only shared with service providers necessary to operate our website, and only to the extent required.`,
  },
  {
    title: '7. Data Retention',
    body: `We retain contact information only as long as necessary to complete the business purpose for which it was collected. You may request deletion of your information at any time by contacting us directly.`,
  },
  {
    title: '8. Your Rights',
    body: `You have the right to request access to, correction of, or deletion of any personal data we hold about you. To exercise these rights, contact us via WhatsApp or phone as listed on our Contact page.`,
  },
  {
    title: '9. Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. The updated version will be indicated by a revised date at the top of this page. Continued use of our website after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: '10. Contact Us',
    body: `For any questions regarding this Privacy Policy, please contact us at Vedic Heritage, Ayodhya, Uttar Pradesh – 224001. Phone: +91 99999 99999.`,
  },
];

export default function PrivacyPage() {
  return (
    <main>
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
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 border border-white/20 text-white/90 text-[11px] font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full mb-5">
            Legal
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white">Privacy Policy</h1>
          <p className="text-white/50 text-sm mt-2">Last updated: May 2025</p>
          <p className="text-white/70 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
            At Vedic Heritage, we are committed to protecting your privacy. This policy explains what
            information we collect, how we use it, and your rights regarding that information.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-base font-bold text-deepGreen mb-2">{s.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}

          <div className="pt-6 border-t border-gray-100">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-deepGreen hover:text-ochre font-semibold text-sm transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
