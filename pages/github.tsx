import GithubArticles from '../components/GithubArticles/GithubArticles';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Blog } from '../components/Blog/Blog';
import Link from 'next/link';

const useStyles = makeStyles(() => ({
  githubItems: {
    textAlign: 'left',
  },
  githubContainer: {
    marginTop: '100px',
    padding: '10px',
  },
  title: {
    color: 'white',
    marginBottom: '20px',
    fontSize: '40px',
  },
  aboutTitle: {
    // transform: 'rotate(90deg)',
    fontSize: '80px',
    color: 'white',
    alignSelf: 'left',
    marginLeft: '150px',
  },
  aboutText: {
    maxWidth: '600px',
    color: 'white',
    marginLeft: '150px',
  },
  contactContainer: {
    marginLeft: '150px',
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
  },
}));

export default function Github(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container className={classes.githubContainer} spacing={2}>
      <Grid container md={7} direction="row" sm={7} xl={8}>
        {/* <Typography className={classes.aboutTitle}>Who Am I?</Typography> */}
        <Box className={classes.aboutText} display="flex">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially. unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
        </Box>
        <Grid container className={classes.contactContainer}>
          <Blog />
        </Grid>
      </Grid>
      <Grid item md={5} className={classes.githubItems} sm={5} xl={4}>
        <Typography className={classes.title}>GITHUB</Typography>
        <Box className={classes.button}>
          <Link href="/">Github Link</Link>
        </Box>
        <GithubArticles />
      </Grid>
    </Grid>
  );
}
