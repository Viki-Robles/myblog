import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { makeStyles } from '@material-ui/core/styles';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Grid, Typography, Box } from '@material-ui/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface BlogPostProps {
  content: string;
  frontmatter: {
    title: string;
    author: string;
    date: string;
    icon?: any;
  };
}

const useStyles = makeStyles((theme) => ({
  title: {
    color: '#FEDE00',
    fontWeight: 'bold',
    marginBottom: '40px',
    marginTop: '40px',
    textAlign: 'center',
    fontFamily: 'Inter',
    letterSpacing: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
  },
  content: {
    fontFamily: 'Inter',
    letterSpacing: '0.03rem',
    fontWeight: 300,
    fontSize: '1.1rem',
    lineHeight: 'calc(1em + 0.625rem)',
    width: 'inherit',
  },
  author: {
    alignSelf: 'center',
    letterSpacing: 0,
  },
  date: {
    alignSelf: 'center',
    letterSpacing: 0,
    color: '#C0C0C0',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px',
    marginTop: '40px',
    letterSpacing: 0,
  },
  details: {
    marginTop: '10px',
  },
  picture: {
    borderRadius: '50%',
  },
  pictureContainer: {
    marginRight: '10px',
  },
  followMebutton: {
    fontSize: '12px',
    color: 'white',
    alignSelf: 'center',
    backgroundColor: '#AB0552',
    borderRadius: '10px',
    padding: '8px',
    marginLeft: '10px',
  },
}));

type CodeBlockProps = {
  language: string;
  value: React.ReactNode;
};

const CodeBlock = ({ language, value }: CodeBlockProps) => {
  return (
    <div className="code-block">
      <SyntaxHighlighter language={language} style={dracula}>
        {String(value).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </div>
  );
};

const BlogPost: NextPage<BlogPostProps> = ({ frontmatter, content }) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        {frontmatter.icon} {frontmatter.title}
      </Typography>
      <Grid container className={classes.details}>
        <Grid item className={classes.pictureContainer}>
          <Image src="/avatar.png" width={50} height={50} className={classes.picture} />
        </Grid>
        <Grid item>
          <Typography className={classes.author}>{frontmatter.author}</Typography>
          <Typography className={classes.date}>10 Feb, 1 min read</Typography>
        </Grid>
        <Grid item className={classes.followMebutton}>
          <Link href="https://dev.to/vikirobles">Follow</Link>
        </Grid>
      </Grid>
      <Box className={classes.content}>
        <ReactMarkdown
          source={content}
          renderers={{
            code: CodeBlock,
          }}
        />
      </Box>
    </Grid>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync('./_posts');
  const paths = files.map((fname) => ({
    params: {
      slug: fname.replace('.mdx', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  const slug = params?.slug;
  const md = fs.readFileSync(path.join('./_posts', `${slug}.mdx`)).toString();
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
        icon: data.icon || null,
      },
      content,
    },
  };
};
export default BlogPost;
