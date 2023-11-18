import IconFigma from '@/src/components/icons/figma';
import IconGithub from '@/src/components/icons/github';
import IconHtml5 from '@/src/components/icons/html';
import IconAdobeillustrator from '@/src/components/icons/illustrator';
import IconJavascript from '@/src/components/icons/javascript';
import IconNextjs from '@/src/components/icons/nextjs';
import IconReact from '@/src/components/icons/react';
import IconShopify from '@/src/components/icons/shopify';
import IconTailwindcss from '@/src/components/icons/tailwind';
import IconTypescript from '@/src/components/icons/typescript';
import githubIcon from '/public/github.svg';
import mailIcon from '/public/mail.svg';
import upworkIcon from '/public/upwork.svg';

export const mySocialLinks = {
  github: {
    url: 'https://github.com/BrandonWu500',
    icon: githubIcon,
    label: 'GitHub icon',
  },
  upwork: {
    url: 'https://www.upwork.com/freelancers/~0111ef3ba061c9abd8',
    icon: upworkIcon,
    label: 'Upwork icon',
  },
  email: {
    url: '#contact',
    icon: mailIcon,
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
    icon: IconAdobeillustrator,
    label: 'Illustrator',
  },
  {
    icon: IconHtml5,
    label: 'HTML',
  },
  {
    icon: IconJavascript,
    label: 'JavaScript',
  },
  {
    icon: IconReact,
    label: 'React',
  },
  {
    icon: IconGithub,
    label: 'GitHub',
  },
];
