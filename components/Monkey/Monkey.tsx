import React, { ReactNode } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  first: {
    width: '110px',
    height: '110px',
    background: '#F5D7B7',
    borderRadius: '50%',
    position: 'absolute',
    transform: 'translate(20px, 20px)',
  },
  second: {
    width: '150px',
    height: '150px',
    background: '#68BBE3',
    borderRadius: '50%',
  },
}));

export const Monkey = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.first}></Box>
      <Box className={classes.second}></Box>
    </Box>
  );
};
