import React from "react";
import moment from "moment";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { ThumbUpAlt, Delete, Edit } from "@material-ui/icons";

import useStyles from "./styles";

const Post = ({ creator, likes, message, tags, title, image, date }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={image} title={title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{creator}</Typography>
        <Typography variant="body2">{moment(date).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small">
          <Edit fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {tags.map((tag) => `#${tag}`)}
        </Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          <ThumbUpAlt fontSize="small" />
          Like {likes}
        </Button>
        <Button size="small" color="primary">
          <Delete />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
