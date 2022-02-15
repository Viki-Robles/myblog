import React, { Fragment } from 'react';
import { GetStaticProps } from 'next';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Box from '@mui/material/Box';
import { projectsData } from '../../data/projects.testData';
import Image from 'next/image';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  button: {
    textAlign: 'center',
    position: 'absolute',
    borderRadius: '5px',
    border: '1px solid #4A63D6',
    padding: '0.75rem 1rem',
    fontSize: '13px',
    maxWidth: '140px',
    marginTop: '10px',
    left: '27px',
    bottom: '10px',
  },
  projects: {
    position: 'relative',
    flexDirection: 'column',
    width: '300px',
    height: '300px',
    maxWidth: '400px',
    borderRadius: '8px',
    padding: '25px',
    marginBottom: '40px',
    background: '#161e26',
    gap: 4,
    top: 0,
    cursor: 'pointer',
    transition: 'ease 0.5s',
    '&:hover': {
      transform: ' translate(0, -20px)',
    },
  },

  title: {
    marginTop: '10px',
    fontWeight: 550,
    fontSize: '1.3rem',
    lineHeight: '1.1rem',
  },
  details: {
    fontWeight: 300,
    color: '#8998a7',
  },
  projectTitle: {
    textAlign: 'center',
    marginBottom: '5px',
    fontWeight: 300,
    color: '#5d75e7',
    [theme.breakpoints.down('sm')]: { fontSize: '1.6rem' },
  },
  projectBox: {
    paddingBottom: '25%',
  },
  projectsubTitle: {
    fontSize: '18px',
    textAlign: 'center',
    marginBottom: '40px',
    fontWeight: 300,
    color: 'white',
    [theme.breakpoints.down('sm')]: { fontSize: '1.2rem' },
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
    <Box className={classes.projectBox}>
      <Typography className={classes.projectTitle} variant="h4">
        Some Archive projects
      </Typography>
      <Typography className={classes.projectsubTitle}>view projects</Typography>
      <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        {projects.map(({ title, details, id }) => {
          return (
            <Fragment>
              <Grid container className={classes.projects} id="projects">
                <div>
                  <Image src="/folder.svg" width={30} height={30} />
                </div>
                <Typography className={classes.title}>{title}</Typography>
                <Typography className={classes.details}>{details}</Typography>
                <div>
                  <Box className={classes.button}>
                    <Link key={id} href={`/projects/${id}`}>
                      Read more
                    </Link>
                  </Box>
                </div>
              </Grid>
            </Fragment>
          );
        })}
      </Box>
    </Box>
  );
};
