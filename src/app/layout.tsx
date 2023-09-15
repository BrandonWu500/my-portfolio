import type { Metadata } from 'next';
import { Besley, Inter } from 'next/font/google';

import Header from '@/src/components/ui/header/Header';

import './globals.css';

const besley = Besley({ subsets: ['latin'], variable: '--heading-font' });
const inter = Inter({ subsets: ['latin'], variable: '--body-font' });

export const metadata: Metadata = {
  title: 'Brandon Wu | Personal Portfolio',
  description:
    'Hi, my name is Brandon! I am a self-taught web designer and web developer with 1 year of experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${besley.variable} ${inter.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
