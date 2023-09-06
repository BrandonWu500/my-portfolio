import { VariantProps, cva } from 'cva';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { useMemo } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--body-font' });

const buttonStyles = cva(
  `${inter.variable} font-body uppercase text-neutral-50 font-bold border flex items-center gap-4`,
  {
    variants: {
      intent: {
        primary: `bg-neutral-900 border-neutral-700`,
        secondary: `bg-neutral-700`,
      },
      size: {
        small: `py-3 px-8 border text-sm tracking-[3.5px]`,
        medium: `py-4 px-10 border-2 text-lg tracking-[4.5px]`,
        large: `py-6 px-12 border-[3px] text-2xl tracking-[6px]`,
      },
    },
  }
);

type Props = VariantProps<typeof buttonStyles> & {
  label: string;
  svgIcon?: any;
};
const Button = ({
  intent = 'primary',
  size = 'small',
  label,
  svgIcon,
}: Props) => {
  const svgSize = useMemo(() => {
    if (!svgIcon) return;

    switch (size) {
      case 'small':
        return 24;

      case 'medium':
        return 28;

      case 'large':
        return 32;

      default:
        return 24;
    }
  }, [size, svgIcon]);

  return (
    <button className={buttonStyles({ intent, size })}>
      {label}
      {svgIcon && (
        <Image src={svgIcon} alt="icon" width={svgSize} height={svgSize} />
      )}
    </button>
  );
};
export default Button;
