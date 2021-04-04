import React, { Fragment } from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const useStyles = makeStyles(() => ({
  link: { marginRight: '10px' },
}));

export const NavBar = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container>
        <Grid item md={6}>
          <Link href="/">Logo</Link>
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
        </Grid>
      </Grid>
    </Fragment>
  );
};
