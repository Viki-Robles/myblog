import GithubArticles from '../components/GithubArticles/GithubArticles';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Blog } from '../components/Blog/Blog';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  github: {
    textAlign: 'left',
  },
  container: {
    marginTop: '100px',
    padding: '10px',
    [theme.breakpoints.down('sm')]: {
      padding: '20px',
    },
  },
  header: {
    color: 'white',
    marginBottom: '20px',
    fontSize: '40px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
  },
  aboutTitle: {
    fontSize: '80px',
    color: 'white',
    alignSelf: 'left',
    [theme.breakpoints.down('sm')]: {
      fontSize: '60px',
    },
  },
  aboutText: {
    maxWidth: '600px',
    color: 'white',
    marginBottom: '100px',
    letterSpacing: '0px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },

  button: {
    border: '1px solid #7F7FF8',
    padding: '7px 20px',
    color: 'white',
    boxShadow: '2px 5px 10px 2px #000',
    fontSize: '13px',
    maxWidth: '140px',
    textAlign: 'center',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      marginBottom: '40px',
    },
    [theme.breakpoints.up('sm')]: {
      margin: 0,
      marginBottom: '40px',
    },
  },
  aboutContainer: {
    marginLeft: '60px',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },
  blog: {},
}));

export default function Github(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container className={classes.container} spacing={2}>
      <Grid item md={7} direction="row" sm={7} xl={8}>
        <Box className={classes.aboutContainer}>
          <Grid item className={classes.blog}>
            <Blog />
          </Grid>
          {/* <Typography className={classes.aboutTitle}>Contact me</Typography>
          <Box className={classes.aboutText} display="flex">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially. unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </Box> */}
        </Box>
      </Grid>
      <Grid item md={5} className={classes.github} sm={5} xl={4}>
        <Typography className={classes.header}>GITHUB</Typography>
        <Box className={classes.button}>
          <Link href="https://github.com/Viki-Robles">GITHUB LINK</Link>
        </Box>
        <GithubArticles />
      </Grid>
    </Grid>
  );
}
