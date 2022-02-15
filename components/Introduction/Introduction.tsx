import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SocialMedia } from '../SocialMedia/SocialMedia';
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  occupation: {
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
    padding: '20% 40px 25% 40px',
  },
  description: {
    fontWeight: 200,
    maxWidth: '600px',
    [theme.breakpoints.down('sm')]: { fontSize: '1.3rem' },
  },
  blog: { color: '#4A63D6', cursor: 'pointer', paddingLeft: '5px', fontWeight: 300 },
}));

export const Introduction = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container className={classes.name} md={12} xl={12} spacing={4}>
      <Grid item md={6} xl={6}>
        <motion.div initial={{ x: 250 }} animate={{ x: 0 }} transition={{ duration: 1, type: 'spring' }}>
          <Typography variant="h1" className={classes.occupation}>
            blueMonkey.
          </Typography>
          <SocialMedia />
        </motion.div>
        <motion.div initial={{ x: -250 }} animate={{ x: 0 }} transition={{ duration: 1, type: 'spring' }}></motion.div>
      </Grid>
      <Grid item md={6} xl={6} className={classes.description}>
        <Typography variant="h5" className={classes.description}>
          Hi! My name's Vicky Vasilopoulou and I‘m a frontend developer🦄. In the evenings you can find me working on
          personal projects 🔒 , or catching up on the latest Netflix series. I‘m based in London, United Kingdom where
          I occasionally write about my personal coding experience on my
          <a href="https://dev.to/vikirobles" className={classes.blog}>
            Blog📓.
          </a>
        </Typography>
      </Grid>
    </Grid>
  );
};
