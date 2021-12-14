import React, { Fragment } from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { changeTheme } from '../../utils/changeTheme';
import Switch from '@material-ui/core/Switch';
import { Button } from '../Button/Button';
import Link from 'next/link';

interface NavBarProps {
  onClick: () => void;
}

const useStyles = makeStyles((theme) => ({
  link: {
    paddingRight: '30px',
    color: '#FFFF',
    fontSize: '20px',
    letterSpacing: '0.05rem',
    fontWeight: 200,
    '&:hover': {
      color: '#7F7FF8',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
  logo: {
    color: 'white',
    fontSize: '20px',
    letterSpacing: '0.1rem',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      marginBottom: '15px',
      justifyContent: 'center',
    },
  },
  navBar: {
    width: 'auto',
    [theme.breakpoints.down('sm')]: {
      display: 'grid',
      boxShadow: '0 2px 10px 0 #000',
      border: '1px solid #222',
      padding: '25px',
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
  logoText: {
    alignSelf: 'center',
  },
  contactButton: {
    borderRadius: '5px',
    border: '1px solid #7F7FF8',
    padding: '11px 20px',
    boxShadow: '2px 5px 10px 2px #000',
    maxWidth: '140px',
    textAlign: 'center',
    color: '#ffff',
    marginTop: '-10px',
    backgroundColor: '#7F7FF8',
    [theme.breakpoints.down('sm')]: { marginTop: '12px' },
    '&:hover': {
      backgroundColor: '#0000',
    },
  },
}));

export const NavBar = (): JSX.Element => {
  const { handleThemeChange, darkState } = changeTheme();
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container className={classes.navBar}>
        <Grid container md={6} direction="row" justify="flex-end" className={classes.linkContainer}>
          <Box className={classes.link}>
            <Link href="/">home</Link>
          </Box>
          <Box className={classes.link}>
            <Link href="/writing">blog</Link>
          </Box>
          <Box className={classes.link}>
            <Link href="/#projects">work</Link>
          </Box>
        </Grid>
        <Grid container md={5} className={classes.logo}>
          <Box className={classes.logoText}>
            <Switch checked={darkState} onChange={handleThemeChange} />
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};
