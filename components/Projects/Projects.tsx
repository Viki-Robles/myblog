import React from 'react';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { projectsData } from '../../data/projects.testData';
import { StaggerWrap } from 'components/StaggerWrap/StaggerWrap';
import { ScaleBox } from '../ScaleBox/ScaleBox';
import styles from './Projects.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  projectTitle: {
    fontSize: '2.2rem',
    textAlign: 'center',
    marginBottom: '5px',
    fontWeight: 600,
    color: '#4A63D6',
    border: '0 solid #e2e8f0',
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
    textAlign: 'left',
    marginTop: '10px',
    marginBottom: '5px',
    fontWeight: 550,
    fontSize: '1.3rem',
    lineHeight: '1.1rem',
    paddingBottom: '5px',
  },

  featured: {
    fontSize: '1.5rem',
    color: '#ff61be',
    paddingBottom: '5px',
  },

  details: {
    lineHeight: '1.3',
    textAlign: 'left',
    position: 'relative',
    paddingBottom: '20px',
    fontSize: '18px',
    fontWeight: 300,
    color: '#8998a7',
  },

  img: {
    opacity: 0.5,
    boxShadow: '0 10px 30px -15px var(--navy-shadow)',
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
    fontWeight: 600,
    textAlign: 'center',
    borderRadius: '5px',
    border: '1px solid #e35085',
    background: '#e35085',
    padding: '0.6rem 1.6rem',
    fontSize: '16px',
    maxWidth: '140px',
    marginTop: '10px',
    right: '47px',
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
          Some Things I’ve Built
        </Typography>
      </StaggerWrap>

      {projects.map(({ title, details, id, img }, index) => {
        const isMarginRight = index % 2 === 0;
        const mobile = useMediaQuery('(max-width:600px)');

        return (
          <div>
            <ScaleBox duration={1} delayOrder={rand(1, 12)}>
              <div className={styles.projects} key={id} style={{ marginRight: isMarginRight && !mobile ? '20%' : '0' }}>
                <Image
                  src={img}
                  alt="Picture of the author"
                  width={500}
                  height={450}
                  loading="eager"
                  priority={true}
                  className={classes.img}
                />
                <div className={styles.project}>
                  <Typography className={classes.title}>{title}</Typography>
                  <Typography className={classes.details}>{details}</Typography>
                  {id === 'commento' ? (
                    <a key={id} href="https://commentto.vercel.app/" className={classes.button} target="_blank">
                      VIEW
                    </a>
                  ) : (
                    <a key={id} href={`/projects/${id}`} className={classes.button} target="_blank">
                      VIEW
                    </a>
                  )}
                </div>
              </div>
            </ScaleBox>
          </div>
        );
      })}
    </div>
  );
};
