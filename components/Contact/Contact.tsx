import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  typography: {
    color: '#5d75e7',
    fontWeight: 300,
    [theme.breakpoints.down('sm')]: { fontSize: '1.6rem' },
  },
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
  },
  button: {
    borderRadius: '5px',
    border: '1px solid #4A63D6',
    padding: '0.75rem 1rem',
    fontSize: '13px',
    maxWidth: '140px',
    marginTop: '10px',
    textAlign: 'center',
    margin: '0 auto',
  },
  content: {
    color: '#8998a7',
    textAlign: 'center',
    fontSize: '20px',
    padding: '20px 10px 20px 10px',
    fontWeight: 300,
    [theme.breakpoints.down('sm')]: { fontSize: '1.2rem' },
  },
}));

export const Contact = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container className={classes.contactContainer}>
      <Typography className={classes.typography} variant="h4">
        Get In Touch
      </Typography>
      <Typography className={classes.content}>
        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a
        question or just want to say hi, I’ll try my best to get back to you!
      </Typography>
      <div>
        <Box className={classes.button}>
          <Link href={'/'}>Let's chat</Link>
        </Box>
      </div>
    </Grid>
  );
};
