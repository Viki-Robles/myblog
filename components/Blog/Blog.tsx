import React, { useState } from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';
import Box from '@mui/material/Box';
import { blogData } from '../Blog/blog.testData';

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

  blog: {
    marginBottom: '40px',
    background: '#161e26',
    padding: '32px',
    maxWidth: '400px',
    borderRadius: '8px',
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
    color: '#8998a7',
  },

  button: {
    border: '1px solid #4A63D6',
    borderRadius: '5px',
    padding: '0.6rem 1rem',
    fontSize: '13px',
    maxWidth: '140px',
    marginTop: '10px',
    textAlign: 'center',
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
    <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: '20px' }}>
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
                  <div>
                    <Box className={classes.button}>
                      <Link href={link}>READ MORE</Link>
                    </Box>
                  </div>
                </Paper>
              );
            })}
      </Box>
    </Box>
  );
};
