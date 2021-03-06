export interface TechnicalWritingDataProps {
  id: number;
  article: string;
  href: string;
  published: string;
}

export const getTechnicalWritingData: TechnicalWritingDataProps[] = [
  {
    id: 8,
    href: 'https://dev.to/vikirobles/adapter-pattern-hbo',
    article: 'The Adapter Pattern?',
    published: 'Published on May 13, 2022',
  },
  {
    id: 7,
    article: 'How to create an auth login system with axios interceptors (TypeScript) PART I',
    href: 'https://dev.to/vikirobles/how-to-create-an-auth-login-system-with-axios-interceptors-typescript-2k11',
    published: 'Published on Apr 29, 2022',
  },
  {
    id: 7,
    article: 'Cookie Policy Banner with localStorage',
    href: 'https://dev.to/vikirobles/how-to-make-a-cookie-policy-banner-without-any-npm-package-12j5',
    published: 'Published on Apr 7, 2021',
  },
  {
    id: 6,
    article: 'Firebase Analytics Guide',
    href: 'https://dev.to/vikirobles/simplest-firebase-analytics-guide-for-your-project-2kj6',
    published: 'Published on March 20, 2021',
  },
  {
    id: 5,
    article: 'Greenhouse data with Firestore using Typescript',
    href: 'https://dev.to/vikirobles/how-to-connect-greenhouse-data-with-firestore-using-typescript-25a4',
    published: 'Published on March 10, 2021',
  },
  {
    id: 4,
    article: 'Reduce method with an input of a string or an object',
    href: 'https://dev.to/vikirobles/how-reduce-works-behind-the-scenes-m2o',
    published: 'Published on March 5, 2021',
  },
  {
    id: 3,
    article: 'Fetch Data using TypeScript and React Query',
    href: 'https://dev.to/vikirobles/fetch-data-using-typescript-and-react-query-d9l',
    published: 'Published on Feb 26, 2021',
  },
  {
    id: 2,
    article: 'Regular Expressions CheatSheet',
    href: 'https://dev.to/vikirobles/regular-expressions-cheatsheet-n47',
    published: 'Published on Feb 16, 2021',
  },
  {
    id: 2,
    article: 'How to make a password validation with Regex or Yup',
    href: 'https://dev.to/vikirobles/how-to-make-a-password-validation-with-regex-or-yup-4eh3',
    published: 'Published on Jul 20, 2021',
  },
];
