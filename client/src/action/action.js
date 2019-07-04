import axios from "axios";
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
      // console.log(error.response.data);
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
    })
    .catch(error => {
      console.log(error);
    });
};
const createStatus = message => ({
  type: "CREATE_STATUS",
  payload: message
});

const loginUser = value => ({
  type: " LOGIN_USER",
  payload: value
});

const createUser = value => ({
  type: "CREATE_USER",
  payload: value
});
