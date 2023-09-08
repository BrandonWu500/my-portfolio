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
    </div>
  );
};
export default About;
