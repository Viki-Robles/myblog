import React, { useState, useEffect } from 'react';
import { Layout } from '../components/Layout.tsx/Layout';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Paper from '@material-ui/core/Paper';
import { ColorModeContext } from 'react-color-mode';
import FillCircleLoader from 'react-loaders-kit/lib/fillCircle/FillCircleLoader';
// import { WifiLoader } from 'react-awesome-loaders';
// import Brightness4Rounded from '@material-ui/icons/Brightness4Rounded';
// import Brightness7Rounded from '@material-ui/icons/Brightness7Rounded';
import { grey } from '@material-ui/core/colors';
import { createTheme } from '@mui/material';
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
    boxShadow: 'none',
    [theme.breakpoints.up('xl')]: {
      height: '100vh',
    },
  },
  loader: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(0, -50%)',
  },
}));

function MyApp({ Component, pageProps }): JSX.Element {
  const [loading, setIsLoading] = useState<boolean>(true);
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

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

  const loaderProps = {
    loading,
    size: 35,
    duration: 1,
    colors: ['#5d75e7', '#4A63D6'],
  };

  return (
    <>
      {!loading ? (
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <Paper className={classes.paper}>
              {/* <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
              className={classes.iconButton}
            >
              {theme.palette.mode === 'dark' ? <Brightness7Rounded /> : <Brightness4Rounded />}
            </IconButton> */}
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Paper>
          </ThemeProvider>
        </ColorModeContext.Provider>
      ) : (
        <Box className={classes.loader}>
          <FillCircleLoader {...loaderProps} />
        </Box>
      )}
    </>
  );
}

export default MyApp;
