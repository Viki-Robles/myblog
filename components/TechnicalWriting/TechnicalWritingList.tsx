import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getTechnicalWritingData } from '../TechnicalWriting/technical.testData';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const useStyles = makeStyles(() => ({
  title: { textAlign: 'end', color: 'white', alignSelf: 'start' },
  container: { marginTop: '100px' },

  technicalWritingContainer: {
    border: '1px solid #B5B3B3',
    borderRadius: '5px',
    padding: '10px',
    maxWidth: '800px',
    '&:hover': {
      borderColor: '#7F7FF8',
    },
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
  frontend: {
    color: 'white',
    fontSize: '30px',
    marginTop: '20px',
    marginLeft: '20px',
  },
  quote: {
    color: 'white',
    fontSize: '50px',
    marginTop: '20px',
    marginLeft: '20px',
  },
  span: {
    color: '#7F7FF8',
    marginRight: '5px',
  },
}));

export const TechnicalWritingList = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Grid container>
        <Grid item md={5}>
          <Image src="/mypicture.png" width={500} height={500} className={classes.picture} />
          <Box className={classes.frontend}>🏠 Frontend Engineer</Box>
          <motion.div animate={{ scale: 2 }} />
          <Grid className={classes.quote} container direction="column">
            <Box>
              I build custom <span className={classes.span}>WEB</span> solutions, write about{' '}
              <span className={classes.span}>
                <Link href="https://dev.to/vikirobles">DEV</Link>
              </span>
              and I love graphic novels.
            </Box>
          </Grid>
        </Grid>

        <Grid item md={7}>
          <Typography variant="h3" className={classes.title}>
            Technical Writing
          </Typography>
          {getTechnicalWritingData.map(({ id, article, href }) => {
            return (
              <Timeline>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Grid key={id} container justify="flex-start" className={classes.technicalWritingContainer}>
                      <Box className={classes.articleTitle}>
                        <Link href={href}>{article}</Link>
                      </Box>
                    </Grid>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            );
          })}
          {/* <Box className={classes.button}>
            <Link href="/">View All</Link>
          </Box> */}
        </Grid>
      </Grid>
    </Grid>
  );
};
