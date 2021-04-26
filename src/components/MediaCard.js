import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={()=>history.push(`/user/${props.id}`)}>
        <CardMedia
          className={classes.media}
          image={props.userImage}
          title={props.userName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.userName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.userEmail}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}


MediaCard.propTypes = {
 id : PropTypes.string.isRequired,
 userImage: PropTypes.string,
 userName: PropTypes.string,
 userEmail: PropTypes.string
}