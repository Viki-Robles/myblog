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
    img: '/images/hellohub.png',
    id: 'digital-futures',
  },
  {
    title: 'Hellohub Website',
    details:
      'An interactive website which assists users to sign up/ sign in  to their hellohub account and also provides them with information about the events that happening . I build this project from scratch alongside with a designer using React and Material UI. The difficult part of the website was the Authentication of users using Firebase however ut was fun but also very intersting to see how the whole process is done isnce most of the web apps are using kind of the same logic. ',
    link: 'https://hellohub.com/',
    technologies: 'JavaScript, React, Material UI',
    img: 'https://github.com/Viki-Robles/myblog/blob/main/media/projects/hellohub.png?raw=true',
    id: 'hellohub',
    role: 'Working with the team of desingers I managed the end to end build of the Hellohub website on React',
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
