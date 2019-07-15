import { stat } from "fs";

export default (state = {}, action) => {
  const payload = action.payload;
  console.log(action);
  switch (action.type) {
    case "REGISTER_USER":
      return { ...state, user: payload };
    case "LOGIN_USER":
      return { ...state, verificationMessage: payload };
    case "NOTIFICATIONS":
      return { ...state, notification: payload };
    case "USER_PROFILE":
      return { ...stat, user: payload };
    default:
      return state;
  }
};
