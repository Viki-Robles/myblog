import React, { useState } from 'react';
import { Layout } from '../components/Layout.tsx/Layout';
import NotFound from './notFound';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ColorModeContext } from 'react-color-mode';
import Brightness4Rounded from '@material-ui/icons/Brightness4Rounded';
import Brightness7Rounded from '@material-ui/icons/Brightness7Rounded';
import { grey } from '@material-ui/core/colors';
import { createTheme, IconButton } from '@mui/material';
import { blue } from '@mui/material/colors';
import '../styles/globals.css';

const useStyles = makeStyles((theme) => ({
  iconButton: {
    float: 'right',
    [theme.breakpoints.down('sm')]: {
      float: 'none',
    },
  },
  paper: {
    height: 'auto',
    [theme.breakpoints.up('xl')]: {
      height: '100vh',
    },
  },
}));

function MyApp({ Component, pageProps }): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const classes = useStyles();

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            ...blue,
            ...(mode === 'dark' && {
              main: blue[900],
            }),
          },
          ...(mode === 'dark' && {
            background: {
              default: blue[300],
              paper: '#0E161E',
            },
          }),
          ...(mode === 'light' && {
            background: {
              default: blue[300],
              paper: '#ffff',
              // paper: '#ebf1fa',
            },
          }),
          text: {
            ...(mode === 'light'
              ? {
                  primary: grey[900],
                  secondary: grey[800],
                }
              : {
                  primary: '#fff',
                  secondary: grey[500],
                }),
          },
        },
      }),
    [mode],
  );

  if (loading) {
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Paper className={classes.paper}>
            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
              className={classes.iconButton}
            >
              {theme.palette.mode === 'dark' ? <Brightness7Rounded /> : <Brightness4Rounded />}
            </IconButton>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Paper>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  } else {
    <NotFound />;
  }
}

export default MyApp;
