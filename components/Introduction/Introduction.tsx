import React, { ReactNode } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  quote: {
    color: 'white',
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
      maxWidth: '500px',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '700px',
      marginTop: '80px',
      marginLeft: '60px',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '40px',
      padding: '10px',
    },
  },
  frontendEngineer: {
    fontSize: '25px',
    marginBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      margin: '0 auto',
    },
  },
  frontendTitle: {
    [theme.breakpoints.up('md')]: {
      fontSize: '60px',
      textAlign: 'left',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '45px',
      textAlign: 'left',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
      textAlign: 'center',
    },
  },
  span: {
    color: '#7F7FF8',
    marginRight: '5px',
    marginLeft: '5px',
  },
  line: {
    borderBottom: '2px solid #232b2b',
    marginBottom: '80px',
  },
  occupation: {
    color: '#7F7FF8',
    marginTop: '80px',
    [theme.breakpoints.up('md')]: {
      fontSize: '70px',
      textAlign: 'left',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '45px',
      textAlign: 'left',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
      textAlign: 'center',
    },
  },
}));

export const Introduction = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid item md={5} sm={12} xs={12}>
      <Grid className={classes.quote} container direction="column">
        <motion.div initial={{ y: -150 }} animate={{ y: -5 }} transition={{ type: 'spring', stiffness: 100 }}>
          <Typography className={classes.occupation}>Vicky L. Vasilopoulou</Typography>
          <Typography className={classes.frontendEngineer}>Frontend Engineer | Website Content Writer</Typography>
          <Box className={classes.line}></Box>
        </motion.div>
        <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ type: 'spring', stiffness: 100 }}>
          <Typography className={classes.frontendTitle}>
            I build custom <span className={classes.span}>WEB</span> solutions, write about
            <span className={classes.span}> DEV</span>
            and read graphic novels.
          </Typography>
        </motion.div>
      </Grid>
    </Grid>
  );
};
