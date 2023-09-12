'use client';

import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ui/card/ProjectCard';
import { BREAKPOINTS } from '@/constants/breakpoints';
import { projects } from '@/constants/data';
import useWindowDimensions from '@/hooks/useWindowDimensions';

type Props = {};
const Projects = (props: Props) => {
  const { width } = useWindowDimensions();

  return (
    <div
      id="projects"
      className="relative z-10 w-full bg-neutral-900 py-4 text-neutral-50 lg:h-[500px] xl:h-[1024px]"
    >
      <SectionTitle title="Projects" />
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-[56px] xl:mt-[230px]">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
            size={width && width >= BREAKPOINTS.XL ? 'large' : 'small'}
          />
        ))}
      </div>

      {/* BACKGROUND DECORATION */}
      <div className="absolute left-0 right-0 top-[35%] -z-10 mx-auto hidden h-[150px] w-full -skew-y-[8deg] bg-neutral-800 lg:block xl:top-[25%] xl:h-[550px]" />
    </div>
  );
};
export default Projects;
