export const initialState = {
  user: JSON.parse(sessionStorage.getItem("user")),
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      sessionStorage.setItem("user", JSON.stringify(action.user));
      return {
        ...state,
        user: action.user,
      };
    case "REMOVE_USER":
      sessionStorage.removeItem("user");
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
