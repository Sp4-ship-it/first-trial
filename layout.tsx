import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import { CartProvider } from '@/lib/cart-context';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CartDrawer } from '@/components/cart-drawer';
import { WhatsAppFloat } from '@/components/whatsapp-float';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kuziva Cakes | Baked with Love, Celebrated with Joy',
  description:
    'Kuziva Cakes — premium custom cakes for weddings, birthdays, graduations & corporate events. Based at Chinhoyi University Campus, Chinhoyi. Order on WhatsApp.',
  keywords: [
    'Kuziva Cakes',
    'custom cakes Chinhoyi',
    'wedding cakes Chinhoyi',
    'birthday cakes Zimbabwe',
    'bakery Chinhoyi University',
    'red velvet cake',
    'chocolate cake',
  ],
  openGraph: {
    title: 'Kuziva Cakes | Baked with Love, Celebrated with Joy',
    description:
      'Premium custom cakes for weddings, birthdays, graduations & corporate events. Chinhoyi University Campus, Chinhoyi.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kuziva Cakes | Baked with Love, Celebrated with Joy',
    description:
      'Premium custom cakes for every celebration. Chinhoyi University Campus, Chinhoyi.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${poppins.variable} font-body antialiased`}
      >
        <CartProvider>
          <Header />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
          <CartDrawer />
          <WhatsAppFloat />
        </CartProvider>
      </body>
    </html>
  );
}
