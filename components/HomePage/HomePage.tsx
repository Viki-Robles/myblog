import { Introduction } from '../Introduction/Introduction';
import { Grid } from '@material-ui/core';
import { Projects } from '../Projects/Projects';
import { projectsData } from '../../data/projects.testData';

export const HomePage = (): JSX.Element => {
  return (
    <Grid>
      <Introduction />
      <Projects projects={projectsData} />
    </Grid>
  );
};
