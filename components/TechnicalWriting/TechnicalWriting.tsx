import React, { useEffect } from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import { getTechnicalWritingData } from '../../data/technical.testData';
import AOS from 'aos';

interface Props {
  window?: () => Window;
  children?: React.ReactElement;
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    padding: '10px',
    border: '2px dashed',
    borderColor: '#FFB7C5',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  articlesListItem: {
    maxWidth: '800px',
    '&:hover': {
      borderColor: '#FFB7C5',
    },
  },
  articlesHeader: {
    fontSize: '18px',
    '&:hover': {
      color: '#FFB7C5',
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
    backgroundColor: '#FFB7C5',
    fontWeight: 600,
    color: 'white',
    border: '1px solid #FFB7C5',
    padding: '0.6rem 1rem',
    fontSize: '16px',
    maxWidth: '140px',
    marginTop: '10px',
    textAlign: 'center',
  },
  title: {
    color: 'white',
    textAlign: 'right',
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
    backgroundColor: '#FFB7C5',
  },
  timelineDot: {
    borderColor: '#FFB7C5',
  },
  articleBox: {
    paddingTop: '100px',
  },
}));

export default function TechnicalWriting(): JSX.Element {
  const classes = useStyles();

  useEffect(() => {
    AOS.init({ duration: 2000, delay: 300 });
  }, []);

  return (
    <Box className={classes.articleBox}>
      {getTechnicalWritingData.map(({ id, article, href, published }) => {
        return (
          <div className={classes.container} data-aos="slide-up">
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
