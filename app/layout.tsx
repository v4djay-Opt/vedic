import type { Metadata, Viewport } from 'next';
import { Noto_Sans, Noto_Sans_Devanagari } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import './globals.css';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  variable: '--font-noto-sans-devanagari',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
  themeColor: '#2D4A3E',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://vedicheritage.in'),
  title: {
    default: 'Vedic Heritage — Ayodhya | Pashu Aahar & Puja Products',
    template: '%s | Vedic Heritage',
  },
  description:
    'Kapila Pashu Aahar dealer, pure havan samagri & cow dung cakes in Ayodhya. Free delivery 25km. Call now.',
  openGraph: {
    type: 'website',
    siteName: 'Vedic Heritage',
    title: 'Vedic Heritage — Ayodhya | Pashu Aahar & Puja Products',
    description:
      'Kapila Pashu Aahar dealer, pure havan samagri & cow dung cakes in Ayodhya. Free delivery 25km. Call now.',
    locale: 'en_IN',
    url: 'https://vedicheritage.in',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vedic Heritage — Ayodhya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vedic Heritage — Ayodhya | Pashu Aahar & Puja Products',
    description:
      'Kapila Pashu Aahar dealer, pure havan samagri & cow dung cakes in Ayodhya. Free delivery 25km.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${notoSansDevanagari.variable}`}
    >
      <body className="font-sans bg-cream text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
