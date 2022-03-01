export interface BlogDataProps {
  id: number;
  title: string;
  link: string;
  tags: any;
  details: string;
}

export const blogData: BlogDataProps[] = [
  {
    id: 1,
    title: 'My journey from sales to software engineering',
    details:
      'I never studied CS or any STEM degree but I believe persistence, passion and love for what you do it will allow you to achieve anything you put in your mind. Is not impossible but like with everything it needs patience and hard work.',
    link: '/blog/my-journey-to-software-engineering',
    tags: ['javascript', 'typescript'],
  },

  {
    id: 2,
    title: 'Favouriting with Context and localStorage',
    link: '/blog/favourite',
    tags: ['javascript'],
    details:
      'Context and Provider are difficult concepts for most developers. I have been in many situation where I had to build a provider so I am gonna teach you on my way a simple favouriting feature like the hearts on Facebook and I hope it will be much easier fo ryou to build anything after that.',
  },
  {
    id: 3,
    title: 'Authentication with Firebase and TypeScript',
    link: '/blog/firebase',
    tags: ['javascript'],
    details:
      'This is a step by step guide that showcases the process on authenticating users with Firebase. It contains the steps to set up your project in Firebase console and then on your machine. The project contains a sign-in sign-out form using Yup library, Theme UI, TypeScript.',
  },
  {
    id: 3,
    title: 'React Query and TypeScript Data Structures ',
    link: '/blog/query',
    tags: ['javascript'],
    details:
      'Here you find some pre-maid TypeScript modelling schemas for data fetching with React Query, JWT, and mutations. It also includes some tips.You can use the scripts as you like.',
  },
];
