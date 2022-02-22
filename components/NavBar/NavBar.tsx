import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { StaggerWrap } from 'components/StaggerWrap/StaggerWrap';
import { FadeInUpBox } from 'components/FadeInBox/FadeInBox';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  navBar: {
    width: 'auto',
    fontFamily: 'Inter',
    [theme.breakpoints.down('sm')]: {
      display: 'grid',
      boxShadow: '0 2px 10px 0 #000',
      padding: '25px 0 25px 0',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginTop: '50px',
    },
  },

  linkContainer: {
    paddingLeft: '50px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      margin: '0 auto',
      alignItems: 'center',
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
    },
  },

  link: {
    paddingRight: '30px',
    fontSize: '20px',
    fontWeight: 300,
    '&:hover': {
      color: '#4A63D6',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  },
}));

export const NavBar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <StaggerWrap childrenDelay={1} ease="backInOut" delayOrder={2}>
      <Grid container className={classes.navBar}>
        <Grid container md={6} direction="row" justify="flex-end" className={classes.linkContainer}>
          <FadeInUpBox yOffset={34} duration={1} delayOrder={1}>
            <Typography className={classes.link}>
              <Link href="/">home</Link>
            </Typography>
          </FadeInUpBox>
          <FadeInUpBox yOffset={34} duration={1} delayOrder={2}>
            <Typography className={classes.link}>
              <Link href="/writing">posts</Link>
            </Typography>
          </FadeInUpBox>
          <FadeInUpBox yOffset={34} duration={1} delayOrder={3}>
            <Typography className={classes.link}>
              <Link href="/#projects">work</Link>
            </Typography>
          </FadeInUpBox>
        </Grid>
        <Grid container md={5}></Grid>
      </Grid>
    </StaggerWrap>
  );
};
