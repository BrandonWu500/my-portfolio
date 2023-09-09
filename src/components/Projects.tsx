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
    <div id="projects" className="w-screen bg-neutral-900 py-4 text-neutral-50">
      <SectionTitle title="Projects" />
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-16">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
            size={width && width >= BREAKPOINTS.XL ? 'large' : 'small'}
          />
        ))}
      </div>
    </div>
  );
};
export default Projects;
