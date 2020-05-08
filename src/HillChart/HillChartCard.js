import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import HillChartComponent from "./HillChartComponent";
import Konva from 'konva';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 800
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  let pts = [
    { id: 1, description: 'Something cool', x: 100, radius: 10, color: Konva.Util.getRandomColor() },
    { id: 2, description: 'Something cancer', x: 200, radius: 15, color: Konva.Util.getRandomColor() },
    { id: 3, description: 'Something shit', x: 300, radius: 15, color: Konva.Util.getRandomColor() },
    { id: 4, description: 'Something awesome', x: 500, radius: 25, color: Konva.Util.getRandomColor() }
  ];

  const [points, setPoint] = useState(pts);

  const updatePoints = (points) => {
    setPoint(points);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Quicker dabber"
        subheader={new Date().toLocaleDateString()}
      />
      <CardContent>
        <HillChartComponent 
          height={400} 
          width={800} 
          points={points} 
          update={updatePoints}/>
        />

        <Typography variant="body2" color="textSecondary" component="p">
          Today we made moniez and again tomorrow
        </Typography>
      </CardContent>
    </Card>
  );
}