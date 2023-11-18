import { motion } from 'framer-motion';
import { Inter } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

const inter = Inter({ subsets: ['latin'], variable: '--body-font' });

type Props = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  className?: string;
  animationDirection?: 'left' | 'right';
};
const Skill = ({
  icon: Icon,
  label,
  className,
  animationDirection = 'left',
}: Props) => {
  return (
    <motion.div
      initial={{
        x: animationDirection === 'left' ? -100 : 100,
      }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className={twMerge(
        `${inter.variable} flex flex-col items-center gap-2 p-2 font-body`,
        className
      )}
    >
      <Icon className={'h-12 w-12 xl:h-16 xl:w-16'} />
      <p className="mt-1">{label}</p>
    </motion.div>
  );
};
export default Skill;
