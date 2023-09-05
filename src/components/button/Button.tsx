import { VariantProps, cva } from 'cva';

const buttonStyles = cva(`uppercase text-neutral-50 font-bold`, {
  variants: {
    intent: {
      primary: `bg-neutral-900 border-neutral-700`,
      secondary: `bg-neutral-700`,
    },
  },
});

type Props = VariantProps<typeof buttonStyles> & {};
const Button = ({ intent = 'primary' }: Props) => {
  return <button className={buttonStyles({ intent })}>Button</button>;
};
export default Button;
