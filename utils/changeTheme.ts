import React, { useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

export const changeTheme = () => {
  const [darkState, setDarkState] = useState<boolean>(false);

  const palletType = darkState ? 'light' : 'dark';
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });

  const handleThemeChange = () => {
    console.log('is changed');
    setDarkState(!darkState);
    console.log('is dark');
  };

  return { darkState, setDarkState, handleThemeChange, darkTheme };
};
