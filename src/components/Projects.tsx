import { client } from '@/sanity/lib/client';
import ScrollDownIndicator from '@/src/components/ScrollDownIndicator';
import SectionTitle from '@/src/components/SectionTitle';
import ProjectCard from '@/src/components/ui/card/ProjectCard';
import { ProjectType } from '@/src/types';

async function getProjects(): Promise<ProjectType[]> {
  const query = `
  *[_type == 'project'] {
    title,
    description,
    codeLink,
    deployLink,
    designLink,
      _id,
      "imgUrl": image.asset->url
  }
  `;

  const projects = await client.fetch(query);

  return projects;
}

export const revalidate = 60;

type Props = {};
const Projects = async (props: Props) => {
  const projects = await getProjects();

  return (
    <div
      id="projects"
      className="relative z-10 w-full snap-center bg-neutral-900 py-4 text-neutral-50 lg:flex lg:h-screen lg:flex-col lg:pt-24"
    >
      <SectionTitle title="Projects" />
      <div className="flex flex-col items-center gap-8 lg:mt-12 lg:flex-row lg:justify-center lg:gap-[56px] xl:mt-24">
        {projects.map((project) => (
          <ProjectCard key={project._id} {...project} />
        ))}
      </div>

      {/* BACKGROUND DECORATION */}
      <div className="absolute left-0 right-0 -z-10 mx-auto hidden h-[150px] w-full -skew-y-[8deg] bg-neutral-800 lg:top-[50%] lg:block xl:top-[27.5%] xl:h-[540px]" />

      <ScrollDownIndicator />
    </div>
  );
};
export default Projects;
