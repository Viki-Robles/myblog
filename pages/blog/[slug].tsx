import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Grid, Box } from '@material-ui/core';
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

const BlogPost: NextPage<BlogPostProps> = ({ frontmatter, content }) => {
  return (
    <>
      <Box>{frontmatter.title}</Box>
      <Box>{frontmatter.author}</Box>
      <ReactMarkdown source={content} />
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
