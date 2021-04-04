import React, { Fragment } from 'react';
import { Box, Grid } from '@material-ui/core';
import Link from 'next/link';

export const NavBar = (): JSX.Element => {
  return (
    <Fragment>
      <Grid container>
        <Grid item md={6}>
          <Box>Logo</Box>
        </Grid>
        <Grid container md={6} direction="row" justify="flex-end">
          <Link href="/writing">WRITING</Link>
          <Link href="/github">GITHUB</Link>
          <Link href="/about">ABOUT</Link>
        </Grid>
      </Grid>
    </Fragment>
  );
};
