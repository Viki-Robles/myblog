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
import { Monkey } from '../Monkey/Monkey';

const useStyles = makeStyles((theme) => ({
  title: {
    color: 'white',
    textAlign: 'right',
    marginRight: '20px',
    fontSize: '40px',
    [theme.breakpoints.down('md')]: {
      fontSize: '35px',
      margin: '0 auto',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
      textAlign: 'center',
    },
  },

  articlesListItem: {
    maxWidth: '800px',
    '&:hover': {
      borderColor: '#7F7FF8',
    },
  },
  articlesHeader: {
    color: '#B5B3B3',
    fontSize: '20px',
    fontFamily: 'Cinzel',
    '&:hover': {
      color: 'white',
    },
  },
  articlesSubHeader: {
    fontSize: '16px',
    fontFamily: 'Cinzel',
    color: '#b5b3b3',
  },

  frontendTitle: {
    marginTop: '20px',
    [theme.breakpoints.up('md')]: {
      fontSize: '40px',
      textAlign: 'left',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
      textAlign: 'center',
    },
  },
  quote: {
    color: 'white',
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
      maxWidth: '500px',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '40px',
    },
  },
  span: {
    color: '#7F7FF8',
    marginRight: '5px',
    marginLeft: '5px',
  },
  button: {
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
    [theme.breakpoints.down('sm')]: {},
  },
  pictureContainer: { marginLeft: '40px', marginBottom: '40px', marginTop: '40px' },
}));

export const TechnicalWritingList = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container sm={12} xs={12}>
      <Grid item md={4} sm={12} xs={12}>
        <Box className={classes.pictureContainer}>
          <Monkey />
        </Box>
        <Grid className={classes.quote} container direction="column">
          <motion.div initial={{ y: -250 }} animate={{ y: -10 }}>
            <Typography className={classes.frontendTitle}>Frontend Engineer</Typography>
          </motion.div>
          <motion.div initial={{ y: -250 }} animate={{ y: -10 }} transition={{ type: 'spring', stiffness: 100 }}>
            <Typography className={classes.frontendTitle}>
              I build custom <span className={classes.span}>WEB</span> solutions, write about
              <span className={classes.span}> DEV</span>
              and read graphic novels.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>

      <Grid item md={8} className={classes.articlesContainer}>
        <Box>
          <Typography className={classes.title}>Technical Writing</Typography>
        </Box>
        {getTechnicalWritingData.map(({ id, article, href, published }) => {
          return (
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Box className={classes.articlesHeader} key={id}>
                    <Link href={href}>{article}</Link>
                  </Box>
                  <Typography className={classes.articlesSubHeader}>{published}</Typography>
                  <Box className={classes.button}>
                    <Link href={href}>SEE POST</Link>
                  </Box>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          );
        })}
      </Grid>
    </Grid>
  );
};
