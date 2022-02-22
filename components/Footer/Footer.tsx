import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  footer: {
    color: '#b8bedd',
    textAlign: 'center',
    padding: '10% 10px 20px 10px',
    letterSpacing: '3px',
    fontWeight: 200,
  },
}));

export const Footer = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Typography>Copywrite &copy; 2022. All right reserved. Designed & Built by Vicky Vasilopoulou</Typography>
    </Box>
  );
};
