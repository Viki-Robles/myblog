import React, { Fragment } from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const useStyles = makeStyles(() => ({
  link: {
    paddingRight: '25px',
    color: '#B5B3B3',
    letterSpacing: '0.07rem',
  },
  logo: {
    color: 'white',
    fontSize: '20px',
    letterSpacing: '0.1rem',
  },
}));

export const NavBar = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container>
        <Grid item md={6} className={classes.logo}>
          <Link href="/">Vasiliki Vasilopoulou</Link>
        </Grid>
        <Grid container md={6} direction="row" justify="flex-end">
          <Box className={classes.link}>
            <Link href="/writing">WRITING</Link>
          </Box>
          <Box className={classes.link}>
            <Link href="/github">GITHUB</Link>
          </Box>{' '}
          <Box className={classes.link}>
            <Link href="/about">ABOUT</Link>
          </Box>
          <Box className={classes.link}>
            <Link href="/about">BLOG</Link>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};
