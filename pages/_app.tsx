import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout.tsx/Layout';
import '../styles/globals.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import { AnimatedWrapper } from '../components/AnimatedWrapper/AnimatedWrapper';
import NotFound from './notFound';

function MyApp({ Component, pageProps }): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <AnimatedWrapper children></AnimatedWrapper>
      </ThemeProvider>
    );
  } else {
    <NotFound />;
  }
}

export default MyApp;
