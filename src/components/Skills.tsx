'use client';

import { motion } from 'framer-motion';

import ScrollDownIndicator from '@/src/components/ScrollDownIndicator';
import SectionTitle from '@/src/components/SectionTitle';
import Skill from '@/src/components/ui/skill/Skill';
import { favoriteTech, otherTech } from '@/src/constants/data';

type Props = {};
const Skills = (props: Props) => {
  return (
    <div
      id="skills"
      className="relative w-full snap-center bg-neutral-900 py-8 text-neutral-50 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:pt-24"
    >
      <SectionTitle title="Skills" />

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{ once: true }}
        className="w-full bg-neutral-700 p-5 text-center xl:mx-auto xl:max-w-4xl xl:p-8"
      >
        <h4 className="mb-6 font-heading text-lg font-medium lg:text-xl xl:mb-8 xl:font-body xl:text-2xl xl:uppercase xl:tracking-[6px]">
          My Favorite Tech
        </h4>
        <div className="mx-auto grid max-w-[250px] grid-cols-2 place-items-center gap-y-4 lg:flex lg:max-w-none lg:justify-center lg:gap-16">
          {favoriteTech.map((tech) => (
            <Skill icon={tech.icon} label={tech.label} key={tech.label} />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{ once: true }}
        className="mx-auto w-full bg-neutral-300 p-5 text-center text-neutral-700 xl:mt-8 xl:max-w-4xl xl:p-8"
      >
        <h4 className="mb-6 font-heading text-lg font-medium lg:text-xl xl:mb-8 xl:font-semibold">
          Other Skills I Have
        </h4>
        <div className="mx-auto grid max-w-xs grid-cols-3 place-items-center gap-y-4 lg:max-w-3xl lg:grid-cols-6 xl:max-w-none">
          {otherTech.map((tech) => (
            <Skill
              icon={tech.icon}
              label={tech.label}
              key={tech.label}
              animationDirection="right"
            />
          ))}
        </div>
      </motion.div>
      <ScrollDownIndicator />
    </div>
  );
};
export default Skills;
