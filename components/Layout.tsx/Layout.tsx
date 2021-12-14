import React, { ReactNode, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { changeTheme } from '../../utils/changeTheme';
import { Box } from '@material-ui/core';
import { NavBar } from '../NavBar/NavBar';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { darkTheme } = changeTheme();
  return (
    <ThemeProvider theme={darkTheme}>
      <Box style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
        <NavBar />
        <Box>{children}</Box>
      </Box>
    </ThemeProvider>
  );
};
