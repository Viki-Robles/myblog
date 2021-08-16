import React, { Fragment } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { projectsData } from '../../data/projects.testData';
import { GetStaticProps } from 'next';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '1px solid #7F7FF8',
    padding: '20px',
    width: '80%',
    margin: '0 auto',
    marginBottom: '25px',
    position: 'relative',
    '&:before': {
      position: 'absolute',
      display: 'block',
      content: '""',
      top: 0,
      left: 0,
      right: '100%',
      width: '0%',
      bottom: 0,
      zIndex: 1,
      backgroundColor: '#7F7FF8',
      animation: `$swipe-in-text 3000ms ${theme.transitions.easing.easeInOut}`,
    },
  },

  '@keyframes swipe-in-text': {
    '0%': {
      width: '0%',
      right: '100%',
      left: 0,
    },
    '50%': {
      left: 0,

      width: '100%',
      right: '0%',
    },
    '100%': {
      width: '0%',
      left: '100%',
    },
  },
  title: {
    color: 'white',
    fontSize: '1.625rem',
  },
  details: {
    color: 'white',
    marginTop: '20px',
    fontSize: '1.2rem',
  },
  technologies: {
    color: 'white',
    paddingTop: '20px',
  },
  link: {
    color: '#AB0552',
    fontWeight: 500,
    fontSize: '1.2rem',
    marginTop: '10px',
  },
  description: {
    padding: '0 30px',
  },
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
      {projects.map(({ title, details, id }) => {
        return (
          <Grid container className={classes.container} direction="column">
            <Typography className={classes.title}>{title}</Typography>
            <Typography className={classes.details}>{details}</Typography>
            <Typography className={classes.link}>
              <Link key={id} href={`/projects/${id}`}>
                CASE STUDY
              </Link>
            </Typography>
          </Grid>
        );
      })}
    </Fragment>
  );
};
