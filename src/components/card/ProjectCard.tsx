import { ProjectType } from '@/types';
import { VariantProps, cva } from 'cva';
import { Besley, Inter } from 'next/font/google';
import Image from 'next/image';

import Link from 'next/link';
import { useMemo } from 'react';
import figmaIcon from '/public/figma.svg';
import githubIcon from '/public/github.svg';
import globeIcon from '/public/globe.svg';

const besley = Besley({ subsets: ['latin'], variable: '--heading-font' });
const inter = Inter({ subsets: ['latin'], variable: '--body-font' });

const projectCardStyles = cva(
  `${besley.variable} ${inter.variable} bg-neutral-700 text-neutral-50`,
  {
    variants: {
      size: {
        small: 'max-w-[350px]',
        large: 'max-w-[400px]',
      },
    },
  }
);

type Props = VariantProps<typeof projectCardStyles> & ProjectType;
const ProjectCard = ({
  imgUrl,
  title,
  description,
  codeLink,
  deployLink,
  designLink,
  size = 'small',
}: Props) => {
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
    <div className={projectCardStyles({ size })}>
      <Image
        src={imgUrl}
        alt="project thumbnail"
        width={imgWidth}
        height={imgHeight}
      />
      <div className="flex flex-col gap-4 p-4">
        <h5 className="font-heading text-lg font-bold">{title}</h5>
        <p className="max-w-xs font-body">{description}</p>
        <div className="flex gap-8">
          {designLink && (
            <Link
              href={designLink}
              className="flex items-center gap-2 font-body text-sm font-medium"
            >
              <Image src={figmaIcon} alt="figma icon" /> Design
            </Link>
          )}
          <Link
            href={codeLink}
            className="flex items-center gap-2 font-body text-sm font-medium"
          >
            <Image src={githubIcon} alt="github icon" /> Code
          </Link>
          <Link
            href={deployLink}
            className="flex items-center gap-2 font-body text-sm font-medium"
          >
            <Image src={globeIcon} alt="globe icon" /> Deployment
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
