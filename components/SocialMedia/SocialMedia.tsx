import React from 'react';
import { Box } from '@material-ui/core';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  socialMedia: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'end',
    },
    marginBottom: '20px',
    gap: '20px',
  },
}));

export const SocialMedia = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Box display="flex" className={classes.socialMedia}>
      <Image src="/linkedin.svg" width={22} height={22} />
      <Image src="/github.svg" width={22} height={22} />
    </Box>
  );
};
