import React, { Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: 'center',
    padding: '12%',
  },
  firstItem: {
    color: '#7F7FF8',
    marginBottom: '20px',
    lineHeight: '2.2rem',
    fontStyle: 'italic',
    fontSize: '1.5rem',
    fontWeight: 300,
  },
  secondItem: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 300,
  },
  picture: {
    textAlign: 'right',
  },
  about: {
    fontSize: '2rem',
    color: 'white',
    marginBottom: '10px',
  },
}));

export const About = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container className={classes.container} direction="row" spacing={3}>
        <Grid item md={6} xl={6}>
          <Typography className={classes.about} id="about">
            About
          </Typography>
          <Typography className={classes.firstItem}>
            I started coding a year ago as a hobby and it became a fullfilled passion. Last year I decided to join a
            bootcamp and I am currently working at my first frontend role using React and TypeScript. I have been
            writing some articles on DEV community, mostly because I feel good helping other begginers with challenges
            that I faced.. and I will not lie... I love TypeScript! I am up for a challenge but also looking for a
            inspiring and fun crew!
          </Typography>

          <Typography className={classes.secondItem}>
            Mostly I am familiar with TypeScript, JavaScript, React / NextJS, GraphQl, REST API's, Firebase, but my aim
            is to boost my skills and work on cool projects!
          </Typography>
          <Typography className={classes.secondItem}>Feel free to email me below.</Typography>
        </Grid>
        <Grid item md={5} xl={5} className={classes.picture}>
          <Image src="/eclipse.svg" width={400} height={400} />
        </Grid>
      </Grid>
    </Fragment>
  );
};
