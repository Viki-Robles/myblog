import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { githubData } from '../GithubArticles/github.testData';
import Link from 'next/link';
import Image from 'next/image';

const useStyles = makeStyles(() => ({
  githubItem: {
    marginBottom: '30px',
  },
  line: {
    borderBottom: '1px solid #232b2b',
    padding: '10px',
  },
  details: {
    alignSelf: 'center',
    color: '#7F7FF8',
    fontSize: '18px',
  },
  icon: {
    marginRight: '10px',
  },
  subTitle: {
    marginTop: '10px',
  },
  mainTitle: {
    fontSize: '25px',
    color: '#DCDBDB',
  },
}));

export default function GithubArticles(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container>
      {githubData.map(({ id, title, href, details }) => {
        return (
          <Grid key={id} className={classes.githubItem} direction="column">
            <Box className={classes.mainTitle}>
              <Link href={href}>{title}</Link>
            </Box>
            <Box display="flex" className={classes.subTitle}>
              <Box className={classes.icon}>
                <Image src="/star.svg" width={15} height={15} />
              </Box>
              <Box className={classes.details}>{details}</Box>
            </Box>
            <Box className={classes.line}></Box>
          </Grid>
        );
      })}
    </Grid>
  );
}
