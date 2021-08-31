import React, { Fragment } from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '../Button/Button';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  link: {
    paddingRight: '30px',
    color: '#FFFF',
    fontSize: '18px',
    letterSpacing: '0.05rem',
    fontWeight: 400,
    '&:hover': {
      color: '#7F7FF8',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
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
    width: 'auto',
    [theme.breakpoints.down('sm')]: {
      display: 'grid',
      boxShadow: '0 2px 10px 0 #000',
      border: '1px solid #222',
      padding: '25px',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginTop: '50px',
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
    marginLeft: '15px',
  },
  logoImage: {
    marginLeft: '10px',
    marginRight: '10px',
  },
  contactButton: {
    border: '1px solid #7F7FF8',
    padding: '11px 20px',
    boxShadow: '2px 5px 10px 2px #000',
    maxWidth: '140px',
    textAlign: 'center',
    color: 'white',
    marginTop: '-10px',
    [theme.breakpoints.down('sm')]: { marginTop: '12px' },
    '&:hover': {
      backgroundColor: '#7F7FF8',
      color: 'black',
    },
  },
}));

export const NavBar = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container className={classes.navBar}>
        <Grid container md={5} className={classes.logo}>
          <Box className={classes.logoText}>
            <Link href="/">VICKY.</Link>
          </Box>
        </Grid>
        <Grid container md={6} direction="row" justify="flex-end" className={classes.linkContainer}>
          <Box className={classes.link}>
            <Link href="/writing">WRITING</Link>
          </Box>
          <Box className={classes.link}>
            <Link href="/#about">ABOUT</Link>
          </Box>
          <Box className={classes.contactButton}>
            <Link href="/projects">Let's chat</Link>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};
