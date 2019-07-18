export const Notifications = message => ({
  type: "NOTIFICATIONS",
  payload: message
});

export const loginUser = value => ({
  type: " LOGIN_USER",
  payload: value
});

export const registerUser = value => ({
  type: "REGISTER_USER",
  payload: value
});

export const User = user => ({
  type: "USER_PROFILE",
  payload: user
});
