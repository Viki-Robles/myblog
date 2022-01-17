import React, { useState, useMemo } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

export const useDarkMode = () => {
  const [darkState, setDarkState] = useState<boolean>(true);

  const palletType = darkState ? 'dark' : 'light';
  const darkTheme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: palletType,
        },
      }),
    [darkState],
  );

  return { darkState, setDarkState, darkTheme };
};
