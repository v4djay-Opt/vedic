import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Vedic Heritage — Premium Cattle Feed & Puja Products, Ayodhya',
  description:
    'Kapila Pashu Aahar, Havan Samagri, Cow Dung Cake, Hawan Sticks — authentic Vedic products from Ayodhya, Uttar Pradesh.',
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
