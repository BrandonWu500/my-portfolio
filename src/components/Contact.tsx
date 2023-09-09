'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/ui/button/Button';
import { BREAKPOINTS } from '@/constants/breakpoints';
import { mySocialLinks } from '@/constants/data';
import useWindowDimensions from '@/hooks/useWindowDimensions';

import arrowUpCircle from '/public/arrow-up-circle.svg';

type Props = {};
const Contact = (props: Props) => {
  const { width } = useWindowDimensions();

  const svgSize = useMemo(() => {
    return width && width >= BREAKPOINTS.XL
      ? 48
      : width && width >= BREAKPOINTS.LG
      ? 32
      : 16;
  }, [width]);

  return (
    <div id="contact" className="w-screen bg-neutral-900 pt-4 text-neutral-50">
      <SectionTitle title="Contact Me" />
      <div className="mx-auto flex max-w-[250px] flex-col items-center gap-8 font-body lg:mb-24 lg:max-w-none xl:mb-48 xl:gap-16">
        <p className="font-medium lg:text-lg xl:text-3xl">
          The best way to reach me is to send me an email.
        </p>
        <div className="flex items-center gap-3 xl:gap-6">
          <Image
            src={mySocialLinks.email.icon}
            alt="mail icon"
            width={svgSize}
            height={svgSize}
          />
          <p className="font-semibold lg:text-xl xl:text-4xl">
            brandonwu500@gmail.com
          </p>
        </div>
      </div>

      <footer className="mt-16 bg-neutral-700 p-2 pb-5">
        <div className="flex w-full flex-col items-center gap-8 xl:container xl:mx-auto xl:grid xl:h-[100px] xl:grid-cols-3 xl:place-items-center xl:px-16">
          <Link href={'/'} className="xl:order-3">
            <Button
              label="Back to Top"
              svgIcon={arrowUpCircle}
              intent={'secondary'}
              className="flex-row-reverse"
              size={width && width >= BREAKPOINTS.XL ? 'medium' : 'small'}
            />
          </Link>
          <div className="flex items-center gap-12 xl:order-1">
            {Object.values(mySocialLinks)
              .filter((link) => link.label !== 'mail icon')
              .map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  className="relative h-[32px] w-[32px] lg:h-[36px] lg:w-[36px] xl:h-[48px] xl:w-[48px]"
                >
                  <Image src={link.icon} alt={link.label} fill />
                </Link>
              ))}
          </div>
          <p className="font-body text-sm xl:order-2 xl:text-lg">
            © 2023 Brandon Wu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Contact;
