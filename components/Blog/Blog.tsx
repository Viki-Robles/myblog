import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { blogData } from '../Blog/blog.testData';
import Link from 'next/link';

const useStyles = makeStyles(() => ({
  blog: {},
  header: {
    fontSize: '40px',
    color: 'white',
  },
  title: {
    color: 'white',
  },
  blogContainer: {},
  button: {
    marginTop: '10px',
    borderRadius: '10px',
    backgroundColor: '#AB0552',
    padding: '7px 20px',
    color: 'white',
    boxShadow: '2px 5px 10px 2px #000',
    fontSize: '13px',
    maxWidth: '140px',
    textAlign: 'center',
  },
  line: {
    borderBottom: '0.4px solid #232b2b',
    padding: '10px',
    maxWidth: '550px',
  },
}));

export interface BlogProps {
  title: string;
  author: string;
  link: string;
  id: number;
}

export const Blog = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container className={classes.blog}>
      <Box className={classes.header}>Blog Posts</Box>
      {blogData.map(({ title, link, id }) => {
        return (
          <>
            <Grid key={id} container className={classes.blogContainer} direction="column">
              <Box className={classes.title}>{title}</Box>
              <Box className={classes.button}>
                <Link href={link}>SEE POST</Link>
              </Box>
              <Box className={classes.line}></Box>
            </Grid>
          </>
        );
      })}
    </Grid>
  );
};
