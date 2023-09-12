type Props = {
  title: string;
};
const SectionTitle = ({ title }: Props) => {
  return (
    <h2 className="mb-8 text-center font-heading text-[32px] font-semibold xl:my-8 xl:text-5xl">
      {title}
    </h2>
  );
};
export default SectionTitle;
