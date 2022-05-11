import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { StaggerWrap } from 'components/StaggerWrap/StaggerWrap';
import { FadeInUpBox } from 'components/FadeInBox/FadeInBox';
import Bulb from 'components/Bulb/Bulb';

const useStyles = makeStyles((theme) => ({
  introduction: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    padding: '45px',
    marginTop: '12%',
    marginBottom: '14%',
    gap: '10px',
    width: '800px',
    border: '2px dashed',
    borderRadius: '15px',
    borderColor: '#e35085',
    boxShadow: '0 0 1em 0 var(--clr-neon)',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '50%',
      width: 'auto',
      padding: '18px',
    },
    [theme.breakpoints.down('md')]: {
      width: 'auto',
    },
  },
  title: {
    display: 'flex',
    marginTop: '30%',
    fontSize: '1.6rem',
    fontWeight: 700,
    color: '#4A63D6',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  name: {
    fontWeight: 600,
    [theme.breakpoints.up('lg')]: {
      fontSize: '7em',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '5em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '3.8rem',
    },
  },
  description: {
    fontWeight: 200,
    maxWidth: '600px',
  },

  descriptionText: {
    border: '0 solid #e2e8f0',
    [theme.breakpoints.down('sm')]: { fontSize: '1.25rem', lineHeight: 'calc(1em + 0.725rem)' },
  },
  button: {
    textAlign: 'center',
    position: 'absolute',
    borderRadius: '5px',
    border: '1px solid #e35085',
    padding: '0.75rem 1rem',
    fontSize: '13px',
    maxWidth: '140px',
    marginTop: '10px',
    [theme.breakpoints.up('lg')]: { fontSize: '15px' },
  },

  blog: { color: '#e35085', cursor: 'pointer', paddingLeft: '5px', fontWeight: 300 },
}));

export const Introduction = (): JSX.Element => {
  const classes = useStyles();

  return (
    <StaggerWrap childrenDelay={1} ease="backInOut" delayOrder={1}>
      <Typography className={classes.title} variant="h4">
        Who I am.
      </Typography>
      <Grid container className={classes.introduction} md={12} xl={12} spacing={4}>
        <FadeInUpBox yOffset={24} duration={1} delayOrder={1}>
          <Grid item md={6} xl={6}>
            <Typography variant="h2" className={classes.name}>
              Hello, I am Vasiliki.
            </Typography>
          </Grid>
        </FadeInUpBox>
        <FadeInUpBox yOffset={48} duration={1} delayOrder={1}>
          <Grid item md={6} xl={6} className={classes.description}>
            <Typography className={classes.descriptionText} variant="h5">
              I‘m a frontend engineer🦄. In the evenings you can find me working on personal projects 🔒 , or enjoying
              food in a local pub. I‘m based in London, United Kingdom where I occasionally write about my personal
              coding experience on my
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
