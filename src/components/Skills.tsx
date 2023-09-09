import SectionTitle from '@/components/SectionTitle';
import Skill from '@/components/ui/skill/Skill';
import { favoriteTech, otherTechMobile } from '@/constants/data';

type Props = {};
const Skills = (props: Props) => {
  return (
    <div id="skills" className="w-screen bg-neutral-900 pt-8 text-neutral-50">
      <SectionTitle title="Skills" />

      <div className="w-full bg-neutral-700 p-5 text-center">
        <h4 className="mb-4 font-heading text-lg font-medium">
          My Favorite Tech
        </h4>
        <div className="mx-auto grid max-w-[250px] grid-cols-2 gap-y-4">
          {favoriteTech.map((tech) => (
            <Skill
              svgIcon={tech.svgIcon}
              label={tech.label}
              key={tech.label}
              size={'large'}
            />
          ))}
        </div>
      </div>

      <div className="w-full bg-neutral-200 p-5 text-center text-neutral-900">
        <h4 className="mb-4 font-heading text-lg font-semibold">
          Other Tech I Use
        </h4>
        <div className="mx-auto grid max-w-xs grid-cols-3 gap-y-4">
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
