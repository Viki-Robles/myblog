import React from 'react';
import Head from 'next/head';
import { HomePage } from '../components/HomePage/HomePage';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <HomePage />
    </>
  );
}
