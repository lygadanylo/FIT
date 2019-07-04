export const createStatus = message => ({
  type: "CREATE_STATUS",
  payload: message
});

export const loginUser = value => ({
  type: " LOGIN_USER",
  payload: value
});

export const createUser = value => ({
  type: "CREATE_USER",
  payload: value
});

export const User = user => ({
  type: "USER_PROFILE",
  payload: user
});
