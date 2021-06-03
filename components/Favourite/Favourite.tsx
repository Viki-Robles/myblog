import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(() => ({
  favourite: {
    color: 'white',
  },
  count: {},
  text: {},
}));

export const Favourite = (): JSX.Element | null => {
  const [count, setCount] = useState<number>(0);
  const classes = useStyles();

  const increaseFollowers = (): void => {
    setCount((prevCount) => {
      const newCount = Number(prevCount) + 1;
      localStorage.setItem('count', JSON.stringify(newCount));
      return newCount;
    });
  };

  useEffect(() => {
    const initialCount = localStorage.getItem('count');
    if (initialCount) {
      setCount(JSON.parse(initialCount));
    }
  }, []);

  return (
    <Grid className={classes.favourite} container direction="row">
      <Box className={classes.count}>{count}</Box>
      <Box>
        <FavoriteIcon onClick={increaseFollowers} />
      </Box>
      <Box className={classes.text}>Give me a heart</Box>
    </Grid>
  );
};
