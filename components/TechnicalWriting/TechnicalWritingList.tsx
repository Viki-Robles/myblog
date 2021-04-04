import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getTechnicalWritingData } from '../TechnicalWriting/technical.testData';

const useStyles = makeStyles(() => ({
  title: { textAlign: 'end' },
}));

export const TechnicalWritingList = (): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h4" className={classes.title}>
        Technical Writing
      </Typography>
      <Grid container>
        <Grid item md={6}>
          Picture
        </Grid>
        <Grid item md={6}>
          {getTechnicalWritingData.map(({ id, article, href }) => {
            return (
              <Grid key={id} container justify="flex-end">
                <Box>{article}</Box>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};
