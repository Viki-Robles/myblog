import React, { useState } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import { blogData } from '../Blog/blog.testData';
import Link from 'next/link';

const useStyles = makeStyles(() => ({
  blogHeader: {
    fontSize: '40px',
  },
  blogTitle: {
    lineHeight: 'calc(1em + 0.625rem)',
    color: 'white',
    '&:hover': {
      color: '#4A63D6',
    },
  },
  button: {
    backgroundColor: '#AB0552',
    borderRadius: '5px',
    padding: '5px 20px',
    // boxShadow: '2px 2px 8px 0px #000',
    fontSize: '13px',
    maxWidth: '140px',
    marginTop: '10px',
    textAlign: 'center',
  },
  blog: {
    marginBottom: '40px',
    background: '#161e26',
    padding: '32px',
    maxWidth: '400px',
    borderRadius: '10px',
  },
  square: {
    width: '100px',
    height: '100px',
    marginTop: '53rem',
  },
  blogTag: {
    color: '#B5B3B3',
    marginTop: '5px',
  },
  totalPosts: {
    marginBottom: '20px',
  },
  blogDetails: {
    marginTop: '20px',
    fontSize: '1rem',
    color: 'white',
  },
}));

export interface BlogProps {
  title: string;
  author: string;
  link: string;
  id: number;
}

export const Blog = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');
  const classes = useStyles();

  const totalBlogPosts = blogData.length;
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography className={classes.blogHeader}>Blog Posts</Typography>
        <Typography className={classes.totalPosts}>{totalBlogPosts} Articles</Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        {blogData &&
          blogData
            ?.filter((val) => {
              if (searchTerm === '') {
                return val;
              } else if (val.tags.includes(searchTerm.toLocaleLowerCase())) {
                return val;
              }
            })
            .map(({ title, link, details }) => {
              return (
                <Paper className={classes.blog}>
                  <Typography className={classes.blogTitle} variant="h5">
                    {title}
                  </Typography>
                  <Typography className={classes.blogDetails}>{details}</Typography>
                  <Box className={classes.button}>
                    <Link href={link}>READ MORE</Link>
                  </Box>
                </Paper>
              );
            })}
      </Box>
    </Box>
  );
};
