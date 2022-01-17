export interface BlogDataProps {
  id: number;
  title: string;
  link: string;
  tags: any;
}

export const blogData: BlogDataProps[] = [
  {
    id: 1,
    title: 'My journey from sales to software engineering',
    link: '/blog/my-journey-to-software-engineering',
    tags: ['javascript', 'typescript'],
  },
  {
    id: 2,
    title: 'Authentication with Firebase and React FULL GUIDE',
    link: '/blog/my-journey-to-software-engineering',
    tags: ['javascript'],
  },
  {
    id: 3,
    title: 'Favouriting with Context and localStorage',
    link: '/blog/favourite',
    tags: ['javascript'],
  },
  {
    id: 4,
    title: 'Authentication with Firebase and React FULL GUIDE',
    link: '/blog/my-journey-to-software-engineering',
    tags: ['javascript'],
  },
  {
    id: 5,
    title: 'My journey from sales to software engineering',
    link: '/blog/my-journey-to-software-engineering',
    tags: ['javascript'],
  },
  {
    id: 61,
    title: 'Authentication with Firebase and React FULL GUIDE',
    link: '/blog/my-journey-to-software-engineering',
    tags: ['typescript'],
  },
];
