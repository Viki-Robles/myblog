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
      'I never studied CS or any STEM degree but I believe persistence, passion and love for what you do it will allow you to achieve anything you put in your mind. Is not impossible but is hard work. Thats my story.',
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
      'Thats a solo project that showcases who to authenticate with Firebase and using TypeScript. It also has some cool links that you can use.',
  },
  {
    id: 3,
    title: 'React Form with Yup and TypeScript',
    link: '/blog/form',
    tags: ['javascript'],
    details:
      'This is a full guide on building a beautiful form using React, yup library and typeScript. I am sure you can enjoy it and you can use it on your personal projects or interview tests.',
  },
];
