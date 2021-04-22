import React, { Fragment } from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  link: {
    paddingRight: '30px',
    color: '#B5B3B3',
    fontSize: '18px',
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
      justifyContent: 'center',
    },
  },
  navBar: {
    marginBottom: '50px',
    [theme.breakpoints.down('sm')]: {
      display: 'grid',
      boxShadow: '0 2px 10px 0 #000',
      border: '1px solid #222',
      padding: '30px 20px 25px',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginTop: '10px',
    },
  },
  linkContainer: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      margin: '0 auto',
      alignItems: 'center',
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
  },
  logoText: {
    alignSelf: 'center',
  },
  logoImage: {
    marginLeft: '10px',
    marginRight: '10px',
  },
}));

export const NavBar = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container className={classes.navBar}>
        <Grid container md={6} className={classes.logo}>
          <Box className={classes.logoImage}>
            <Image src="/monkey.svg" width={50} height={50} className={classes.logo} />
          </Box>
          <Box className={classes.logoText}>
            <Link href="/">BlueMonkey</Link>
          </Box>
        </Grid>
        <Grid container md={6} direction="row" justify="flex-end" className={classes.linkContainer}>
          <Box className={classes.link}>
            <Link href="/">writing.</Link>
          </Box>
          <Box className={classes.link}>
            <Link href="/github">github.</Link>
          </Box>
          <Box className={classes.link}>
            <Link href="/projects">projects.</Link>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};
