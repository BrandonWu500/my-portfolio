import SectionTitle from '@/components/SectionTitle';
import Skill from '@/components/ui/skill/Skill';
import { favoriteTech } from '@/constants/data';

type Props = {};
const Skills = (props: Props) => {
  return (
    <div id="skills" className="w-screen bg-neutral-900 pt-8 text-neutral-50">
      <SectionTitle title="Skills" />
      <div className="w-full bg-neutral-700 p-5 text-center">
        <h4 className="mb-4 font-heading text-lg font-medium">
          My Favorite Tech
        </h4>
        <div className="grid grid-cols-2 gap-y-4">
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
    </div>
  );
};
export default Skills;
