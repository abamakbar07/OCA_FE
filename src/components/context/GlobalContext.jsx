import { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
  isLogin: false,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      localStorage.setItem("login", action.payload.login);
      return {
        ...state,
        isLogin: true,
        user: {
          fullname: action.payload.fullname,
          email: action.payload.email,
        },
      };
    case "USER_LOADED":
      return {
        ...state,
        isLogin: true,
        user: {
          fullname: action.payload.fullname,
          email: action.payload.email,
        },
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        isLogin: false,
      };
    case "AUTH_ERROR":
    case "LOGOUT":
      localStorage.removeItem("login");
      return {
        ...state,
        isLogin: false,
        user: null,
      };
    default:
      throw new Error();
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};
