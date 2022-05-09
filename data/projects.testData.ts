export interface ProjectsDataModel {
  title: string;
  details: string;
  link?: string;
  technologies?: string;
  img?: string;
  id: string;
  role?: string;
  subtitle?: string;
}

export const projectsData: ProjectsDataModel[] = [
  {
    title: 'Commento',
    details:
      'One of my small achievements. This is Firebase authentication register form application build in React & TypeScript.  Is using firebase authentication and some other bits and pieces.',
    link: 'https://commentto.vercel.app/',
    technologies: 'Firebase v9, React, TypeScript, Theme UI',
    img: '/comm.svg',
    id: 'commento',
  },
  {
    title: 'DFX by Digital Futures',
    subtitle: 'A recruitment platfrom that promotes diversity in the tech community.',
    details:
      'DFX is a recruitment web application that presents the skills and capabilites of Academy engineers to potential clients. It contains a pool of candidates with very diverse backgrounds.',
    link: 'https://hellohub.com/',
    role:
      'Working with the tech team and contributing to build new features, refactoring code, working with integrations (for instance Firebase, Hasura GraphQl), working with APIS, TDD and reviewing code of younger members of the team ',
    technologies: 'TypeScript, React / Vite, GraphQL, Firebase, Hasura, Theme UI',
    img: '/dfx.svg',
    id: 'dfx',
  },
  {
    title: 'Hellohub',
    details:
      'An interactive marketing website which assists venue users, to register with Hellohub, and also providing them with information about the events that happening in their neighborhood.',
    link: 'https://hellohub.com/',
    technologies: 'JavaScript, React, Material UI',
    img:
      'https://raw.githubusercontent.com/Viki-Robles/myblog/ef4c7c9840e7d99aa17f6c7279c97ee0196d4b53/public/hellohub-emu.svg',
    id: 'hellohub',
    role:
      'Responsible for the UI development of the new website and the implementation of a new user authentication system.',
    subtitle:
      'A responsive website where venues can sign up and login to their account and learn more about the latest news in the neighborhood.',
  },
];
