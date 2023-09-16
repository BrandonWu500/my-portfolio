'use client';

import { motion } from 'framer-motion';

import ScrollDownIndicator from '@/src/components/ScrollDownIndicator';
import SectionTitle from '@/src/components/SectionTitle';
import Button from '@/src/components/ui/button/Button';
import { useAbout } from '@/src/hooks/useAbout';

import arrowDownTray from '/public/arrow-down-tray.svg';

type Props = {};
const About = (props: Props) => {
  const { aboutData } = useAbout();

  return (
    <div
      id="about"
      className="relative w-full snap-center bg-neutral-900 px-8 py-4 text-neutral-50 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:pt-24 xl:pt-0"
    >
      <SectionTitle title="About Me" />
      <div className="mx-auto flex max-w-[330px] flex-col items-center gap-8 lg:max-w-md xl:mt-12 xl:grid xl:max-w-[1000px] xl:grid-cols-2 xl:justify-center">
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          viewport={{ once: true }}
          className="flex flex-col gap-5 xl:gap-8"
        >
          <p className="font-heading text-xl font-medium xl:text-4xl">
            Hi, my name is Brandon!
          </p>
          <p className="font-body text-lg font-medium xl:mb-5 xl:text-2xl">
            {`I'm a self-taught web designer and web developer.`}
          </p>

          {/* DESKTOP DOWNLOAD RESUME BUTTON */}
          <a
            href={aboutData?.resumeUrl + '?dl='}
            download
            className="hidden w-full xl:block"
          >
            <Button
              svgIcon={arrowDownTray}
              label="Download Resume"
              className="justify-center"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <div className="bg-neutral-700/50 px-8 py-4 font-body xl:text-lg">
            <p className="mb-2">I have:</p>
            <ul className="list-disc space-y-4 pl-4">
              {aboutData?.experience?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* MOBILE DOWNLOAD RESUME BUTTON */}
          <a
            href={aboutData?.resumeUrl + '?dl='}
            download
            className="w-full xl:hidden"
          >
            <Button
              svgIcon={arrowDownTray}
              label="Download Resume"
              className="w-full justify-center"
            />
          </a>
        </motion.div>
      </div>
      <ScrollDownIndicator />
    </div>
  );
};
export default About;
