export interface GithuDataProps {
  id: number;
  title: string;
  href: string;
  details: string;
  icon: string;
}

export const githubData: GithuDataProps[] = [
  {
    id: 1,
    title: 'NPM Package',
    details: 'A handmade npm package for box shadows in CSS',
    href: '',
    icon: 'icon',
  },
  {
    id: 2,
    title: 'Cookie Banner with TypeScript',
    details: 'A cookie policy banner without any npm package.',
    href: '',
    icon: 'icon',
  },
  {
    id: 3,
    title: 'Transfering Data from Greenhouse to Firestore',
    details: 'An example of how to pull and push data between systems.',
    href: '',
    icon: 'icon',
  },
  {
    id: 4,
    title: 'Signup Form with Firebase Auth',
    details: 'Login - Log out/ Firebase Authentication',
    href: '',
    icon: 'icon',
  },
  {
    id: 5,
    title: 'Job Listing App',
    details: 'An example of how to return data from Github API',
    href: '',
    icon: 'icon',
  },
];
