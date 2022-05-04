import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { StaggerWrap } from 'components/StaggerWrap/StaggerWrap';
import { FadeInUpBox } from 'components/FadeInBox/FadeInBox';

const useStyles = makeStyles((theme) => ({
  introduction: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '10px',
    padding: '20% 40px 25% 40px',
    [theme.breakpoints.up('lg')]: {
      paddingBottom: '15%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  name: {
    marginRight: '20px',
    [theme.breakpoints.up('lg')]: {
      fontSize: '7em',
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
    [theme.breakpoints.down('sm')]: { fontSize: '1.2rem' },
  },

  descriptionText: {
    border: '0 solid #e2e8f0',
  },
  button: {
    textAlign: 'center',
    position: 'absolute',
    borderRadius: '5px',
    border: '1px solid #ff61be',
    padding: '0.75rem 1rem',
    fontSize: '13px',
    maxWidth: '140px',
    marginTop: '10px',

    [theme.breakpoints.up('lg')]: { fontSize: '15px' },
  },

  blog: { color: '#ff61be', cursor: 'pointer', paddingLeft: '5px', fontWeight: 300 },
}));

export const Introduction = (): JSX.Element => {
  const classes = useStyles();

  return (
    <StaggerWrap childrenDelay={1} ease="backInOut" delayOrder={1}>
      <Grid container className={classes.introduction} md={12} xl={12} spacing={4}>
        <FadeInUpBox yOffset={24} duration={1} delayOrder={1}>
          <Grid item md={6} xl={6}>
            <Typography variant="h1" className={classes.name}>
              blueMonkey.
            </Typography>
          </Grid>
        </FadeInUpBox>
        <FadeInUpBox yOffset={48} duration={1} delayOrder={1}>
          <Grid item md={6} xl={6} className={classes.description}>
            <Typography variant="h5" className={classes.descriptionText}>
              Hi! My name's Vicky Vasilopoulou and I‘m a frontend engineer🦄. In the evenings you can find me working on
              personal projects 🔒 , or catching up on the latest Netflix series. I‘m based in London, United Kingdom
              where I occasionally write about my personal coding experience on my
              <a href="https://dev.to/vikirobles" className={classes.blog}>
                Blog📓.
              </a>
            </Typography>
          </Grid>
        </FadeInUpBox>
      </Grid>
    </StaggerWrap>
  );
};
