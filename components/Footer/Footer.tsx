import React, { ReactNode } from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  footer: {
    color: '#4A63D6',
    textAlign: 'center',
    padding: '10% 0 20px 0',
    letterSpacing: '3px',
    fontWeight: 200,
  },
}));

export const Footer = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Typography>Designed & Built by Vicky Vasilopoulou</Typography>
    </Box>
  );
};
