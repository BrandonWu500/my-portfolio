import { motion } from 'framer-motion';

type Props = {
  title: string;
};
const SectionTitle = ({ title }: Props) => {
  return (
    <motion.h2
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      viewport={{ once: true }}
      className="mb-8 text-center font-heading text-[32px] font-semibold xl:my-8 xl:text-5xl"
    >
      {title}
    </motion.h2>
  );
};
export default SectionTitle;
