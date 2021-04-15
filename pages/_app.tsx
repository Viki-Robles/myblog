import React, { useEffect } from 'react';
import { Layout } from '../components/Layout.tsx/Layout';
import '../styles/globals.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import { AnimatedWrapper } from '../components/AnimatedWrapper/AnimatedWrapper';

function MyApp({ Component, pageProps }): JSX.Element {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Layout>
      <AnimatedWrapper>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AnimatedWrapper>
    </Layout>
  );
}

export default MyApp;
