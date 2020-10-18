import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Home() {
  const classes = useStyles();

  return (
      
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../images/helth2.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            home assistant
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          It allows to measure your health data (pressure, weight, heart rate, blood sugar …) by activating, via Bluetooth, all the BewellConnect health items and connected medical devices, to follow their evolution through graphs and dashboards and share them with your doctor
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card> 
  );
}