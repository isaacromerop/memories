import * as api from "../../api";
import { AUTH } from "../types";

export const signUp = (formData, history) => async (dispatch) => {
  try {
    // log user
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signIn = (formData, history) => async (dispatch) => {
  try {
    // log user
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
