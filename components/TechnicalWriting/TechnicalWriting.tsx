import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Timeline from '@material-ui/lab/Timeline';
import { Typography, Box } from '@material-ui/core';
import { getTechnicalWritingData } from '../../data/technical.testData';

interface Props {
  window?: () => Window;
  children?: React.ReactElement;
}

const useStyles = makeStyles((theme) => ({
  articlesListItem: {
    maxWidth: '800px',
    '&:hover': {
      borderColor: '#ff61be',
    },
  },
  articlesHeader: {
    fontSize: '18px',
    '&:hover': {
      color: '#ff61be',
    },
  },
  articlesSubHeader: {
    fontFamily: 'Cinzel',
    fontSize: '16px',
    color: '#ff61be',
  },
  articlesContainer: {
    marginTop: '80px',
  },
  button: {
    borderRadius: '5px',
    border: '1px solid #ff61be',
    padding: '0.6rem 1rem',
    fontSize: '13px',
    maxWidth: '140px',
    marginTop: '10px',
    textAlign: 'center',
  },
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
  timelineItem: {
    '&::before': {
      display: 'none',
    },
  },
  timelineSeparator: {
    width: '1px',
    backgroundColor: '#ff61be',
  },
  timelineDot: {
    borderColor: '#ff61be',
  },
}));

export default function TechnicalWriting(): JSX.Element {
  const classes = useStyles();

  return (
    <Box>
      {getTechnicalWritingData.map(({ id, article, href, published }) => {
        return (
          <Timeline>
            <TimelineItem className={classes.timelineItem}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" className={classes.timelineDot} />
                <TimelineConnector className={classes.timelineSeparator} />
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
    </Box>
  );
}
