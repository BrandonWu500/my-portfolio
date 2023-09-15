'use client';

import { motion } from 'framer-motion';

import { BREAKPOINTS } from '@/src/constants/breakpoints';
import useWindowDimensions from '@/src/hooks/useWindowDimensions';

type Props = {};
const ScrollDownIndicator = (props: Props) => {
  const { width } = useWindowDimensions();

  if (width && width < BREAKPOINTS.LG) return;

  return (
    <motion.div
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
      className="absolute bottom-10 right-12 z-50 flex items-center gap-4 text-neutral-50 drop-shadow"
    >
      <span className="h-[1px] w-8 bg-neutral-50 2xl:w-12"></span>
      <p className="font-body text-xs font-medium uppercase tracking-[3.5px] 2xl:text-sm">
        Scroll Down
      </p>
    </motion.div>
  );
};
export default ScrollDownIndicator;
