import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/ui/button/Button';

import { heroSocialLinks } from '@/constants/data';
import headshot from '/public/my-portrait.jpg';

type Props = {};
const Hero = (props: Props) => {
  return (
    <div
      id="hero"
      className="heroBg flex flex-col items-center gap-12 px-12 py-7 text-neutral-50"
    >
      <div className="flex flex-col items-center gap-2 lg:gap-4">
        <div className="relative h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] xl:h-[200px] xl:w-[200px]">
          <Image
            src={headshot}
            alt="my headshot"
            className="rounded-full border-[3px] border-neutral-50 object-cover xl:border-4"
            priority
            fill
            sizes="(max-width: 1024px) 100px, (max-width: 1280px) 150px, 200px"
          />
        </div>
        <h1 className="font-heading text-[40px] font-bold lg:text-5xl xl:text-7xl">
          Brandon Wu
        </h1>
        <h3 className="font-heading font-semibold text-neutral-100 lg:text-xl xl:text-[32px]">
          {`Web Designer & Web Developer`}
        </h3>
      </div>
      <div className="flex items-center gap-12 lg:gap-[72px]">
        {heroSocialLinks.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className="relative h-[32px] w-[32px] lg:h-[36px] lg:w-[36px] xl:h-[48px] xl:w-[48px]"
          >
            <Image src={link.icon} alt="github icon" fill />
          </Link>
        ))}
      </div>
      <Link href={'#contact'}>
        <Button label="Contact Me" className="bg-transparent" />
      </Link>
    </div>
  );
};
export default Hero;
