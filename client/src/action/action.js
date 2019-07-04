import axios from "axios";
import { createStatus, loginUser, createUser, User } from "./actionConst.js";

export const create = value => dispatch => {
  axios({
    method: "POST",
    url: "http://localhost:3001/create",
    data: value
  })
    .then(response => {
      dispatch(createUser(value));
      dispatch(createStatus(response.data.message));
    })
    .catch(error => {
      console.log(error);
    });
};

export const login = value => dispatch => {
  axios({
    method: "POST",
    url: "http://localhost:3001/login",
    data: value
  })
    .then(response => {
      dispatch(loginUser(value));
      dispatch(User(response.data.user));
    })
    .catch(error => {
      console.log(error);
    });
};

export const  getUser = () => dispatch => {
  axios({
    method:"GET",
    url: "http://localhost:3001/profile"
  })
  .then(response=>{
    dispatch(User(response.data));
  })
  .catch(error=>{
    console.log(error)
  });
};



