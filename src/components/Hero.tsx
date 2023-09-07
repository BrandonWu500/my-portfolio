import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/ui/button/Button';
import { myGithubLink, myLinkedinLink } from '@/constants/data';

import githubIcon from '/public/github.svg';
import linkedinIcon from '/public/linkedin.svg';
import mailIcon from '/public/mail.svg';
import headshot from '/public/my-portrait.jpg';

type Props = {};
const Hero = (props: Props) => {
  return (
    <div
      id="hero"
      className="heroBg flex flex-col items-center gap-12 px-12 py-7 text-neutral-50"
    >
      <div className="flex flex-col items-center gap-2">
        <Image
          src={headshot}
          alt="my headshot"
          width={100}
          height={100}
          className="relative h-[100px] w-[100px] rounded-full border-[3px] border-neutral-50 object-cover"
          priority
        />
        <h1 className="font-heading text-[40px] font-bold">Brandon Wu</h1>
        <h3 className="font-heading font-semibold text-neutral-100">
          {`Web Designer & Web Developer`}
        </h3>
      </div>
      <div className="flex items-center gap-12">
        <Link href={myGithubLink}>
          <Image src={githubIcon} alt="github icon" width={32} height={32} />
        </Link>
        <Link href={myLinkedinLink}>
          <Image src={linkedinIcon} alt="linkedin icon" />
        </Link>
        <Link href={'#contact'}>
          <Image src={mailIcon} alt="mail icon" />
        </Link>
      </div>
      <Link href={'#contact'}>
        <Button label="Contact Me" className="bg-transparent" />
      </Link>
    </div>
  );
};
export default Hero;
