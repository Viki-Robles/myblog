import React, { Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  navBar: {
    width: 'auto',
    [theme.breakpoints.down('sm')]: {
      display: 'grid',
      boxShadow: '0 2px 10px 0 #000',
      padding: '25px',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginTop: '50px',
    },
  },

  linkContainer: {
    paddingLeft: '50px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      margin: '0 auto',
      alignItems: 'center',
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
    },
  },
  link: {
    paddingRight: '30px',
    fontSize: '20px',
    fontWeight: 300,
    '&:hover': {
      color: '#4A63D6',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
}));

export const NavBar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container className={classes.navBar}>
        <Grid container md={6} direction="row" justify="flex-end" className={classes.linkContainer}>
          <Typography className={classes.link}>
            <Link href="/">home</Link>
          </Typography>
          <Typography className={classes.link}>
            <Link href="/writing">posts</Link>
          </Typography>
          <Typography className={classes.link}>
            <Link href="/#projects">work</Link>
          </Typography>
        </Grid>
        <Grid container md={5}></Grid>
      </Grid>
    </Fragment>
  );
};
