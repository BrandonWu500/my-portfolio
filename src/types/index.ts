import { StaticImageData } from 'next/image';

export type ProjectType = {
  imgUrl: StaticImageData | string;
  title: string;
  description: string;
  codeLink: string;
  deployLink: string;
  _id?: string;
};

export type AboutType = {
  experience: string[];
  resumeUrl: string;
};
