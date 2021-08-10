import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SocialMedia } from '../SocialMedia/SocialMedia';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  occupation: {
    color: '#FFFF',
    [theme.breakpoints.up('md')]: {
      fontSize: '4.3em',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '45px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    },
  },
  title: {
    color: '#FFFF',
    marginBottom: '10px',
    fontWeight: 300,
    [theme.breakpoints.up('md')]: {
      fontSize: '3em',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '40px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '25px',
    },
  },
  name: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: '200px',
    },
  },
  socialMedia: {
    color: '#FFFF',
  },
  introduction: {
    [theme.breakpoints.down('md')]: {
      position: 'fixed',
      transform: 'translateY(-50%)',
      top: '50%',
    },
  },
  button: {
    border: '1px solid #7F7FF8',
    padding: '7px 12px',
    color: 'white',
    boxShadow: '2px 5px 10px 2px #000',
    fontSize: '16px',
    maxWidth: '140px',
    textAlign: 'center',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      marginBottom: '40px',
    },
    [theme.breakpoints.up('sm')]: {
      margin: 0,
      marginBottom: '40px',
    },
  },
  line: {
    position: 'absolute',
    bottom: 130,
    width: '70%',
    height: '12%',
    // backgroundColor: 'rgba(72, 48, 230, 0.1)',
    transformOrigin: '50% 100%',
  },
}));

export const Introduction = (): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <Box display="flex" className={classes.introduction}>
        <Box className={classes.name}>
          <Typography className={classes.occupation}>Vicky Vasilopoulou</Typography>
          <Typography className={classes.title}>Front-End Developer</Typography>
          <div className={classes.line}></div>
          <SocialMedia />
          <Box className={classes.button}>
            <Link href="/projects">Projects</Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};
