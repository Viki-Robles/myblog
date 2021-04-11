import React, { Fragment } from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  link: {
    paddingRight: '25px',
    color: '#B5B3B3',
    letterSpacing: '0.07rem',
  },
  logo: {
    color: 'white',
    fontSize: '20px',
    letterSpacing: '0.1rem',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
    },
  },
  navBar: {
    [theme.breakpoints.up('sm')]: {
      display: 'grid',
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
}));

export const NavBar = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container className={classes.navBar}>
        <Grid item md={6} className={classes.logo}>
          <Link href="/">Vasiliki Vasilopoulou</Link>
        </Grid>
        <Grid container md={6} direction="row" justify="flex-end" className={classes.linkContainer}>
          <Box className={classes.link}>
            <Link href="/">WRITING</Link>
          </Box>
          <Box className={classes.link}>
            <Link href="/github">GITHUB</Link>
          </Box>
          <Box className={classes.link}>
            <Link href="/about">ABOUT</Link>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};
