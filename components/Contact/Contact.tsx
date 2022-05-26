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
    marginTop: '20%',
    border: '2px dashed',
    borderColor: '#FFB7C5',
    borderWidth: '5px',
    boxShadow: '0 0 1em 0 var(--clr-neon)',
    borderRadius: '5px',
    padding: '20px 10px',
    marginBottom: '10%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '40%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '10%',
    },
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
    backgroundColor: '#FFBCD9',
    color: 'white',
    border: '1px solid #FFBCD9',
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
        Even if I’m not currently looking for new opportunities, I am always open to have a chat. Whether you have a
        question or just want to say hi, I’ll try my best to get back to you! Till then speak to you soon.
      </Typography>
      <Box className={classes.button}>
        <a href="mailto:vasiliki.robles@gmail.com">Say hello 🤗</a>
      </Box>
    </Grid>
  );
};
