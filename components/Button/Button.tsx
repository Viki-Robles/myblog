import React, { ReactNode } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: '5px',
    border: '1px solid #7F7FF8',
    padding: '9px 24px',
    color: 'white',
    boxShadow: '2px 5px 10px 2px #000',
    fontSize: '18px',
    maxWidth: '160px',
    textAlign: 'center',
    marginTop: '-10px',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
    },
    [theme.breakpoints.up('md')]: {
      margin: 0,
    },
  },
}));

export interface ButtonProps {
  title: string;
}

export const Button = ({ title }: ButtonProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.button}>
      <Link href="/projects">{title}</Link>
    </Box>
  );
};
