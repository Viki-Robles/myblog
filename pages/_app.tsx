import React, { useState } from 'react';
import { AnimatedWrapper } from '../components/AnimatedWrapper/AnimatedWrapper';
import { Layout } from '../components/Layout.tsx/Layout';
import NotFound from './notFound';
import '../styles/globals.css';

function MyApp({ Component, pageProps }): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);

  if (loading) {
    return (
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <AnimatedWrapper children></AnimatedWrapper>
      </>
    );
  } else {
    <NotFound />;
  }
}

export default MyApp;
