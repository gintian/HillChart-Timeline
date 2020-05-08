import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 750,
    margin: 'auto'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function HillChart() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Quicker dabber"
        subheader={new Date().toLocaleDateString()}
      />
      <CardMedia
        className={classes.media}
        image="https://basecamp.com/assets/3/hill-charts/hill-chart-hero-a846364279ec0757ba0ea2a5e6566560feea9551b9063ab19b5ea90d8f7d3495.gif"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Today we made moniez and again tomorrow
        </Typography>
      </CardContent>
    </Card>
  );
}