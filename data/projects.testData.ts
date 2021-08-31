export interface ProjectsProps {
  title: string;
  details: string;
  link?: string;
  technologies?: string;
  img?: string;
  id: string;
  role?: string;
  subtitle?: string;
}

export const projectsData: ProjectsProps[] = [
  {
    title: 'DFX by Digital Futures',
    subtitle: 'A recruitment platfrom that promotes diversity in the tech community.',
    details:
      'DFX is a recruitment web application that presents the skills and capabilites of Academy engineers to potential clients.',
    link: 'https://hellohub.com/',
    role:
      'Working with the tech team and contributing to build new features, refactoring code, working with integrations (for instance Firebase, Hasura GraphQl), working with APIS, TDD and reviewing code of younger members of the team ',
    technologies: 'TypeScript, React / Vite, GraphQL, Firebase, Hasura, Theme UI',
    img:
      'https://raw.githubusercontent.com/Viki-Robles/myblog/91885e2fb607deb6345cfdc63abbf48413e73cba/media/projects/image.svg',
    id: 'digital-futures',
  },
  {
    title: 'Hellohub Website',
    details:
      'An interactive marketing website which assists venue users, to register with Hellohub, and also providing them with information about the events that happening in their neighborhood.',
    link: 'https://hellohub.com/',
    technologies: 'JavaScript, React, Material UI',
    img:
      'https://raw.githubusercontent.com/Viki-Robles/myblog/782669627c6083e8f7213c7366e7f0022635c5b8/media/projects/portfoliohellohub-image.svg',
    id: 'hellohub',
    role: 'Responsible for the UI development of the new website.',
    subtitle:
      'A responsive website where venues can sign up and login to their account and learn more about the latest new',
  },
  {
    title: 'DrinkMeApp',
    details: 'That was the first team project I build during the bootcamp.',
    link: '',
    technologies: 'TypeScript,Vite, GraphQL, Firebase, Hasura, Theme UI',
    img: '/images/hellohub.png',
    id: 'drinkmeapp',
    subtitle:
      'An intercative application where users can get inspired on making cocktail or drinks during the days of COVID.',
    role: '',
  },
];
