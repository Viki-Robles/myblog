import React, { Fragment } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '100px',
    },
    marginTop: '20%',
  },
  title: {
    color: 'white',
    fontSize: '40px',
  },
  details: {
    color: 'white',
    marginTop: '20px',
  },
  technologies: {
    color: 'white',
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
  pictureContainer: {
    padding: '0 30px',
  },
  picture: {
    borderRadius: '10px',
    '&:hover': {
      transform: 'scale(1.5)',
      transition: 'transform .2s',
    },
  },
}));

const PROJECTS = [
  {
    title: 'Hellohub',
    details:
      'Hellohub is a React website and application which assists users to sign up/ sign in  to their hellohub account and also gives information about the company itself. I build this project from scratch alongside with a designer using React and Material UI. The difficult part of the website was the Authentication of users using Firebase however ut was fun but also very intersting to see how the whole process is done isnce most of the web apps are using kind of the same logic. ',
    link: 'https://hellohub.com/',
    technologies: 'JavaScript, React, Material UI',
    img: '/images/hellohub.png',
  },
  {
    title: 'Digital Futures',
    details:
      'Digital Futures DFX is a recruitment web application and integral part of the Academy. The application presents the skills and capabilites to potential clients for roles in software engineering and data science. This application is using TypeScript, Vite, Theme UI, Firebase, Hasura, GraphQl.',
    link: '',
    technologies: 'TypeScript,Vite, GraphQL, Firebase, Hasura, Theme UI',
    img: '/images/hellohub.png',
  },
];
export const Projects = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Fragment>
      {PROJECTS.map(({ title, details, link, technologies, img }, index) => {
        const reverseItems = index % 2 !== 0;
        return (
          <Grid container key={title} direction={reverseItems ? 'row-reverse' : 'row'} className={classes.container}>
            <Grid item md={5} className={classes.description}>
              <Typography className={classes.title}>{title}</Typography>
              <Typography className={classes.details}>{details}</Typography>
              <Typography className={classes.technologies}>Stack: {technologies}</Typography>
            </Grid>
            <Grid item md={7} className={classes.pictureContainer}>
              <Image src="/hellohub.png" width={700} height={450} className={classes.picture} />
              <Box className={classes.link}>
                <Link href={link}>View Project</Link>
              </Box>
            </Grid>
          </Grid>
        );
      })}
    </Fragment>
  );
};
