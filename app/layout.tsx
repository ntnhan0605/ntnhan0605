import { FooterComponent } from '@/components/FooterComponent';
import { HeaderComponent } from '@/components/HeaderComponent';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { EB_Garamond, Josefin_Sans, Open_Sans } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const OpenSansFont = Open_Sans({
  subsets: ['vietnamese', 'latin', 'latin-ext'],
  variable: '--font-open-sans',
  style: ['normal', 'italic'],
  weight: ['300', '400', '500', '600', '700', '800'],
});
const JosefinSansFont = Josefin_Sans({
  subsets: ['vietnamese', 'latin', 'latin-ext'],
  variable: '--font-josefin-sans',
  weight: ['400', '600'],
});
const EBGaramond = EB_Garamond({
  subsets: ['vietnamese', 'latin', 'latin-ext'],
  variable: '--font-eb-garamond',
  style: ['normal', 'italic'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Furniture Store',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          JosefinSansFont.variable,
          OpenSansFont.variable,
          EBGaramond.variable,
          'bg-white',
        )}
      >
        <HeaderComponent />
        <main>{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
