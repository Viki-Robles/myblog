import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles(() => ({
  text: {
    color: 'white',
  },
  container: {
    textAlign: 'center',
    marginTop: '20%',
  },
  home: {
    color: 'blue',
    cursor: 'pointer',
  },
}));

export default function NotFound(): JSX.Element {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography variant="h3" className={classes.text}>
        😢 Oops.. there&apos;s no page here.
      </Typography>
      <Typography className={classes.text} variant="h3">
        If you&apos;re lost,
        <Link href="/">
          <Typography className={classes.home} variant="h3">
            Head back home
          </Typography>
        </Link>
      </Typography>
    </Box>
  );
}
