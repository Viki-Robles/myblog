import React, { useState, useEffect } from 'react';
import { ThemeProvider, MuiThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import CssBaseline from '@mui/material/CssBaseline';
import { AnimatedWrapper } from '../components/AnimatedWrapper/AnimatedWrapper';
import { Layout } from '../components/Layout.tsx/Layout';
import NotFound from './notFound';
import { useDarkMode } from '../utils/useDarkMode';
import { createMuiTheme } from '@material-ui/core/styles';
import '../styles/globals.css';
import lightTheme from './../themes/themes';
import darkTheme from './../themes/themes';

function MyApp({ Component, pageProps }): JSX.Element {
  const { darkTheme } = useDarkMode();
  const [loading, setLoading] = useState<boolean>(true);

  if (loading) {
    return (
      <ThemeProvider theme={darkTheme}>
        <Paper>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          {/* <AnimatedWrapper children></AnimatedWrapper> */}
        </Paper>
      </ThemeProvider>
    );
  } else {
    <NotFound />;
  }
}

export default MyApp;
