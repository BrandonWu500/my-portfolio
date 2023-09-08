import { ProjectType } from '@/types';

import carRentalThumbnail from '/public/car-rental-project-thumbnail.png';
import githubIcon from '/public/github.svg';
import linkedinIcon from '/public/linkedin.svg';
import mailIcon from '/public/mail.svg';

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
    imgUrl: carRentalThumbnail,
    title: 'My Portfolio',
    description:
      'My personal portfolio, which is the website you are currently viewing!',
    codeLink: 'https://github.com/BrandonWu500/my-portfolio',
    deployLink: '',
    designLink:
      'https://www.figma.com/file/WnCAyzR6Wf6o70u9D2JOp9/My-Portfolio-Web-Design?type=design&node-id=109%3A8334&mode=design&t=s4uJvIVlACkYJkgZ-1',
  },
];

export const heroSocialLinks = [
  {
    url: 'https://github.com/BrandonWu500',
    icon: githubIcon,
  },
  {
    url: 'https://www.linkedin.com/in/brandonwu500',
    icon: linkedinIcon,
  },
  {
    url: '#contact',
    icon: mailIcon,
  },
];

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
