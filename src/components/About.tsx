import { experience } from '@/constants/data';

type Props = {};
const About = (props: Props) => {
  return (
    <div
      id="about"
      className="flex w-screen flex-col gap-8 bg-neutral-900 px-8 py-4 text-neutral-50"
    >
      <h2 className="text-center font-heading text-[32px] font-semibold">
        About Me
      </h2>
      <div className="mx-auto flex max-w-[315px] flex-col gap-5">
        <p className="font-heading text-xl font-medium">
          Hi, my name is Brandon!
        </p>
        <p className="font-body text-lg font-medium">{`I'm a self-taught web designer and web developer.`}</p>
      </div>
      <div className="mx-auto max-w-[330px] bg-neutral-700/50 px-8 py-4 font-body">
        <p className="mb-2">I have:</p>
        <ul className="list-disc space-y-4 pl-4">
          {experience.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default About;
