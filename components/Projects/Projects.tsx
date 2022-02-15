import React, { Fragment } from 'react';
import { GetStaticProps } from 'next';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Box from '@mui/material/Box';
import { projectsData } from '../../data/projects.testData';

import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: '5px',
    border: '1px solid #4A63D6',
    padding: '5px 20px',
    fontSize: '13px',
    maxWidth: '140px',
    marginTop: '10px',
    textAlign: 'center',
  },
  projects: {
    width: '300px',
    height: '300px',
    marginBottom: '40px',
    background: '#161e26',
    padding: '32px',
    maxWidth: '400px',
    borderRadius: '10px',
    top: 0,
    cursor: 'pointer',
    transition: 'ease 0.5s',
    '&:hover': {
      transform: ' translate(0, -20px)',
    },
  },

  title: {
    margin: '0px 0px 10px',
    fontWeight: 600,
    fontSize: '1.3rem',
    lineHeight: '1.1rem',
  },
  details: {
    fontWeight: 300,
    color: '#8998a7',
  },
  projectTitle: { textAlign: 'center', marginBottom: '40px', fontWeight: 300, color: '#5d75e7' },
}));

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { projects: projectsData },
  };
};

export const Projects = ({ projects }): JSX.Element => {
  const classes = useStyles();

  return (
    <Fragment>
      <Typography className={classes.projectTitle} variant="h4">
        Some Archive projects
      </Typography>
      <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        {projects.map(({ title, details, id }) => {
          return (
            <Fragment>
              <Grid container className={classes.projects} id="projects">
                <Typography className={classes.title}>{title}</Typography>
                <Typography className={classes.details}>{details}</Typography>
                <Box className={classes.button}>
                  <Link key={id} href={`/projects/${id}`}>
                    Read more
                  </Link>
                </Box>
              </Grid>
            </Fragment>
          );
        })}
      </Box>
    </Fragment>
  );
};
