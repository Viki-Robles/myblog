import React, { ReactNode } from 'react';
import { Box } from '@material-ui/core';
import { NavBar } from '../NavBar/NavBar';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Box style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      <NavBar />
      <Box>{children}</Box>
    </Box>
  );
};
