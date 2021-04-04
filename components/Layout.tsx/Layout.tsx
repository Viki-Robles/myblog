import React, { Fragment, ReactNode } from 'react';
import { Box } from '@material-ui/core';
import { NavBar } from '../NavBar/NavBar';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Fragment>
      <NavBar />
      <Box>{children}</Box>
    </Fragment>
  );
};
