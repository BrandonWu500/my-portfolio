import { VariantProps, cva } from 'cva';
import Image from 'next/image';

const buttonStyles = cva(
  `uppercase text-neutral-50 font-bold border flex items-center gap-4`,
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
  return (
    <button className={buttonStyles({ intent, size })}>
      {label} {svgIcon && <Image src={svgIcon} alt="icon" />}
    </button>
  );
};
export default Button;
