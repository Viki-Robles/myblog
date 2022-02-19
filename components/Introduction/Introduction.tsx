import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  introduction: {
    padding: '20% 40px 25% 40px',
    [theme.breakpoints.up('lg')]: { paddingBottom: '15%' },
  },
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
  description: {
    fontWeight: 200,
    maxWidth: '600px',
    [theme.breakpoints.down('sm')]: { fontSize: '1.3rem' },
  },

  button: {
    textAlign: 'center',
    position: 'absolute',
    borderRadius: '5px',
    border: '1px solid #4A63D6',
    padding: '0.75rem 1rem',
    fontSize: '13px',
    maxWidth: '140px',
    marginTop: '10px',

    [theme.breakpoints.up('lg')]: { fontSize: '15px' },
  },

  blog: { color: '#4A63D6', cursor: 'pointer', paddingLeft: '5px', fontWeight: 300 },
}));

export const Introduction = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container className={classes.introduction} md={12} xl={12} spacing={4}>
      <Grid item md={6} xl={6}>
        <motion.div initial={{ x: 250 }} animate={{ x: 0 }} transition={{ duration: 1, type: 'spring' }}>
          <Typography variant="h1" className={classes.occupation}>
            blueMonkey.
          </Typography>
          {/* <Box className={classes.button}>
            <Link href="/">Check my course</Link>
          </Box> */}
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
