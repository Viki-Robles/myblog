import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    marginTop: '100px',
    border: '1px dashed',
    borderColor: '#ff61be',
    borderRadius: '5px',
    padding: '15px 10px',
  },
  content: {
    color: '#8998a7',
    textAlign: 'center',
    fontSize: '20px',
    padding: '20px 10px 20px 10px',
    fontWeight: 300,
    [theme.breakpoints.down('sm')]: { fontSize: '1.2rem' },
  },
  contactHeader: {
    color: '#fff',
    fontSize: '2.2rem',
    fontWeight: 700,
    border: '0 solid #e2e8f0',
    [theme.breakpoints.down('sm')]: { fontSize: '1.6rem' },
  },
  button: {
    borderRadius: '5px',
    backgroundColor: '#ff61be',
    color: 'white',
    border: '1px solid #ff61be',
    padding: '0.75rem 1rem',
    fontSize: '18px',
    maxWidth: '140px',
    marginTop: '10px',
    textAlign: 'center',
    margin: '0 auto',
    fontWeight: 500,
    [theme.breakpoints.up('lg')]: { fontSize: '18px' },
  },
}));

export const Contact = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container className={classes.contactContainer}>
      <Typography className={classes.contactHeader} variant="h4">
        Get In Touch
      </Typography>
      <Typography className={classes.content}>
        Although I’m not currently looking for any new opportunities, I am always open to hear something new. Whether
        you have a question or just want to say hi, I’ll try my best to get back to you!
      </Typography>
      <Box className={classes.button}>
        <a href="mailto:vasiliki.robles@gmail.com">Say hello 🤗</a>
      </Box>
    </Grid>
  );
};
