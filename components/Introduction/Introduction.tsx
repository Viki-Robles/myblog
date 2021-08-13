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
      textAlign: 'left',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '4.3em',
      textAlign: 'left',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
      textAlign: 'center',
    },
  },
  title: {
    color: '#FFFF',
    marginBottom: '10px',
    fontWeight: 300,
    [theme.breakpoints.up('md')]: {
      fontSize: '3em',
      textAlign: 'left',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '3em',
      textAlign: 'left',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '25px',
      textAlign: 'center',
    },
  },

  socialMedia: {
    color: '#FFFF',
  },
  name: {
    marginBottom: '20%',
    [theme.breakpoints.up('md')]: {
      marginLeft: '200px',
      marginTop: '250px',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '250px',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '100px',
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
    [theme.breakpoints.up('md')]: {
      margin: 0,
    },
  },
}));

export const Introduction = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.name}>
      <Typography className={classes.occupation}>Vicky Vasilopoulou</Typography>
      <Typography className={classes.title}>Front-End Developer</Typography>
      <SocialMedia />
      <Box className={classes.button}>
        <Link href="/projects">Projects</Link>
      </Box>
    </Box>
  );
};
