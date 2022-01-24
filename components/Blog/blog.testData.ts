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
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    link: '/blog/my-journey-to-software-engineering',
    tags: ['javascript', 'typescript'],
  },

  {
    id: 2,
    title: 'Favouriting with Context and localStorage',
    link: '/blog/favourite',
    tags: ['javascript'],
    details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
  },
  {
    id: 3,
    title: 'Authentication with Firebase and TypeScript',
    link: '/blog/firebase',
    tags: ['javascript'],
    details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
  },
];
