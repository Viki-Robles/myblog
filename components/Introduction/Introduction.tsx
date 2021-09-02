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
      textAlign: 'left',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '4.3em',
      textAlign: 'left',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.4rem',
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
    marginBottom: '25%',
    [theme.breakpoints.up('md')]: {
      marginTop: '250px',
      margin: '0 50px',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '250px',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '120px',
      marginBottom: '70%',
    },
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
  image: {
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      opacity: '0.4',
    },
  },
  item: {
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex: 8,
      marginTop: '50px',
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '8%',
    },
  },
}));

export const Introduction = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container className={classes.name} md={12} xl={12}>
      <Grid item md={6} xl={6} className={classes.item}>
        <motion.div initial={{ x: 250 }} animate={{ x: 0 }} transition={{ duration: 1, type: 'spring' }}>
          <Typography className={classes.occupation}>Vicky Vasilopoulou</Typography>
        </motion.div>
        <motion.div initial={{ x: -250 }} animate={{ x: 0 }} transition={{ duration: 1, type: 'spring' }}>
          <Typography className={classes.title}>Front-End Developer</Typography>
          <SocialMedia />
          <Box className={classes.button}>
            <Link href="/#projects">Projects</Link>
          </Box>
        </motion.div>
      </Grid>
      <Grid item md={6} xl={6}>
        <motion.div initial={{ y: 0 }} animate={{ y: -100 }} transition={{ duration: 2, type: 'spring' }}>
          <Image src="/cyborg-131.svg" width={500} height={700} className={classes.image} />
        </motion.div>
      </Grid>
    </Grid>
  );
};
