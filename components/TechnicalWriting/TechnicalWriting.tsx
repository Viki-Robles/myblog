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
  container: {
    display: 'grid',
    padding: '10px',
    border: '2px dashed',
    borderColor: '#E35085',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  articlesListItem: {
    maxWidth: '800px',
    '&:hover': {
      borderColor: '#E35085',
    },
  },
  articlesHeader: {
    fontSize: '18px',
    '&:hover': {
      color: '#E35085',
    },
  },
  articlesSubHeader: {
    fontSize: '16px',
    color: '#b8bedd',
  },
  articlesContainer: {
    marginTop: '80px',
  },
  button: {
    borderRadius: '5px',
    backgroundColor: '#E35085',
    fontWeight: 600,
    color: 'white',
    border: '1px solid #E35085',
    padding: '0.6rem 1rem',
    fontSize: '16px',
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
          <div className={classes.container}>
            <Box className={classes.articlesHeader} key={id}>
              <Link href={href}>{article}</Link>
            </Box>
            <Typography className={classes.articlesSubHeader}>{published}</Typography>
            <Box className={classes.button}>
              <Link href={href}>SEE POST</Link>
            </Box>
          </div>
        );
      })}
    </Box>
  );
}
