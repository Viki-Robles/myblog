import React, { useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

export const useDarkMode = () => {
  const [darkState, setDarkState] = useState<boolean>(true);

  const palletType = darkState ? 'dark' : 'light';
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });

  return { darkState, setDarkState, darkTheme };
};
