import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import Avatar from '@material-ui/core/Avatar';
import ReactMarkdown from 'react-markdown';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface BlogPostProps {
  content: string;
  frontmatter: {
    title: string;
    author: string;
    date: string;
  };
}

const useStyles = makeStyles(() => ({
  title: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: '40px',
    marginLeft: '40px',
  },
  content: {
    color: 'black',
    marginLeft: '40px',
  },
  author: {
    color: 'black',
    alignSelf: 'center',
    margin: '0 10px',
  },
  date: {
    alignSelf: 'center',
  },
  container: {
    border: '1px',
    borderRadius: '5px',
    backgroundColor: '#f0f2f5',
    maxWidth: '800px',
    margin: '0 auto',
    marginTop: '40px',
  },
  details: {
    marginLeft: '40px',
    marginTop: '10px',
  },
}));

const BlogPost: NextPage<BlogPostProps> = ({ frontmatter, content }) => {
  const classes = useStyles();
  return (
    <>
      <Box display="flex" className={classes.details}>
        <Avatar alt="VV" src="/static/images/avatar/mypicture.png" />
        <Typography className={classes.author}>{frontmatter.author}</Typography>
        <Typography className={classes.date}>22 February 2021</Typography>
      </Box>
      <Grid container direction="column" className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          {frontmatter.title}
        </Typography>
        <Box className={classes.content}>
          <ReactMarkdown source={content} />
        </Box>
      </Grid>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync('./_posts');
  const paths = files.map((fname) => ({
    params: {
      slug: fname.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  const slug = params?.slug;
  const md = fs.readFileSync(path.join('./_posts', `${slug}.md`)).toString();
  const { data, content } = matter(md);
  const date = data.date?.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return {
    props: {
      frontmatter: {
        title: data.title || null,
        author: data.author || null,
        date: date || null,
      },
      content,
    },
  };
};
export default BlogPost;
