import React, { Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { projectsData } from '../../data/projects.testData';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import axios from 'axios';

const useStyles = makeStyles(() => ({
  container: {
    border: '1px solid #7F7FF8',
    padding: '20px',
    width: '80%',
    margin: '0 auto',
    marginBottom: '25px',
    '&::before': {
      content: '"',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#7F7FF8',
      transformOrigin: 'right',
      transition: '0.5s',
    },
  },

  title: {
    color: 'white',
    fontSize: '1.625rem',
  },
  details: {
    color: 'white',
    marginTop: '20px',
    fontSize: 'inherit',
  },
  technologies: {
    color: 'white',
    paddingTop: '20px',
  },
  link: {
    color: 'white',
    borderRadius: '10px',
    backgroundColor: '#AB0552',
    padding: '7px 20px',
    boxShadow: '2px 5px 10px 2px #000',
    maxWidth: '160px',
    textAlign: 'center',
    fontSize: '13px',
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
          <Grid container className={classes.container}>
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
