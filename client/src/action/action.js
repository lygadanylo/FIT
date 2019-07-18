import axios from "axios";
import { Notifications, loginUser, registerUser, User } from "./actionConst.js";

export const register = value => dispatch => {
  axios({
    method: "POST",
    url: "http://localhost:3001/api/auth/register",
    data: value
  })
    .then(response => {
      dispatch(registerUser(value));
      dispatch(Notifications(response.data.message));
    })
    .catch(error => {
      console.log(error);
      dispatch(Notifications(error.response.data));
    });
};

export const login = value => dispatch => {
  axios({
    method: "POST",
    url: "http://localhost:3001/api/auth/login",
    data: value
  })
    .then(response => {
      dispatch(loginUser(value));
      dispatch(User(response.data.user));
      // dispatch(Notifications(response.data));
    })
    .catch(error => {
      console.log(error);
      dispatch(Notifications(error.response.data));
    });
};

export const getUser = () => dispatch => {
  axios({
    method: "GET",
    url: "http://localhost:3001/profile"
  })
    .then(response => {
      dispatch(User(response.data.user));
    })
    .catch(error => {
      console.log(error);
    });
};
