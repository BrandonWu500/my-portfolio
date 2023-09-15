import { VariantProps, cva } from 'cva';
import { motion } from 'framer-motion';
import { Besley, Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

import { BREAKPOINTS } from '../../../../src/constants/breakpoints';
import useWindowDimensions from '../../../../src/hooks/useWindowDimensions';
import { ProjectType } from '../../../../src/types';

import figmaIcon from '/public/figma.svg';
import githubIcon from '/public/github.svg';
import globeIcon from '/public/globe.svg';

const besley = Besley({ subsets: ['latin'], variable: '--heading-font' });
const inter = Inter({ subsets: ['latin'], variable: '--body-font' });

const projectCardStyles = cva(
  `${besley.variable} ${inter.variable} bg-neutral-700 text-neutral-50 shadow max-w-[350px] xl:max-w-[400px]`
);

type Props = VariantProps<typeof projectCardStyles> & ProjectType;
const ProjectCard = ({
  imgUrl,
  title,
  description,
  codeLink,
  deployLink,
  designLink,
}: Props) => {
  const { width } = useWindowDimensions();

  const size = useMemo(() => {
    return width && width >= BREAKPOINTS.XL ? 'large' : 'small';
  }, [width]);

  const imgWidth = useMemo(() => {
    switch (size) {
      case 'small':
        return 350;

      case 'large':
        return 400;

      default:
        return 350;
    }
  }, [size]);
  const imgHeight = useMemo(() => {
    switch (size) {
      case 'small':
        return 150;

      case 'large':
        return 180;

      default:
        return 150;
    }
  }, [size]);

  return (
    <motion.div
      initial={{
        scale: 0.5,
        opacity: 0,
      }}
      whileInView={{
        scale: 1,
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className={projectCardStyles()}
    >
      <Image
        src={imgUrl}
        alt="project thumbnail"
        width={imgWidth}
        height={imgHeight}
      />
      <div className="flex flex-col gap-4 p-4">
        <h5
          className={twMerge(
            'font-heading text-lg font-bold',
            size === 'large' && 'text-xl'
          )}
        >
          {title}
        </h5>
        <p
          className={twMerge(
            'max-w-xs font-body',
            size === 'large' && 'text-lg'
          )}
        >
          {description}
        </p>
        <div className="flex gap-8">
          {designLink && (
            <Link
              href={designLink}
              rel="noopener noreferrer"
              target="_blank"
              className={twMerge(
                'flex items-center gap-2 font-body text-sm font-medium',
                size === 'large' && 'text-base'
              )}
            >
              <Image src={figmaIcon} alt="figma icon" /> Design
            </Link>
          )}
          <Link
            href={codeLink}
            rel="noopener noreferrer"
            target="_blank"
            className={twMerge(
              'flex items-center gap-2 font-body text-sm font-medium',
              size === 'large' && 'text-base'
            )}
          >
            <Image src={githubIcon} alt="github icon" /> Code
          </Link>
          <Link
            href={deployLink}
            rel="noopener noreferrer"
            target="_blank"
            className={twMerge(
              'flex items-center gap-2 font-body text-sm font-medium',
              size === 'large' && 'text-base'
            )}
          >
            <Image src={globeIcon} alt="globe icon" /> Deployment
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectCard;
