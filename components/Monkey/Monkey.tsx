import React, { ReactNode } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  monkey: {
    marginLeft: '80px',
    marginBottom: '50px',
    marginTop: '200px',
  },
  body: {
    width: '100px',
    height: '120px',
    background: '#F5D7B7',
    borderRadius: '50%',
    position: 'absolute',
    transform: 'translate(30px, 60px)',
  },
  belly: {
    width: '160px',
    height: '180px',
    background: '#68BBE3',
    borderRadius: '50%',
  },
  head: {
    width: '250px',
    height: '180px',
    background: '#68BBE3',
    borderRadius: '50%',
    position: 'absolute',
    transform: 'translate(-45px, -100px)',
  },
  face: {
    width: '200px',
    height: '130px',
    background: '#F5D7B7',
    borderRadius: '50%',
    position: 'absolute',
    transform: 'translate(-20px, -80px)',
  },
  earLeft: {
    width: '100px',
    height: '100px',
    background: '#F5D7B7',
    borderRadius: '50%',
    position: 'absolute',
    transform: 'translate(-80px, -110px)',
  },
  earLeftInside: {
    width: '50px',
    height: '50px',
    background: '#F5D7B7',
    position: 'absolute',
    borderRadius: '50%',
    top: '10px',
    left: '10px',
  },
  earRight: {
    width: '100px',
    height: '100px',
    background: '#F5D7B7',
    borderRadius: '50%',
    position: 'absolute',
    transform: 'translate(140px, -110px)',
  },
  earRightInside: {
    width: '50px',
    height: '50px',
    background: '#F5D7B7',
    position: 'absolute',
    borderRadius: '50%',
    top: '10px',
    right: '10px',
  },
  eyeRight: {
    width: '40px',
    height: '60px',
    borderRadius: '50%',
    background: 'white',
    position: 'absolute',
    top: '30px',
    right: '30px',
  },
  eyeLeft: {
    width: '40px',
    height: '60px',
    borderRadius: '50%',
    background: 'white',
    position: 'absolute',
    transform: 'translate(20px, 30px)',
  },
  leftBlack: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    background: 'black',
    position: 'absolute',
    transform: 'translate(6px, 28px)',
  },
  rightBlack: {
    width: '30px',
    height: '30px',
    background: 'black',
    top: '28px',
    right: '5px',
    borderRadius: '50%',
    position: 'absolute',
  },
}));

export const Monkey = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.monkey}>
      <Box className={classes.earRight}>
        <Box className={classes.earRightInside}></Box>
      </Box>
      <Box className={classes.earLeft}>
        <Box className={classes.earLeftInside}></Box>
      </Box>
      <Box className={classes.head}></Box>
      <Box className={classes.face}>
        <Box className={classes.eyeLeft}>
          <Box className={classes.leftBlack}></Box>
        </Box>
        <Box className={classes.eyeRight}>
          <Box className={classes.rightBlack}></Box>
        </Box>
      </Box>
      <Box className={classes.body}></Box>
      <Box className={classes.belly}></Box>
    </Box>
  );
};
