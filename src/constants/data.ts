import { ProjectType } from '@/types';
import carRentalThumbnail from '/public/car-rental-project-thumbnail.png';

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

export const myGithubLink = 'https://github.com/BrandonWu500';
export const myLinkedinLink = 'https://www.linkedin.com/in/brandonwu500';
