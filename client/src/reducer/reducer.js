export default (state = {}, action) => {
  const payload = action.payload;
  console.log(action);
  switch (action.type) {
    case "CREATE_USER":
      return { ...state, userInfo: payload };
    case "CREATE_STATUS":
      return { ...state, message: payload };
    default:
      return state;
  }
};
