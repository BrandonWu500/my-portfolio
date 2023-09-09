import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ui/card/ProjectCard';
import { projects } from '@/constants/data';

type Props = {};
const Projects = (props: Props) => {
  return (
    <div id="projects" className="w-screen bg-neutral-900 py-4 text-neutral-50">
      <SectionTitle title="Projects" />
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-16">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
