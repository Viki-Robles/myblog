import GithubArticles from '../components/GithubArticles/GithubArticles';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Contact } from '../components/Contact/Contact';
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
    marginBottom: '20PX',
  },
  aboutTitle: {
    transform: 'rotate(90deg)',
    fontSize: '80px',
    color: 'white',
  },
  aboutText: {
    maxWidth: '600px',
    color: 'white',
    textAlign: 'left',
  },
  contactContainer: {
    marginLeft: '150px',
  },
}));

export default function Github(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container className={classes.githubContainer}>
      <Grid container md={7} direction="row" sm={7} xl={7}>
        {/* <Typography className={classes.aboutTitle}>About me</Typography> */}
        <Box className={classes.aboutText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially. unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic typesetting, remaining essentially.
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop.
        </Box>
      </Grid>
      <Grid item md={5} className={classes.githubItems} sm={5} xl={5}>
        <Typography className={classes.title} variant="h3">
          GITHUB
        </Typography>
        <GithubArticles />
      </Grid>
      <Grid container className={classes.contactContainer}>
        <Contact />
      </Grid>
    </Grid>
  );
}
