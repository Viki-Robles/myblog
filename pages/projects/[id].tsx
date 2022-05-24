import { Grid, Typography, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GetStaticPaths, GetStaticProps } from 'next';
import { projectsData } from '../../data/projects.testData';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    fontSize: '2.2rem',
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8rem',
    },
  },
  subtitle: {
    color: '#4A63D6',
    textAlign: 'center',
    fontSize: '1.8rem',
    fontWeight: 600,
    padding: '10px',
    maxWidth: '600px',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
  },
  container: {
    width: '900px',
    marginTop: '10%',
    marginBottom: '50px',
    padding: '20px',
    border: '2px dashed',
    borderRadius: '15px',
    borderColor: '#FFBCD9',
    margin: '0 auto',
    boxShadow: '0 0 1em 0 var(--clr-neon)',

    [theme.breakpoints.down('md')]: {
      width: 'auto',
      padding: '18px',
    },
  },
  role: {
    color: '#4A63D6',
    fontSize: '1.8rem',
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
  },
  technologies: {
    fontSize: '1.8rem',
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
  },
  roleBox: {
    maxWidth: '700px',
    lineHeight: '3rem',
    textAlign: 'center',
    margin: '0 auto',
    marginBottom: '50px',
    fontWeight: 600,
  },
  stack: {
    fontSize: '2.2rem',
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8rem',
    },
  },
  stackContainer: {
    maxWidth: '700px',
    lineHeight: '3rem',
    textAlign: 'center',
    margin: '0 auto',
    marginBottom: '50px',
    fontWeight: 600,
  },
  button: {
    borderRadius: '5px',
    marginBottom: '50px',
    border: '1px solid #FFBCD9',
    background: '#FFBCD9',
    boxShadow: '0 0 1em 0 var(--clr-neon)',
    padding: '12px 20px',
    color: 'white',
    maxWidth: '200px',
    textAlign: 'center',
    margin: '0 auto',
    cursor: 'pointer',
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      padding: '8px 12px',
      fontSize: '1rem',
      maxWidth: '150px',
    },
  },
  buttonContainer: {
    display: 'flex',
    marginTop: '10%',
  },
  picture: {
    display: 'grid',
    marginBottom: '10px',
    marginTop: '50px',
    padding: '20px',
  },
  img: {
    margin: '0 auto',
    maxWidth: '100%',
  },
  link: {
    marginBottom: '50px',
    borderRadius: '5px',
    border: '1px solid #FFBCD9',
    background: '#FFBCD9',
    padding: '0.75rem 1rem',
    color: 'white',
    maxWidth: '200px',
    textAlign: 'center',
    margin: '0 auto',
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      padding: '8px 12px',
      fontSize: '1rem',
      maxWidth: '150px',
    },
  },
}));

export default ({ project }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <Typography className={classes.title}>{project.title}</Typography>
      <Typography className={classes.subtitle}>{project.subtitle}</Typography>
      <motion.div initial={{ x: -250 }} animate={{ x: 0 }} transition={{ duration: 1, type: 'spring' }}>
        <Box className={classes.picture}>
          <Image
            src={project.img}
            alt="Picture of the author"
            width={500}
            height={500}
            loading="eager"
            priority={true}
          />
        </Box>
      </motion.div>

      <Box className={classes.roleBox}>
        <Typography className={classes.role}>Role: {project.role}</Typography>
      </Box>
      <Grid container direction="column" className={classes.stackContainer}>
        <Typography className={classes.stack}>Stack</Typography>
        <Typography className={classes.technologies}>{project.technologies}</Typography>
      </Grid>
      <Box className={classes.buttonContainer}>
        <Box className={classes.button}>
          <Link href="/">Home Page</Link>
        </Box>
      </Box>
    </Grid>
  );
};
