import React from 'react';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { projectsData } from '../../data/projects.testData';
import { StaggerWrap } from 'components/StaggerWrap/StaggerWrap';
import { ScaleBox } from '../ScaleBox/ScaleBox';
import styles from './Projects.module.css';

const useStyles = makeStyles((theme) => ({
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

  title: {
    marginTop: '10px',
    marginBottom: '5px',
    fontWeight: 550,
    fontSize: '1.3rem',
    lineHeight: '1.1rem',
    paddingBottom: '5px',
  },

  featured: {
    fontSize: '1.1rem',
    color: '#4a63d6',
    paddingBottom: '5px',
  },

  details: {
    fontWeight: 300,
    color: '#8998a7',
  },

  img: {
    opacity: 0.5,
    position: 'relative',
    '&:hover': {
      opacity: 0.9,
      cursor: 'pointer',
    },
    [theme.breakpoints.down('sm')]: {
      opacity: 0.1,
      '&:hover': {
        opacity: 0.1,
      },
    },
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
    <div className="projects-container">
      <StaggerWrap childrenDelay={1} ease="backInOut" delayOrder={2}>
        <Typography className={classes.projectTitle} variant="h4">
          Some archive projects
        </Typography>
        <Typography className={classes.projectsubTitle}>view manuscripts</Typography>
      </StaggerWrap>

      {projects.map(({ title, details, id, img }) => {
        return (
          <ScaleBox duration={1} delayOrder={rand(1, 12)}>
            <div className={styles.projects} key={id}>
              <Image
                src={img}
                alt="Picture of the author"
                width={500}
                height={500}
                loading="eager"
                priority={true}
                className={classes.img}
              />
              <div className={styles.project}>
                <Image src="/folder.svg" width={30} height={30} alt="project" />
                <Typography className={classes.featured}>Featured Project</Typography>
                <Typography className={classes.title}>{title}</Typography>
                <Typography className={classes.details}>{details}</Typography>
                {id === 'commento' ? (
                  <a key={id} href="https://commentto.vercel.app/" className={classes.button} target="_blank">
                    Open project
                  </a>
                ) : (
                  <a key={id} href={`/projects/${id}`} className={classes.button} target="_blank">
                    Open project
                  </a>
                )}
              </div>
            </div>
          </ScaleBox>
        );
      })}
    </div>
  );
};
