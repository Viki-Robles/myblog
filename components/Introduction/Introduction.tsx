import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
    padding: '20% 40px 35% 40px',
  },
  description: {
    fontWeight: 200,
  },
  item: {},
}));

export const Introduction = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container className={classes.name} md={12} xl={12} spacing={4}>
      <Grid item md={6} xl={6} className={classes.item}>
        <motion.div initial={{ x: 250 }} animate={{ x: 0 }} transition={{ duration: 1, type: 'spring' }}>
          <Typography variant="h1" className={classes.occupation}>
            blueMonkey.
          </Typography>
        </motion.div>
        <motion.div initial={{ x: -250 }} animate={{ x: 0 }} transition={{ duration: 1, type: 'spring' }}></motion.div>
      </Grid>
      <Grid item md={6} xl={6}>
        <Typography variant="h5" className={classes.description}>
          Hi! My name's Vicky Vasilopoulou and I‘m a frontend developer🐵. In the evenings you can find me working on
          open source projects, like WeAreNews🔒 , or catching up on the latest Netflix series. I‘m based in London,
          United Kingdom where I occasionally write about my adventures in tech on my blog📓 and if you like memes,
          movies, and web development you might also enjoy following me on DEV🐦
        </Typography>
      </Grid>
    </Grid>
  );
};
