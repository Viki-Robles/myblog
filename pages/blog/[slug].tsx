import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
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
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '40px',
  },
  content: {
    color: 'black',
  },
  author: {
    color: 'black',
  },
  container: {
    border: '1px',
    borderRadius: '5px',
    backgroundColor: '#f0f2f5',
    margin: '0 auto',
    marginTop: '20px',
    maxWidth: '800px',
  },
}));

const BlogPost: NextPage<BlogPostProps> = ({ frontmatter, content }) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" direction="column" alignItems="center" className={classes.container}>
      <Image src="/regex.png" alt="Picture of the author" width={800} height={400} />
      <Typography variant="h4" className={classes.title}>
        {frontmatter.title}
      </Typography>
      <Box className={classes.content}>
        <ReactMarkdown source={content} />
      </Box>
      <Typography variant="h6" className={classes.author}>
        By: {frontmatter.author}
      </Typography>
    </Grid>
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
