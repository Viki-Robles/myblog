import { Introduction } from '../Introduction/Introduction';
import { Grid } from '@material-ui/core';
import { Projects } from '../Projects/Projects';

export const HomePage = (): JSX.Element => {
  return (
    <Grid>
      <Introduction />
      <Projects />
    </Grid>
  );
};
