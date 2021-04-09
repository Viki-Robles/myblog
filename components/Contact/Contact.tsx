import { Grid, Typography, TextField, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  typography: {
    color: '#7F7FF8',
    fontSize: '40px',
    justifyContent: 'center',
  },
  textfield: {
    maxWidth: '400px',
    margin: '10px',
    color: '#7F7FF8',
  },
  textfieldContainer: {},
  contactContainer: {},
  button: {
    backgroundColor: '#7F7FF8',
    color: 'black',
  },
}));

export const Contact = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container className={classes.contactContainer}>
      <Typography className={classes.typography}>Let's chat!</Typography>
      <Grid container direction="column" className={classes.textfieldContainer}>
        <TextField id="outlined-basic" label="Email" variant="outlined" className={classes.textfield} />
        <TextField id="outlined-basic" label="Message" variant="outlined" className={classes.textfield} />
      </Grid>
      <Button variant="contained" color={'primary'} className={classes.button}>
        Submit
      </Button>
    </Grid>
  );
};
