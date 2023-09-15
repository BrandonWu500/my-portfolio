import { StaticImageData } from 'next/image';

export type ProjectType = {
  imgUrl: StaticImageData | string;
  title: string;
  description: string;
  codeLink: string;
  deployLink: string;
  designLink?: string;
  _id?: string;
};
