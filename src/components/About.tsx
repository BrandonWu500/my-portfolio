import Button from '@/components/ui/button/Button';
import { experience } from '@/constants/data';

import arrowDownTray from '/public/arrow-down-tray.svg';

type Props = {};
const About = (props: Props) => {
  return (
    <div
      id="about"
      className="w-screen bg-neutral-900 px-8 py-4 text-neutral-50"
    >
      <h2 className="mb-8 text-center font-heading text-[32px] font-semibold xl:mb-16">
        About Me
      </h2>
      <div className="mx-auto flex max-w-[330px] flex-col items-center gap-8 xl:grid xl:max-w-[1000px] xl:grid-cols-2 xl:justify-center">
        <div className="flex flex-col gap-5">
          <p className="font-heading text-xl font-medium">
            Hi, my name is Brandon!
          </p>
          <p className="font-body text-lg font-medium">
            {`I'm a self-taught web designer and web developer.`}
          </p>
          <a
            href={'/Resume-Brandon-Wu.pdf'}
            download
            className="hidden w-full xl:block"
          >
            <Button
              svgIcon={arrowDownTray}
              label="Download Resume"
              className="justify-center"
            />
          </a>
        </div>
        <div className="bg-neutral-700/50 px-8 py-4 font-body">
          <p className="mb-2">I have:</p>
          <ul className="list-disc space-y-4 pl-4">
            {experience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <a
          href={'/Resume-Brandon-Wu.pdf'}
          download
          className="w-full xl:hidden"
        >
          <Button
            svgIcon={arrowDownTray}
            label="Download Resume"
            className="w-full justify-center"
          />
        </a>
      </div>
    </div>
  );
};
export default About;
