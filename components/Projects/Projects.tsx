import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { projectsData } from '../../data/projects.testData';
import { GetStaticProps } from 'next';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  swipe: {
    borderRadius: '5px',
    border: '1px solid #4A63D6',
    padding: '20px',
    width: '80%',
    margin: '0 auto',
    marginTop: '45px',
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
      backgroundColor: '#4A63D6',
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
    fontSize: '1.625rem',
  },
  details: {
    marginTop: '5px',
    fontSize: '1.2rem',
    fontWeight: 300,
  },
  technologies: {
    color: 'white',
    paddingTop: '20px',
  },
  link: {
    borderRadius: '5px',
    marginTop: '10px',
    backgroundColor: '#AB0552',
    padding: '5px 12px',
    color: 'white',
    boxShadow: '2px 2px 8px 0px #000',
    fontSize: '14px',
    maxWidth: '100px',
    textAlign: 'center',
    fontWeight: 500,
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
          <Fragment>
            <Grid container className={classes.swipe} direction="column" id="projects">
              <Typography className={classes.title}>{title}</Typography>
              <Typography className={classes.details}>{details}</Typography>
              <Typography className={classes.link}>
                <Link key={id} href={`/projects/${id}`}>
                  Read more
                </Link>
              </Typography>
            </Grid>
          </Fragment>
        );
      })}
    </Fragment>
  );
};
