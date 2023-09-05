import { VariantProps, cva } from 'cva';

const buttonStyles = cva(`uppercase text-neutral-50 font-bold border`, {
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
});

type Props = VariantProps<typeof buttonStyles> & {};
const Button = ({ intent = 'primary', size = 'small' }: Props) => {
  return <button className={buttonStyles({ intent, size })}>Button</button>;
};
export default Button;
