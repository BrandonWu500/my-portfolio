import figmaIcon from '/public/figma-large.svg';
import githubIcon from '/public/github.svg';
import linkedinIcon from '/public/linkedin.svg';
import mailIcon from '/public/mail.svg';
import nextjsIcon from '/public/nextjs.svg';
import githubDarkIcon from '/public/other-tech/github.svg';
import jiraIcon from '/public/other-tech/jira.svg';
import reactIcon from '/public/other-tech/react.svg';
import sanityIcon from '/public/other-tech/sanity.svg';
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

export const navLinks = [
  {
    url: '#hero',
    label: 'Home',
  },
  {
    url: '#about',
    label: 'About',
  },
  {
    url: '#skills',
    label: 'Skills',
  },
  {
    url: '#projects',
    label: 'Projects',
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
    svgIcon: sanityIcon,
    label: 'Sanity',
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
