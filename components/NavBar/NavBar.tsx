import React from 'react';
import Link from 'next/link';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { StaggerWrap } from 'components/StaggerWrap/StaggerWrap';
import { FadeInUpBox } from 'components/FadeInBox/FadeInBox';

const useStyles = makeStyles((theme) => ({
  navBar: {
    fontFamily: 'Inter',

    [theme.breakpoints.down('sm')]: {
      height: '15vw',
      display: 'grid',
      boxShadow: '0 2px 10px 0 #000',
      padding: '25px 0 25px 0',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginTop: '40px',
    },
  },

  linkContainer: {
    position: 'absolute',
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
    width: '100%',
    marginRight: '30px',
    backgroundColor: 'transparent',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  },
  button: {
    fontSize: '20px',
    fontWeight: 300,
    color: 'white',
    backgroundColor: 'transparent',
    padding: '8px 20px',
    border: '1px solid transparent',
    '&:hover': {
      boxShadow:
        'rgb(31 47 71 / 15%) 0px 20px 40px, rgb(0 0 0 / 5%) 0px 1px 5px, rgb(255 255 255 / 10%) 0px 0px 0px 0.5px inset',
      border: '1px solid',
      borderRadius: '10px',
      borderColor: '#383d42',
      backgroundColor: '#161e26',
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
              <Link href="/">
                <button className={classes.button}>home</button>
              </Link>
            </Typography>
          </FadeInUpBox>
          <FadeInUpBox yOffset={34} duration={1} delayOrder={2}>
            <Typography className={classes.link}>
              <Link href="/">
                <button className={classes.button}>posts</button>
              </Link>
            </Typography>
          </FadeInUpBox>
          <FadeInUpBox yOffset={34} duration={1} delayOrder={3}>
            <Typography className={classes.link}>
              <Link href="/">
                <button className={classes.button}>work</button>
              </Link>
            </Typography>
          </FadeInUpBox>
        </Grid>
        {/* <Grid container md={5}></Grid> */}
      </Grid>
    </StaggerWrap>
  );
};
