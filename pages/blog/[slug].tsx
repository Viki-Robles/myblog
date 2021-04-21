import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface BlogPostProps {
  content: string;
  frontmatter: {
    title: string;
    author: string;
    date: string;
    icon?: any;
  };
}

const useStyles = makeStyles(() => ({
  title: {
    color: '#FEDE00',
    fontWeight: 'bold',
    marginTop: '40px',
    textAlign: 'center',
    fontFamily: 'Inter, sans-serif',
  },
  content: {
    color: 'white',
    fontFamily: 'Inter, sans-serif',
  },
  author: {
    color: 'white',
    alignSelf: 'center',
  },
  date: {
    alignSelf: 'center',
    color: '#C0C0C0',
  },
  container: {
    border: '1px',
    borderRadius: '5px',
    maxWidth: '800px',
    margin: '0 auto',
    marginTop: '40px',
    padding: '20px',
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
    boxShadow: '2px 5px 10px 2px #000',
    marginLeft: '10px',
  },
}));

const BlogPost: NextPage<BlogPostProps> = ({ frontmatter, content }) => {
  const classes = useStyles();
  return (
    <>
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
        icon: data.icon || null,
      },
      content,
    },
  };
};
export default BlogPost;
