import React from 'react';
import TechnicalWriting from '../components/TechnicalWriting/TechnicalWriting';
import { Blog } from '../components/Blog/Blog';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: { marginTop: '100px' },
  blog: {
    padding: '80px 0 0 40px',
  },
  title: {
    fontSize: '40px',
    color: 'white',
    textOrientation: 'sideways',
    writingMode: 'vertical-lr',
    marginTop: '100px',
  },
}));

export default function Writing(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item md={5} xl={5} sm={12} className={classes.blog}>
        <Blog />
      </Grid>
      <Grid item md={7} xl={7} sm={12}>
        <Box display="flex" flexDirection="row-reverse">
          <Typography className={classes.title}>TECHNICAL WRITING</Typography>
          <Box flexGrow={3}>
            <TechnicalWriting />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
