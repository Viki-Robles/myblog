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
  // {
  //   title: 'Hellohub Website',
  //   details:
  //     'An interactive marketing website which assists venue users, to register with Hellohub, and also providing them with information about the events that happening in their neighborhood.',
  //   link: 'https://hellohub.com/',
  //   technologies: 'JavaScript, React, Material UI',
  //   img:
  //     'https://raw.githubusercontent.com/Viki-Robles/myblog/95300411ce17b06c92a23d6057496512ae47728e/media/projects/hellohub.svg',
  //   id: 3,
  //   role: 'Responsible for the UI development of the new website.',
  //   subtitle:
  //     'A responsive website where venues can sign up and login to their account and learn more about the latest news in the neighborhood.',
  // },
  // {
  //   title: 'DrinkMeApp',
  //   details:
  //     'That was the first team project I build during the bootcamp. The application collects 3.000+ of cocktail recipes for users to choose from based on ingredients or other preferences.',
  //   link: 'https://drink-me-app.vercel.app/',
  //   technologies: 'React, JavaScript, Material UI, Web API',
  //   img:
  //     'https://raw.githubusercontent.com/Viki-Robles/myblog/5acf796822d73d3828d3da4706ce2aa7067eb4a7/media/projects/portfoliodrinkmeapp.svg',
  //   id: 4,
  //   subtitle:
  //     'An intercative application where users can get inspired on making cocktail or drinks during the days of COVID.',
  //   role: 'Responsible for the design and the implementation of the details page of each cocktail.',
  // },
];
