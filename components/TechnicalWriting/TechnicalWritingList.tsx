import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getTechnicalWritingData } from '../TechnicalWriting/technical.testData';
import Link from 'next/link';
import Image from 'next/image';

const useStyles = makeStyles(() => ({
  title: { textAlign: 'end', color: 'white', alignSelf: 'start' },
  container: { marginTop: '100px' },

  technicalWritingContainer: {
    border: '1px solid #B5B3B3',
    borderRadius: '5px',
    padding: '10px',
    marginTop: '35px',
    maxWidth: '800px',
  },
  articleTitle: {
    color: '#B5B3B3',
  },
  button: {
    backgroundColor: '#222121',
    border: '1px solid #7F7FF8',
    color: '#7F7FF8',
    padding: '5px 20px',
    borderRadius: '5px',
    maxWidth: '100px',
    marginTop: '40px',
    margin: '0 auto',
  },
  picture: {
    borderRadius: '50%',
  },
}));

export const TechnicalWritingList = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Typography variant="h3" className={classes.title}>
        Technical Writing
      </Typography>
      <Grid container>
        <Grid item md={7}>
          <Image src="/mypicture.jpg" width={350} height={400} className={classes.picture} />
        </Grid>
        <Grid item md={5}>
          {getTechnicalWritingData.map(({ id, article, href }) => {
            return (
              <Grid key={id} container justify="flex-start" className={classes.technicalWritingContainer}>
                <Box className={classes.articleTitle}>
                  <Link href={href}>{article}</Link>
                </Box>
              </Grid>
            );
          })}
          <Box className={classes.button}>
            <Link href="/">View All</Link>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
