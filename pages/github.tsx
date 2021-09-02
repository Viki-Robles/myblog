import GithubArticles from '../components/GithubArticles/GithubArticles';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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

  button: {
    borderRadius: '5px',
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
}));

export default function Github(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container className={classes.container} spacing={2}>
      <Grid item md={7} direction="row" sm={7} xl={8}></Grid>
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
