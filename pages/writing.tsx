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
    marginRight: '40px',
  },
}));

export default function Writing(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item md={4} sm={5} xl={4} className={classes.blog}>
        <Blog />
      </Grid>
      <Grid item md={8} sm={5} xl={8}>
        <Box display="flex" flexDirection="row-reverse">
          <Box>
            <Typography className={classes.title}>TECHNICAL WRITING</Typography>
          </Box>
          <Box flexGrow={3}>
            <TechnicalWriting />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
