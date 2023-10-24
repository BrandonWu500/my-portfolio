'use client';

import { motion } from 'framer-motion';
import { Besley, Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { desktopNavLinks, mobileNavLinks } from '../../../constants/data';

import Button from '../button/Button';

import mobileNavIcon from '/public/bars-3.svg';
import desktopLogo from '/public/desktop-logo.svg';
import mobileLogo from '/public/mobile-logo.svg';
import closeIcon from '/public/x-mark.svg';

const besley = Besley({ subsets: ['latin'], variable: '--heading-font' });
const inter = Inter({ subsets: ['latin'], variable: '--body-font' });

type Props = {};
const Header = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${besley.variable} ${inter.variable} fixed top-0 z-50 w-full bg-neutral-900 text-neutral-50`}
    >
      <motion.div
        initial={{
          y: -500,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="mx-auto flex h-24 max-w-[1440px] items-center justify-between p-8 xl:justify-between"
      >
        <Link
          href={'#hero'}
          className="xl:hidden"
          onClick={() => setIsOpen(false)}
        >
          <Image src={mobileLogo} alt="Brandon Wu logo" />
        </Link>

        <Link href={'#hero'} className="hidden xl:block">
          <Image src={desktopLogo} alt="Brandon Wu logo" />
        </Link>

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <Image src={closeIcon} alt="close" width={32} height={32} />
          ) : (
            <Image src={mobileNavIcon} alt="menu" />
          )}
        </button>

        {/* MOBILE NAV OVERLAY */}
        {isOpen && (
          <div
            className={
              'fixed left-0 top-0 z-40 mt-24 h-screen w-full bg-neutral-900/80'
            }
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        <div className="hidden items-center gap-12 lg:flex">
          {/* DESKTOP NAV */}
          <nav>
            <ul className="flex items-center gap-12 font-heading xl:text-lg">
              {desktopNavLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* DESKTOP CTA */}
          <Link href={'#contact'} className="hidden lg:block">
            <Button label="Get in touch" size={'small'} />
          </Link>
        </div>
      </motion.div>

      {/* MOBILE NAV */}
      <div
        className={twMerge(
          'fixed -left-[250px] top-0 z-50 mt-24 h-screen w-[250px] bg-neutral-900 transition-transform duration-500 ease-in-out lg:hidden',
          isOpen && 'translate-x-[250px]'
        )}
      >
        <ul className="flex flex-col gap-8 p-8 pt-6 font-heading text-xl">
          {mobileNavLinks.map((link) => (
            <li key={link.label} onClick={() => setIsOpen(false)}>
              <Link href={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Header;
