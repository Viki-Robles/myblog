import React from 'react';
import { Box, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SocialMedia } from '../SocialMedia/SocialMedia';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  occupation: {
    color: '#FFFF',
    [theme.breakpoints.up('md')]: {
      fontSize: '4.6em',
      textAlign: 'right',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '4.3em',
      textAlign: 'right',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.4rem',
      textAlign: 'center',
    },
  },

  name: {
    paddingTop: '20%',
    paddingBottom: '35%',
  },
  description: {
    color: '#FFFF',
    fontWeight: 200,
  },
  button: {
    borderRadius: '5px',
    border: '1px solid #7F7FF8',
    padding: '9px 24px',
    color: 'white',
    boxShadow: '2px 5px 10px 2px #000',
    fontSize: '18px',
    maxWidth: '160px',
    textAlign: 'center',
    marginBottom: '20px',
    zIndex: 4,
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      marginBottom: '40px',
      backgroundColor: '#7F7FF8',
    },
    [theme.breakpoints.up('md')]: {
      margin: 0,
    },
  },
  item: {
    // [theme.breakpoints.down('sm')]: {
    //   margin: '0 auto',
    //   position: 'absolute',
    //   left: 0,
    //   right: 0,
    //   zIndex: 8,
    //   marginTop: '50px',
    // },
    // [theme.breakpoints.up('md')]: {
    //   paddingLeft: '8%',
    // },
  },
}));

export const Introduction = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container className={classes.name} md={12} xl={12} spacing={8}>
      <Grid item md={6} xl={6} className={classes.item}>
        <motion.div initial={{ x: 250 }} animate={{ x: 0 }} transition={{ duration: 1, type: 'spring' }}>
          <Typography className={classes.occupation}>blueMonkey.</Typography>
        </motion.div>
        <motion.div initial={{ x: -250 }} animate={{ x: 0 }} transition={{ duration: 1, type: 'spring' }}></motion.div>
      </Grid>
      <Grid item md={4} xl={5} className={classes.description}>
        Hi! My name's Vicky Vasilopoulou and I‘m a frontend developer🦝. In the evenings you can find me working on open
        source software, like NextAuth.js🔒 , or catching up on the latest Netflix series. I‘m based in London, United
        Kingdom where I occasionally write about my adventures in tech on my blog📓 and if you like memes, movies, and
        web development you might also enjoy following me on Twitter🐦
      </Grid>
    </Grid>
  );
};
