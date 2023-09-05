import { VariantProps, cva } from 'cva';

const buttonStyles = cva(`uppercase text-neutral-50 font-bold`);

type Props = VariantProps<typeof buttonStyles> & {};
const Button = (props: Props) => {
  return <button className={buttonStyles()}>Button</button>;
};
export default Button;
