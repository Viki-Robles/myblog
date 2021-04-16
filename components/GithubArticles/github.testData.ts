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
    title: 'NPM PACKAGE',
    details: 'A handmade npm package for box shadows in CSS',
    href: 'https://www.npmjs.com/package/myshadowbox',
    icon: 'icon',
  },
  {
    id: 2,
    title: 'COOKIE BANNER WITH TYPESCRIPT',
    details: 'A cookie policy banner without any npm package.',
    href: 'https://github.com/Viki-Robles/cookieBanner',
    icon: 'icon',
  },
  {
    id: 3,
    title: 'DATA FROM GREENHOUSE TO FIRESTORE',
    details: 'An example of how to pull and push data between systems',
    href: 'https://github.com/Viki-Robles/Data-Transfer-from-GreenHouse-To-Firestore',
    icon: 'icon',
  },
  {
    id: 4,
    title: 'SIGNUP FORM WITH FIREBASE AUTH',
    details: 'Firebase Authentication',
    href: '',
    icon: 'icon',
  },
  {
    id: 5,
    title: 'JOB LISTING APP',
    details: 'An example of how to return data from Github API',
    href: 'https://github.com/Viki-Robles/joblisting',
    icon: 'icon',
  },
  {
    id: 6,
    title: 'JOB LISTING APP',
    details: 'An example of how to return data from Github API',
    href: 'https://github.com/Viki-Robles/joblisting',
    icon: 'icon',
  },
];
