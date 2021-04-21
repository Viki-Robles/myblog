import React, { Fragment } from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  link: {
    paddingRight: '25px',
    color: '#B5B3B3',
    letterSpacing: '0.07rem',
    '&:hover': {
      color: 'white',
    },
  },
  logo: {
    color: 'white',
    fontSize: '20px',
    letterSpacing: '0.1rem',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      marginBottom: '15px',
    },
  },
  navBar: {
    marginBottom: '50px',
    marginTop: '10px',
    [theme.breakpoints.down('sm')]: {
      display: 'grid',
      boxShadow: '0 2px 10px 0 #000',
      border: '1px solid #222',
      padding: '30px 20px 25px',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  linkContainer: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      margin: '0 auto',
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
  },
  logoContainer: {
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
    },
    [theme.breakpoints.up('md')]: {
      alignSelf: 'flex-start',
    },
  },
}));

export const NavBar = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container className={classes.navBar}>
        <Grid container md={6} className={classes.logo}>
          <Box className={classes.logoContainer}>
            <Link href="/">VICKY VASILOPOULOU</Link>
          </Box>
        </Grid>
        <Grid container md={6} direction="row" justify="flex-end" className={classes.linkContainer}>
          <Box className={classes.link}>
            <Link href="/">WRITING</Link>
          </Box>
          <Box className={classes.link}>
            <Link href="/github">GITHUB</Link>
          </Box>
          <Box className={classes.link}>
            <Link href="/projects">PROJECTS</Link>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};
