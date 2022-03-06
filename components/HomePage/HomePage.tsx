import { Grid } from '@material-ui/core';
import { Introduction } from '../Introduction/Introduction';
import { Projects } from '../Projects/Projects';
import { projectsData } from '../../data/projects.testData';
import { Contact } from 'components/Contact/Contact';
import { Footer } from 'components/Footer/Footer';

export const HomePage = (): JSX.Element => {
  return (
    <Grid>
      <Introduction />
      <Projects projects={projectsData} />
      <Contact />
      <Footer />
    </Grid>
  );
};
