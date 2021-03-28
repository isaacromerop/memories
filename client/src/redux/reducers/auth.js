import { AUTH, LOGOUT } from "../types";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      return;

    default:
      return state;
  }
};

export default authReducer;
