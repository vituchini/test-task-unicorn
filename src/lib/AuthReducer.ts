import { Action, State } from "../types";

const TOKEN = "token";
const USERNAME = "username";

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_TOKEN":
      localStorage.setItem(TOKEN, action.payload);
      return {
        ...state,
        token: action.payload,
      };
    case "REMOVE_TOKEN":
      localStorage.removeItem(TOKEN);
      return {
        ...state,
        token: "",
      };
    case "SET_USERNAME":
      localStorage.setItem(USERNAME, action.payload);
      return {
        ...state,
        username: action.payload,
      };
    case "REMOVE_USERNAME":
      localStorage.removeItem(USERNAME);
      return {
        ...state,
        username: "",
      };
    default:
      return state;
  }
};

export default reducer;
