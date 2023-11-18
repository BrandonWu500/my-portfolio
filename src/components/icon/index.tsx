import { twMerge } from 'tailwind-merge';

type Props = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
};
const Icon = ({ icon: Icon, className }: Props) => {
  return <Icon className={twMerge('h-8 w-8 xl:h-10 xl:w-10', className)} />;
};
export default Icon;
