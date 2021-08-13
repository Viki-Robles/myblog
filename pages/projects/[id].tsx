import { Grid, Typography } from '@material-ui/core';
import { GetStaticPaths, GetStaticProps } from 'next';
import { projectsData } from '../../data/projects.testData';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projects = projectsData.filter((project) => project.id.toString() === params.id);
  return {
    props: {
      project: projects[0],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projectsData.map((project) => ({
    params: { id: project.id.toString() },
  }));
  return { paths, fallback: false };
};

export default ({ project }) => (
  <Grid>
    <Typography>{project.title}</Typography>
    <Typography>{project.details}</Typography>
  </Grid>
);
