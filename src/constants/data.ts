import figmaIcon from '/public/figma-large.svg';
import githubIcon from '/public/github.svg';
import linkedinIcon from '/public/linkedin.svg';
import mailIcon from '/public/mail.svg';
import nextjsIcon from '/public/nextjs.svg';
import githubDarkIcon from '/public/other-tech/github.svg';
import illustratorIcon from '/public/other-tech/illustrator.svg';
import jiraIcon from '/public/other-tech/jira.svg';
import reactIcon from '/public/other-tech/react.svg';
import shopifyIcon from '/public/other-tech/shopify.svg';
import vercelIcon from '/public/other-tech/vercel.svg';
import tailwindIcon from '/public/tailwind.svg';
import typescriptIcon from '/public/typescript.svg';

export const mySocialLinks = {
  github: {
    url: 'https://github.com/BrandonWu500',
    icon: githubIcon,
    label: 'GitHub icon',
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/brandonwu500',
    icon: linkedinIcon,
    label: 'LinkedIn icon',
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
    svgIcon: nextjsIcon,
    label: 'Next.js',
  },
  {
    svgIcon: typescriptIcon,
    label: 'TypeScript',
  },
  {
    svgIcon: tailwindIcon,
    label: 'Tailwind',
  },
  {
    svgIcon: figmaIcon,
    label: 'Figma',
  },
];

export const otherTech = [
  {
    svgIcon: shopifyIcon,
    label: 'Shopify',
  },
  {
    svgIcon: illustratorIcon,
    label: 'Illustrator',
  },
  {
    svgIcon: reactIcon,
    label: 'React',
  },
  {
    svgIcon: githubDarkIcon,
    label: 'GitHub',
  },
  {
    svgIcon: jiraIcon,
    label: 'Jira',
  },
  {
    svgIcon: vercelIcon,
    label: 'Vercel',
  },
];
