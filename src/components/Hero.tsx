import Image from 'next/image';

import headshot from '/public/my-portrait.jpg';

type Props = {};
const Hero = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-12 bg-neutral-900 px-12 py-7 text-neutral-50">
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
    </div>
  );
};
export default Hero;
