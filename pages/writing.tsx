import React from 'react';
import TechnicalWriting from '../components/TechnicalWriting/TechnicalWriting';
import { Blog } from '../components/Blog/Blog';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: { marginTop: '80px' },
  blog: {
    [theme.breakpoints.down('sm')]: {
      margin: '10px',
      padding: '5px',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '40px 40px 40px 70px',
    },
  },
  title: {
    fontSize: '40px',
    textOrientation: 'sideways',
    writingMode: 'vertical-lr',
    marginTop: '200px',
  },
  timeline: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '20%',
    },
  },
}));

export default function Writing(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item md={7} xl={7} sm={12} lg={7} className={classes.blog}>
        <Blog />
      </Grid>
      <Grid item md={5} xl={5} sm={12} lg={5} className={classes.timeline}>
        <Box display="flex" flexDirection="row-reverse">
          <Typography className={classes.title}>TECHNICAL WRITING</Typography>
          <Box>
            <TechnicalWriting />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
