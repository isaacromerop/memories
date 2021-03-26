import React from "react";
import Post from "./Post/Post";

import useStyles from "./styles";
import { useSelector } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  if (!posts || !posts.length) {
    return (
      <Grid justify="center" alignItems="center" container>
        <CircularProgress color="primary" />
      </Grid>
    );
  }

  return (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid item key={post._id} xs={12} sm={6}>
          <Post
            creator={post.creator}
            likes={post.likeCount}
            message={post.message}
            image={post.selectedFile}
            tags={post.tags}
            title={post.title}
            date={post.createdAt}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
