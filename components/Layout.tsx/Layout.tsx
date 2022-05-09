import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { NavBar } from '../NavBar/NavBar';

interface LayoutProps {
  children: ReactNode;
}

const useStyles = makeStyles((theme) => ({
  sideElemenetContainer: {
    position: 'fixed',
    left: 'auto',
    right: '20px',
    bottom: 0,
    width: '40px',
    color: '#484d68',
    lineHeight: '1.3rem',
    writingMode: 'vertical-lr',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  sideElemenetItem: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  emailLink: {
    display: 'flex',
    gap: '10px',
    letterSpacing: '2px',
    margin: '0 20px',
    padding: '0 10px',
    '&::after': {
      content: '""',
      display: 'block',
      width: '1px',
      height: '90px',
      margin: '0px auto',
      backgroundColor: '#b8bedd',
    },
  },

  socialMediaContainer: {
    position: 'fixed',
    left: '20px',
    right: 'auto',
    bottom: 0,
    width: '40px',
    color: '#484d68',
    lineHeight: '1.3rem',
    writingMode: 'vertical-lr',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  socialMedia: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    '&::after': {
      content: '""',
      display: 'block',
      width: '1px',
      height: '90px',
      margin: '0px auto',
      backgroundColor: '#b8bedd',
    },
  },
  socialMediaItem: {
    cursor: 'pointer',
  },
}));

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      <NavBar />
      <Box style={{ padding: '15px' }}>{children}</Box>
      <Box className={classes.sideElemenetContainer}>
        <Box className={classes.sideElemenetItem}>
          <Typography className={classes.emailLink}>
            <Link href="mailto:vasiliki.robles@gmail.com">vasiliki.robles@gmail.com</Link>
          </Typography>
        </Box>
      </Box>
      <Box className={classes.socialMediaContainer}>
        <Box display="flex" className={classes.socialMedia}>
          <Link href="https://www.linkedin.com/in/vicky-vasilopoulou-52230111b/" passHref>
            <Image src="/linkedin.svg" width={22} height={22} className={classes.socialMediaItem} />
          </Link>
          <Link href="https://github.com/Viki-Robles" passHref>
            <Image src="/github.svg" width={22} height={22} className={classes.socialMediaItem} />
          </Link>
          <Link href="https://codesandbox.io/u/Viki-Robles" passHref>
            <Image src="/sandbox.svg" width={22} height={22} className={classes.socialMediaItem} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
