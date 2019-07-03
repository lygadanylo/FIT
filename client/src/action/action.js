import axios from "axios";
export const create = e => dispatch => {
  axios({
    method: "POST",
    url: "/create",
    data: e
  })
    .then(response => {
      dispatch(createUser(e));
      dispatch(createStatus(response.data.message));
    })
    .catch(error => {
      console.log(error.response.data);
      console.log(error);
    });
};
export const login = value => dispatch => {
  axios({
    method: "POST",
    url: "/login",
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
