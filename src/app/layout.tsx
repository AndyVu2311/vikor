import type { Metadata } from 'next';
import './globals.css';
import { Header } from './components/Header';
import localFont from 'next/font/local';

import { ReactLenis } from '@/app/utils/lenis';
import Footer from './components/Footer';

const primaryFont = localFont({
  variable: '--font-primary-suisse',
  display: 'swap',
  src: './fonts/SuisseIntl-Medium.woff2',
});

const primaryFontSemibold = localFont({
  variable: '--font-primary-suisse-semibold',
  display: 'swap',
  src: './fonts/SuisseIntl-SemiBold.woff2',
});

const secondaryFont = localFont({
  variable: '--font-secondary-obviously',
  display: 'swap',
  src: './fonts/Obviously-CondensedBlack.woff2',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='theme-color' content='#fff6e5' />
      </head>
      <ReactLenis root>
        <body
          className={`${primaryFont.variable} ${secondaryFont.variable} ${primaryFontSemibold.variable} bg-(--swatch-light) antialiased`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
