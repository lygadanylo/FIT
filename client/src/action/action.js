import axios from "axios";
export const create = e => dispatch => {
  axios({
    method: "POST",
    url: "http://localhost:3001/create",
    data: e
  })
    .then(response => {
      dispatch(createUser(e));
      dispatch(createStatus(response.data.message));
    })
    .catch(error => console.log(error));
};
const createStatus = message => ({
  type: "CREATE_STATUS",
  payload: message
});

const createUser = value => ({
  type: "CREATE_USER",
  payload: value
});
