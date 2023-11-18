'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useMemo } from 'react';

import SectionTitle from '@/src/components/SectionTitle';
import Button from '@/src/components/ui/button/Button';
import { BREAKPOINTS } from '@/src/constants/breakpoints';
import { mySocialLinks } from '@/src/constants/data';
import useWindowDimensions from '@/src/hooks/useWindowDimensions';

import Icon from '@/src/components/icon';
import arrowUpCircle from '/public/arrow-up-circle.svg';

type Props = {};
const Contact = (props: Props) => {
  const { width } = useWindowDimensions();

  const svgSize = useMemo(() => {
    return width && width >= BREAKPOINTS.XL ? 48 : 32;
  }, [width]);

  return (
    <div
      id="contact"
      className="relative w-full snap-center bg-neutral-900 pt-4 text-neutral-50 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:pt-0"
    >
      <SectionTitle title="Contact Me" />
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
        viewport={{ once: true }}
        className="mx-auto flex max-w-[270px] flex-col items-center gap-8 font-body lg:mb-24 lg:max-w-none xl:mb-48 xl:gap-16"
      >
        <p className="text-lg font-medium xl:mt-8 xl:text-3xl">
          The best way to reach me is to send me an email.
        </p>
        <div className="flex items-center gap-3 xl:gap-6">
          <Icon icon={mySocialLinks.email.icon} />
          <p className="text-xl font-semibold xl:text-4xl">
            brandonwu500@gmail.com
          </p>
        </div>
      </motion.div>

      <motion.footer
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
        viewport={{ once: true }}
        className="mt-16 w-full bg-neutral-700 p-2 pb-5 lg:absolute lg:bottom-0 lg:p-0"
      >
        <div className="flex w-full max-w-[1440px] flex-col items-center gap-4 lg:mx-auto lg:grid lg:h-20 lg:grid-cols-3 lg:px-8 xl:h-[100px]">
          <Link href={'#hero'} className="lg:order-3 lg:flex lg:justify-end">
            <Button
              label="Back to Top"
              svgIcon={arrowUpCircle}
              intent={'secondary'}
              className="flex-row-reverse lg:pr-0"
              size={width && width >= BREAKPOINTS.XL ? 'medium' : 'small'}
            />
          </Link>
          <div className="flex items-center gap-8 lg:order-1">
            {Object.values(mySocialLinks)
              .filter((link) => link.label !== 'mail icon')
              .map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon icon={link.icon} />
                </Link>
              ))}
          </div>
          <p className="mt-2 font-body text-sm lg:order-2 lg:mt-0 lg:flex lg:justify-center xl:text-lg">
            © 2023 Brandon Wu. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  );
};
export default Contact;
