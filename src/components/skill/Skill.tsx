import { VariantProps, cva } from 'cva';
import { Inter } from 'next/font/google';
import Image, { StaticImageData } from 'next/image';
import { useMemo } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--body-font' });

const skillStyles = cva(
  `${inter.variable} font-body flex flex-col items-center gap-2 p-2`,
  {
    variants: {
      size: {
        small: 'bg-neutral-200 text-neutral-900 text-xs',
        large: 'bg-neutral-700 text-neutral-50',
      },
    },
  }
);

type Props = VariantProps<typeof skillStyles> & {
  svgIcon: StaticImageData;
  label: string;
};
const Skill = ({ size = 'small', svgIcon, label }: Props) => {
  const svgSize = useMemo(() => {
    if (!svgIcon) return;

    switch (size) {
      case 'small':
        return 24;

      case 'large':
        return 48;

      default:
        return 24;
    }
  }, [size, svgIcon]);

  return (
    <div className={skillStyles({ size })}>
      <Image src={svgIcon} alt="skill icon" width={svgSize} height={svgSize} />
      <p className="font-medium">{label}</p>
    </div>
  );
};
export default Skill;
