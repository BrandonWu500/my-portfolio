'use client';

import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/ui/button/Button';
import useWindowDimensions from '@/hooks/useWindowDimensions';

import { BREAKPOINTS } from '@/constants/breakpoints';
import { mySocialLinks } from '@/constants/data';
import headshot from '/public/my-portrait.jpg';

type Props = {};
const Hero = (props: Props) => {
  const { width } = useWindowDimensions();

  return (
    <div
      id="hero"
      className="heroBg flex w-full snap-center flex-col items-center gap-12 py-7 pb-12 text-neutral-50 lg:h-screen lg:justify-center lg:pt-24 xl:gap-[72px]"
    >
      <div className="flex flex-col items-center gap-2 lg:gap-4">
        <div className="relative h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] xl:my-4 xl:h-[200px] xl:w-[200px]">
          <Image
            src={headshot}
            alt="my headshot"
            className="rounded-full border-[3px] border-neutral-50 object-cover xl:border-4"
            priority
            fill
            sizes="(max-width: 1024px) 100px, (max-width: 1280px) 150px, 200px"
          />
        </div>
        <h1 className="font-heading text-[40px] font-bold lg:text-5xl xl:my-4 xl:text-7xl">
          Brandon Wu
        </h1>
        <h3 className="font-heading font-semibold text-neutral-100 lg:text-xl xl:text-[32px]">
          {`Web Designer & Web Developer`}
        </h3>
      </div>
      <div className="flex items-center gap-12 lg:gap-[72px]">
        {Object.values(mySocialLinks).map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className="relative h-[32px] w-[32px] lg:h-[36px] lg:w-[36px] xl:h-[48px] xl:w-[48px]"
          >
            <Image src={link.icon} alt={link.label} fill />
          </Link>
        ))}
      </div>
      <div className="flex w-full items-center justify-center lg:gap-12 xl:gap-[72px]">
        <Link href={'#contact'}>
          {width && width >= BREAKPOINTS.XL ? (
            <Button label="Contact Me" intent={'secondary'} size={'medium'} />
          ) : width && width >= BREAKPOINTS.LG ? (
            <Button label="Contact Me" intent={'secondary'} />
          ) : (
            <Button label="Contact Me" className="bg-transparent" />
          )}
        </Link>
        <Link href={'#about'}>
          {width && width >= BREAKPOINTS.XL ? (
            <Button
              label="Learn More"
              className="bg-transparent"
              size={'medium'}
            />
          ) : (
            width &&
            width >= BREAKPOINTS.LG && (
              <Button label="Learn More" className="bg-transparent" />
            )
          )}
        </Link>
      </div>
    </div>
  );
};
export default Hero;
