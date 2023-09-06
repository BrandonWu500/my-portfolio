import { StaticImageData } from 'next/image';

export type ProjectType = {
  imgUrl: StaticImageData;
  title: string;
  description: string;
  codeLink: string;
  deployLink: string;
  designLink?: string;
};
