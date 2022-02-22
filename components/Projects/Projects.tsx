import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Box from '@mui/material/Box';
import { projectsData } from '../../data/projects.testData';
import { StaggerWrap } from 'components/StaggerWrap/StaggerWrap';
import { ScaleBox } from '../ScaleBox/ScaleBox';

const useStyles = makeStyles((theme) => ({
  projectBox: {
    paddingBottom: '25%',
    [theme.breakpoints.up('lg')]: { paddingBottom: '14%' },
  },

  projectTitle: {
    textAlign: 'center',
    marginBottom: '5px',
    fontWeight: 300,
    color: '#5d75e7',
    [theme.breakpoints.down('sm')]: { fontSize: '1.6rem' },
  },

  projectsubTitle: {
    fontSize: '18px',
    textAlign: 'center',
    marginBottom: '40px',
    fontWeight: 300,
    color: 'white',
    [theme.breakpoints.down('sm')]: { fontSize: '1.2rem' },
  },

  project: {
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
    boxShadow:
      'rgb(0 0 0 / 20%) 0px 12px 28px 0px, rgb(0 0 0 / 10%) 0px 2px 4px 0px, rgb(116 116 116 / 5%) 0px 0px 0px 1px inset',
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
    [theme.breakpoints.up('lg')]: { fontSize: '15px' },
  },
}));

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { projects: projectsData },
  };
};

export const Projects = ({ projects }): JSX.Element => {
  const classes = useStyles();

  const rand = (min, max) => {
    return Math.floor(Math.random() * (+max - +min)) + +min;
  };

  return (
    <Box className={classes.projectBox}>
      <StaggerWrap childrenDelay={1} ease="backInOut" delayOrder={2}>
        <Typography className={classes.projectTitle} variant="h4">
          Some archive projects
        </Typography>
        <Typography className={classes.projectsubTitle}>view manuscripts</Typography>
      </StaggerWrap>
      <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        {projects.map(({ title, details, id }) => {
          return (
            <ScaleBox duration={1.5} delayOrder={rand(1, 12)}>
              <Grid container className={classes.project} id="projects">
                <div>
                  <Image src="/folder.svg" width={30} height={30} alt="project" />
                </div>
                <Typography className={classes.title}>{title}</Typography>
                <Typography className={classes.details}>{details}</Typography>
                <div>
                  <Box className={classes.button}>
                    <Link key={id} href={`/projects/${id}`}>
                      Open project
                    </Link>
                  </Box>
                </div>
              </Grid>
            </ScaleBox>
          );
        })}
      </Box>
    </Box>
  );
};
