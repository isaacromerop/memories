import * as api from "../../api";

import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../types";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({
      type: FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (currentId, updatedPost) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(currentId, updatedPost);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (currentId) => async (dispatch) => {
  try {
    await api.deletePost(currentId);
    dispatch({ type: DELETE, payload: currentId });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (currentId) => async (dispatch) => {
  try {
    const { data } = await api.likePost(currentId);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
