import { VariantProps, cva } from 'cva';
import { Inter } from 'next/font/google';
import Image, { StaticImageData } from 'next/image';

const inter = Inter({ subsets: ['latin'], variable: '--body-font' });

const skillStyles = cva(
  `${inter.variable} bg-neutral-200 text-neutral-900 font-body flex flex-col items-center gap-2 p-2`,
  {
    variants: {
      size: {
        small: '',
      },
    },
  }
);

type Props = VariantProps<typeof skillStyles> & {
  svgIcon: StaticImageData;
  label: string;
};
const Skill = ({ size = 'small', svgIcon, label }: Props) => {
  return (
    <div className={skillStyles({ size })}>
      <Image src={svgIcon} alt="skill icon" width={32} height={32} />
      <p className="text-xs font-medium">{label}</p>
    </div>
  );
};
export default Skill;
