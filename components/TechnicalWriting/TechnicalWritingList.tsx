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

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'end',
    color: 'white',
    alignSelf: 'start',
    marginRight: '20px',
    fontSize: '40px',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      fontSize: '35px',
    },
  },
  container: {
    marginTop: '80px',
    [theme.breakpoints.down('md')]: {
      dispplay: 'block',
      margin: '0 auto',
    },
  },

  technicalWritingContainer: {
    maxWidth: '800px',
    '&:hover': {
      borderColor: '#7F7FF8',
    },
  },
  articleTitle: {
    color: '#B5B3B3',
    fontSize: '20px',
    fontFamily: 'Cinzel',
    '&:hover': {
      color: 'white',
    },
  },
  published: {
    fontSize: '16px',
    fontFamily: 'Cinzel',
    color: '#b5b3b3',
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
    fontSize: '45px',
    marginTop: '20px',
    marginLeft: '20px',
  },
  span: {
    color: '#7F7FF8',
    marginRight: '5px',
    marginLeft: '5px',
  },
  postLink: {
    border: '1px solid #7F7FF8',
    padding: '5px 20px',
    color: '#7F7FF8',
    boxShadow: '2px 5px 10px 2px #000',
    fontSize: '13px',
    maxWidth: '140px',
    marginTop: '10px',
    textAlign: 'center',
  },
  articlesContainer: {
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
    },
  },
}));

export const TechnicalWritingList = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid className={classes.container} sm={12} xs={12}>
      <Grid container>
        <Grid item md={4} sm={12}>
          <Image src="/myself.svg" width={500} height={500} className={classes.picture} />
          <Box className={classes.frontend}>
            <motion.div initial={{ y: -250 }} animate={{ y: -10 }}>
              <Typography variant="h4">
                <span>F</span>
                rontend Engineer
              </Typography>
            </motion.div>
          </Box>
          <Grid className={classes.quote} container direction="column">
            <Box>
              <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ type: 'spring', stiffness: 100 }}>
                I build custom <span className={classes.span}>WEB</span> solutions, write about
                <span className={classes.span}> DEV</span>
                and reading graphic novels.
              </motion.div>
            </Box>
          </Grid>
        </Grid>

        <Grid item md={8} className={classes.articlesContainer}>
          <Typography variant="h3" className={classes.title}>
            Technical Writing
          </Typography>
          {getTechnicalWritingData.map(({ id, article, href, published }) => {
            return (
              <Timeline>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Grid
                      key={id}
                      container
                      justify="flex-start"
                      className={classes.technicalWritingContainer}
                      direction="column"
                    >
                      <Box className={classes.articleTitle}>
                        <Link href={href}>{article}</Link>
                      </Box>
                      <Typography className={classes.published}>{published}</Typography>
                      <Box className={classes.postLink}>
                        <Link href={href}>SEE POST </Link>
                      </Box>
                    </Grid>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};
function clsx(animatedItem: any, arg1: { [x: number]: any }): string {
  throw new Error('Function not implemented.');
}
