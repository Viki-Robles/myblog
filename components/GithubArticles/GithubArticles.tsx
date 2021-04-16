import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { githubData } from '../GithubArticles/github.testData';
import Link from 'next/link';
import Image from 'next/image';

const useStyles = makeStyles(() => ({
  githubItem: {
    marginBottom: '15px',
    '&:hover': {
      backgroundColor: '#1E1E1B',
    },
  },
  line: {
    borderBottom: '1px solid #232b2b',
    padding: '10px',
  },
  githubItemDetails: {
    alignSelf: 'center',
    color: '#7F7FF8',
    fontSize: '16px',
    fontFamily: 'Cinzel',
  },
  starIcon: {
    marginRight: '10px',
  },
  githubsubTitle: {
    marginTop: '10px',
  },
  githubTitle: {
    fontSize: '24px',
    color: '#DCDBDB',
    letterSpacing: 0,
  },
}));

export default function GithubArticles(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container>
      {githubData.map(({ id, title, href, details }) => {
        return (
          <Grid key={id} className={classes.githubItem} direction="column">
            <Box className={classes.githubTitle}>
              <Link href={href}>{title}</Link>
            </Box>
            <Box display="flex" className={classes.githubsubTitle}>
              <Box className={classes.starIcon}>
                <Image src="/star.svg" width={15} height={15} />
              </Box>
              <Box className={classes.githubItemDetails}>{details}</Box>
            </Box>
            <Box className={classes.line}></Box>
          </Grid>
        );
      })}
    </Grid>
  );
}
