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
    color: '#7F7FF8',
    textAlign: 'center',
    fontSize: '2.2rem',
    fontWeight: 300,
  },
  subtitle: {
    textAlign: 'center',
    color: 'white',
    fontSize: '1.8rem',
    fontWeight: 300,
    padding: '10px',
  },
  container: { marginTop: '10%', marginBottom: '50px', padding: '20px' },
  role: {
    color: '#7F7FF8',
    fontSize: '1.8rem',
  },
  technologies: {
    color: 'white',
    fontSize: '1.8rem',
    fontWeight: 300,
  },
  roleBox: {
    maxWidth: '700px',
    lineHeight: '3rem',
    textAlign: 'center',
    margin: '0 auto',
    marginBottom: '50px',
  },
  stack: {
    color: 'white',
    fontSize: '2.1rem',
  },
  stackContainer: {
    maxWidth: '700px',
    lineHeight: '3rem',
    textAlign: 'center',
    margin: '0 auto',
    marginBottom: '50px',
  },
  button: {
    borderRadius: '5px',
    border: '1px solid #7F7FF8',
    padding: '10px 22px',
    color: 'white',
    boxShadow: '2px 5px 10px 2px #000',
    fontSize: '16px',
    maxWidth: '240px',
    textAlign: 'center',
    marginBottom: '20px',
    margin: '0 auto',
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
    borderRadius: '5px',
    marginBottom: '50px',
    backgroundColor: '#AB0552',
    padding: '12px 20px',
    color: 'white',
    boxShadow: '2px 5px 10px 2px #000',
    maxWidth: '200px',
    textAlign: 'center',
    margin: '0 auto',
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
          <Image src={project.img} alt="Picture of the author" width={500} height={500} />
        </Box>
      </motion.div>
      <Box className={classes.link}>
        <Link href={project.link}>View Website</Link>
      </Box>
      <Box className={classes.roleBox}>
        <Typography className={classes.role}>Role: {project.role}</Typography>
      </Box>
      <Grid container direction="column" className={classes.stackContainer}>
        <Typography className={classes.stack}>Stack</Typography>
        <Typography className={classes.technologies}>{project.technologies}</Typography>
      </Grid>
      <Box className={classes.buttonContainer}>
        <Box className={classes.button}>
          <Link href="/">Back to Home Page</Link>
        </Box>
      </Box>
    </Grid>
  );
};
