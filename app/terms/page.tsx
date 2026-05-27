import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Vedic Heritage',
  description: 'Terms of Service for Vedic Heritage, Ayodhya — conditions governing use of our website and products.',
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: `By accessing and using the Vedic Heritage website (vedicheritage.in), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.`,
  },
  {
    title: '2. Nature of Business',
    body: `Vedic Heritage is a physical retail and wholesale business based in Ayodhya, Uttar Pradesh. Our website is informational and inquiry-based. We do not process online payments or accept orders through the website. All purchases are conducted in person or via WhatsApp/phone confirmation.`,
  },
  {
    title: '3. Product Information',
    body: `We make every effort to ensure product descriptions, prices, and availability information on this website are accurate. However, this information is subject to change without notice. Prices displayed are indicative and may vary for bulk or wholesale orders. Final pricing is confirmed at the time of purchase.`,
  },
  {
    title: '4. Inquiries & Communications',
    body: `When you submit an inquiry through our website (via WhatsApp button or contact form), you consent to being contacted by our team regarding your inquiry. We will not use your contact details for unsolicited marketing.`,
  },
  {
    title: '5. Intellectual Property',
    body: `All content on this website — including text, images, logos, and design — is the property of Vedic Heritage or its content suppliers and is protected under applicable intellectual property laws. You may not reproduce or distribute any content without our written permission.`,
  },
  {
    title: '6. Disclaimer of Warranties',
    body: `This website and its content are provided "as is" without warranties of any kind, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or harmful components.`,
  },
  {
    title: '7. Limitation of Liability',
    body: `Vedic Heritage shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or products. Our total liability to you for any claim shall not exceed the amount paid for the specific product in question.`,
  },
  {
    title: '8. Third-Party Links',
    body: `Our website may contain links to third-party websites (e.g., WhatsApp, Google Maps). These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them.`,
  },
  {
    title: '9. Governing Law',
    body: `These Terms of Service are governed by the laws of India. Any disputes arising from use of this website shall be subject to the exclusive jurisdiction of courts in Ayodhya, Uttar Pradesh.`,
  },
  {
    title: '10. Changes to Terms',
    body: `We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated date. Continued use of the website after changes are posted constitutes your acceptance of the revised terms.`,
  },
  {
    title: '11. Contact',
    body: `For any questions regarding these Terms of Service, contact Vedic Heritage at Ayodhya, Uttar Pradesh – 224001. Phone: +91 99999 99999.`,
  },
];

export default function TermsPage() {
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
          <h1 className="text-3xl sm:text-4xl font-black text-white">Terms of Service</h1>
          <p className="text-white/50 text-sm mt-2">Last updated: May 2025</p>
          <p className="text-white/70 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using the Vedic Heritage website. These terms
            govern your use of our website and services.
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

          <div className="pt-6 border-t border-gray-100 flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-deepGreen hover:text-ochre font-semibold text-sm transition-colors"
            >
              Privacy Policy
            </Link>
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
