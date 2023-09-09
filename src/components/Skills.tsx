'use client';

import SectionTitle from '@/components/SectionTitle';
import Skill from '@/components/ui/skill/Skill';
import { BREAKPOINTS } from '@/constants/breakpoints';
import { favoriteTech, otherTechMobile } from '@/constants/data';
import useWindowDimensions from '@/hooks/useWindowDimensions';

type Props = {};
const Skills = (props: Props) => {
  const { width } = useWindowDimensions();

  return (
    <div id="skills" className="w-screen bg-neutral-900 pt-8 text-neutral-50">
      <SectionTitle title="Skills" />

      <div className="w-full bg-neutral-700 p-5 text-center xl:mx-auto xl:mb-16 xl:max-w-4xl xl:border xl:border-neutral-700 xl:bg-transparent xl:p-8">
        <h4 className="mb-4 font-heading text-lg font-medium xl:mb-8 xl:font-body xl:text-2xl xl:uppercase xl:tracking-[6px]">
          My Favorite Tech
        </h4>
        <div className="mx-auto grid max-w-[250px] grid-cols-2 place-items-center gap-y-4 lg:flex lg:max-w-none lg:justify-center lg:gap-16">
          {favoriteTech.map((tech) => (
            <Skill
              svgIcon={tech.svgIcon}
              label={tech.label}
              key={tech.label}
              size={width && width >= BREAKPOINTS.XL ? 'large' : 'medium'}
            />
          ))}
        </div>
      </div>

      <div className="w-full bg-neutral-200 p-5 text-center text-neutral-900">
        <h4 className="mb-4 font-heading text-lg font-semibold">
          Other Tech I Use
        </h4>
        <div className="mx-auto grid max-w-xs grid-cols-3 place-items-center gap-y-4">
          {otherTechMobile.map((tech) => (
            <Skill
              svgIcon={tech.svgIcon}
              label={tech.label}
              key={tech.label}
              intent={'secondary'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Skills;
