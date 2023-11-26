import IconFigma from '@/src/components/icon/figma';
import IconGithub from '@/src/components/icon/github';
import IconAdobeillustrator from '@/src/components/icon/illustrator';
import IconJirasoftware from '@/src/components/icon/jira';
import IconMail from '@/src/components/icon/mail';
import IconNextjs from '@/src/components/icon/nextjs';
import IconAdobephotoshop from '@/src/components/icon/photoshop';
import IconReact from '@/src/components/icon/react';
import IconShopify from '@/src/components/icon/shopify';
import IconTailwindcss from '@/src/components/icon/tailwind';
import IconTypescript from '@/src/components/icon/typescript';
import IconUpwork from '@/src/components/icon/upwork';

export const mySocialLinks = {
  github: {
    url: 'https://github.com/BrandonWu500',
    icon: IconGithub,
    label: 'GitHub icon',
  },
  upwork: {
    url: 'https://www.upwork.com/freelancers/~0111ef3ba061c9abd8',
    icon: IconUpwork,
    label: 'Upwork icon',
  },
  email: {
    url: '#contact',
    icon: IconMail,
    label: 'mail icon',
  },
};

export const desktopNavLinks = [
  {
    url: '#hero',
    label: 'Home',
  },
  {
    url: '#projects',
    label: 'Projects',
  },
  {
    url: '#skills',
    label: 'Skills',
  },
];

export const mobileNavLinks = [
  {
    url: '#hero',
    label: 'Home',
  },
  {
    url: '#projects',
    label: 'Projects',
  },
  {
    url: '#skills',
    label: 'Skills',
  },
  {
    url: '#contact',
    label: 'Contact',
  },
];

export const favoriteTech = [
  {
    icon: IconNextjs,
    label: 'Next.js',
  },
  {
    icon: IconTypescript,
    label: 'TypeScript',
  },
  {
    icon: IconTailwindcss,
    label: 'Tailwind',
  },
  {
    icon: IconShopify,
    label: 'Shopify',
  },
];

export const otherTech = [
  {
    icon: IconFigma,
    label: 'Figma',
  },
  {
    icon: IconAdobephotoshop,
    label: 'Photoshop',
  },
  {
    icon: IconAdobeillustrator,
    label: 'Illustrator',
  },
  {
    icon: IconReact,
    label: 'React',
  },
  {
    icon: IconGithub,
    label: 'GitHub',
  },
  {
    icon: IconJirasoftware,
    label: 'Jira',
  },
];
