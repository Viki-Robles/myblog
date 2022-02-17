import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { NavBar } from '../NavBar/NavBar';
import Link from 'next/link';
import Image from 'next/image';

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
}));

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      <NavBar />
      <Box>{children}</Box>
      <Box className={classes.sideElemenetContainer}>
        <Box className={classes.sideElemenetItem}>
          <Typography className={classes.emailLink}>
            <Link href="mailto:vasiliki.robles@gmail.com">vasiliki.robles@gmail.com</Link>
          </Typography>
        </Box>
      </Box>
      <Box className={classes.socialMediaContainer}>
        <Box display="flex" className={classes.socialMedia}>
          <Image src="/instagram.svg" width={22} height={22} />
          <Image src="/linkedin.svg" width={22} height={22} />
          <Image src="/github.svg" width={22} height={22} />
          <Image src="/sandbox.svg" width={22} height={22} />
        </Box>
      </Box>
    </Box>
  );
};
