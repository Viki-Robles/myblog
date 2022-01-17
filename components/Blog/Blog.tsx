import React, { useState } from 'react';
import { Grid, Typography, Input } from '@material-ui/core';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import { blogData } from '../Blog/blog.testData';
import Link from 'next/link';

const useStyles = makeStyles(() => ({
  blogHeader: {
    fontSize: '40px',
    marginBottom: '20px',
  },
  blogTitle: {
    lineHeight: 'calc(1em + 0.625rem)',
    fontWeight: 300,
    fontFamily: 'Inter',
    fontSize: '1rem',
  },
  button: {
    borderRadius: '5px',
    marginTop: '10px',
    backgroundColor: '#AB0552',
    padding: '7px 20px',
    color: 'white',
    boxShadow: '2px 2px 8px 0px #000',
    fontSize: '13px',
    maxWidth: '140px',
    textAlign: 'center',
  },
  blog: {
    marginBottom: '40px',
    background: '#1A222A',
    padding: '32px',
    maxWidth: '400px',
    borderRadius: '10px',
  },
  square: {
    width: '100px',
    height: '100px',
    background: '#fff',
    marginTop: '53rem',
  },
  blogTag: {
    color: '#B5B3B3',
    marginTop: '5px',
  },
  input: {
    width: '450px',
    marginBottom: '40px',
    // backgroundColor: '#ffff',
    border: 'transparent',
    borderRadius: '10px',
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

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography className={classes.blogHeader}>Blog Posts</Typography>
        <Input
          className={classes.input}
          placeholder="Search by tag..."
          onChange={(event) => setSearchTerm(event.target.value)}
        />
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
            .map(({ title, link, id, tags }) => {
              return (
                <Grid key={id} container direction="column" className={classes.blog}>
                  <Typography className={classes.blogTitle}>{title}</Typography>
                  <Typography className={classes.blogTag}># {tags}</Typography>
                  <Box className={classes.button}>
                    <Link href={link}>Read more</Link>
                  </Box>
                </Grid>
              );
            })}
      </Box>
    </Box>
  );
};
