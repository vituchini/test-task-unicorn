import { createContext, ReactNode, useReducer } from "react";

import reducer from "../lib/AuthReducer.ts";
import { State } from "../types";

const savedToken = localStorage.getItem("token");
const savedUsername = localStorage.getItem("username");
const defaultToken = savedToken || "";
const defaultUsername = savedUsername || "";

export const AuthContext = createContext<{
  state: State;
  setToken: (token: string) => void;
  setUsername: (username: string) => void;
  logout: () => void;
}>({
  state: { token: defaultToken, username: defaultUsername },
  setToken: () => {},
  setUsername: () => {},
  logout: () => {},
});

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, {
    token: defaultToken,
    username: defaultUsername,
  });

  const setToken = (token: string) => {
    dispatch({ type: "SET_TOKEN", payload: token });
  };

  const setUsername = (username: string) => {
    dispatch({ type: "SET_USERNAME", payload: username });
  };

  const removeToken = () => {
    dispatch({ type: "REMOVE_TOKEN", payload: "" });
  };

  const removeUsername = () => {
    dispatch({ type: "REMOVE_USERNAME", payload: "" });
  };

  const logout = () => {
    removeUsername();
    removeToken();
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        setToken,
        setUsername,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
