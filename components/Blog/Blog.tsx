import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { blogData } from '../Blog/blog.testData';
import Link from 'next/link';
import { motion } from 'framer-motion';

const useStyles = makeStyles(() => ({
  blogHeader: {
    fontSize: '40px',
    color: 'white',
    marginBottom: '20px',
  },
  blogTitle: {
    color: 'white',
    lineHeight: '2rem',
  },
  button: {
    borderRadius: '5px',
    marginTop: '10px',
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
    <Grid container>
      <motion.div initial={{ x: 250 }} animate={{ x: 0 }} transition={{ duration: 1, type: 'spring' }}>
        <Box className={classes.blogHeader}>Blog Posts</Box>
      </motion.div>
      {blogData.map(({ title, link, id }) => {
        return (
          <Grid key={id} container direction="column">
            <motion.div initial={{ x: -250 }} animate={{ x: 0 }} transition={{ duration: 1, type: 'spring' }}>
              <Box className={classes.blogTitle}>{title}</Box>
              <Box className={classes.button}>
                <Link href={link}>SEE POST</Link>
              </Box>
              <Box className={classes.line}></Box>
            </motion.div>
          </Grid>
        );
      })}
    </Grid>
  );
};
