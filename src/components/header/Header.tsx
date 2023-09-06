import { Besley, Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import Button from '../button/Button';
import mobileNavIcon from '/public/bars-3.svg';
import desktopLogo from '/public/desktop-logo.svg';
import mobileLogo from '/public/mobile-logo.svg';

const besley = Besley({ subsets: ['latin'], variable: '--heading-font' });
const inter = Inter({ subsets: ['latin'], variable: '--body-font' });

type Props = {};
const Header = (props: Props) => {
  return (
    <div
      className={`${besley.variable} ${inter.variable} sticky top-0 flex w-screen items-center justify-between bg-neutral-900 p-4 text-neutral-50`}
    >
      <Link href={'/'}>
        <Image src={mobileLogo} alt="logo" className="lg:hidden" />
        <Image src={desktopLogo} alt="logo" className="hidden lg:block" />
      </Link>

      <Image src={mobileNavIcon} alt="menu" className="lg:hidden" />

      <div className="hidden items-center gap-[72px] lg:flex">
        {/* DESKTOP NAV */}
        <nav>
          <ul className="flex items-center gap-[72px] font-heading text-2xl font-bold">
            <li>
              <Link href={'#hero'}>Home</Link>
            </li>
            <li>
              <Link href={'#about'}>About</Link>
            </li>
            <li>
              <Link href={'#skills'}>Skills</Link>
            </li>
            <li>
              <Link href={'#projects'}>Projects</Link>
            </li>
            <li>
              <Link href={'#contact'}>Contact</Link>
            </li>
          </ul>
        </nav>

        {/* DESKTOP CTA */}
        <Link href={'#contact'}>
          <Button label="Get in touch" size={'medium'} />
        </Link>
      </div>
    </div>
  );
};
export default Header;
