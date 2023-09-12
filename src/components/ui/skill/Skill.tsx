import { VariantProps, cva } from 'cva';
import { motion } from 'framer-motion';
import { Inter } from 'next/font/google';
import Image, { StaticImageData } from 'next/image';
import { useMemo } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--body-font' });

const skillStyles = cva(
  `${inter.variable} font-body flex flex-col items-center gap-2 p-2`,
  {
    variants: {
      intent: {
        primary: 'text-neutral-50',
        secondary: 'text-neutral-900',
      },
      size: {
        small: 'text-xs',
        medium: '',
        large: 'text-xl gap-4',
      },
    },
  }
);

type Props = VariantProps<typeof skillStyles> & {
  svgIcon: StaticImageData;
  label: string;
  animationDirection?: 'left' | 'right';
};
const Skill = ({
  size = 'small',
  intent = 'primary',
  svgIcon,
  label,
  animationDirection = 'left',
}: Props) => {
  const svgSize = useMemo(() => {
    if (!svgIcon) return;

    switch (size) {
      case 'small':
        return 24;

      case 'medium':
        return 48;

      case 'large':
        return 72;

      default:
        return 24;
    }
  }, [size, svgIcon]);

  return (
    <motion.div
      initial={{
        x: animationDirection === 'left' ? -100 : 100,
      }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className={skillStyles({ size, intent })}
    >
      <Image src={svgIcon} alt="skill icon" width={svgSize} height={svgSize} />
      <p className="">{label}</p>
    </motion.div>
  );
};
export default Skill;
