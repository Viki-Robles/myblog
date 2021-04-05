import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getTechnicalWritingData } from '../TechnicalWriting/technical.testData';

const useStyles = makeStyles(() => ({
  title: { textAlign: 'end', color: 'white' },
  container: { marginTop: '60px' },

  technicalWritingContainer: {
    border: '1px solid #B5B3B3',
    borderRadius: '5px',
    padding: '10px',
    marginTop: '35px',
  },
  articleTitle: {
    color: '#B5B3B3',
  },
}));

export const TechnicalWritingList = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
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
              <Grid key={id} container justify="flex-start" className={classes.technicalWritingContainer}>
                <Box className={classes.articleTitle}>{article}</Box>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};
