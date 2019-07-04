export default (state = {}, action) => {
  const payload = action.payload;
  console.log(action);
  switch (action.type) {
    case "CREATE_USER":
      return { ...state, user: payload };
    case "CREATE_STATUS":
      return { ...state, message: payload };
    case "LOGIN_USER":
      return { ...state, verificationMessage: payload };
    case "USER_PROFILE": {
      return { ...state, user: payload };
    }
    default:
      return state;
  }
};
