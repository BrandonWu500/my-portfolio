import { ProjectType } from '@/src/types';

import carRentalThumbnail from '/public/car-rental-project-thumbnail.png';
import figmaIcon from '/public/figma-large.svg';
import githubDarkIcon from '/public/github-dark.svg';
import githubIcon from '/public/github.svg';
import jiraIcon from '/public/jira.svg';
import linkedinIcon from '/public/linkedin.svg';
import mailIcon from '/public/mail.svg';
import myPortfolioThumbnail from '/public/my-portfolio-thumbnail.png';
import nextjsIcon from '/public/nextjs.svg';
import reactIcon from '/public/react.svg';
import sanityIcon from '/public/sanity.svg';
import shopifyIcon from '/public/shopify.svg';
import tailwindIcon from '/public/tailwind.svg';
import typescriptIcon from '/public/typescript.svg';
import vercelIcon from '/public/vercel.svg';

export const projects: ProjectType[] = [
  {
    imgUrl: carRentalThumbnail,
    title: 'Car Rental Web App',
    description:
      'A personal project I created with a similar design to Airbnb.',
    codeLink: 'https://github.com/BrandonWu500/car-rental-web-app',
    deployLink: 'https://brandonwu500-car-rental-web-app-v1.vercel.app',
  },
  {
    imgUrl: myPortfolioThumbnail,
    title: 'My Portfolio',
    description:
      'My personal portfolio, which is the website you are currently viewing!',
    codeLink: 'https://github.com/BrandonWu500/my-portfolio',
    deployLink: 'https://brandonwu500-my-portfolio.vercel.app',
    designLink:
      'https://www.figma.com/file/WnCAyzR6Wf6o70u9D2JOp9/My-Portfolio-Web-Design?type=design&node-id=109%3A8334&mode=design&t=s4uJvIVlACkYJkgZ-1',
  },
];

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
  {
    url: '#contact',
    label: 'Contact',
  },
];

export const experience = [
  '1 year of experience with web development (using Next.js)',
  '1 year of experience with web design (using Figma)',
  '1 year of experience with Git and GitHub',
  '1 year of experience with CI/CD (using GitHub Actions and Vercel)',
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
    svgIcon: jiraIcon,
    label: 'Jira',
  },
  {
    svgIcon: githubDarkIcon,
    label: 'GitHub',
  },
  {
    svgIcon: vercelIcon,
    label: 'Vercel',
  },
];
