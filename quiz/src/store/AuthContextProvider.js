import { useReducer } from "react";
import AuthContext from "./auth-context";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.user,
        role: localStorage.getItem("role"),
      };
    case "LOGOUT":
      return {
        ...state,
        token: null,
        role: "guest",
      };
    default:
      return state;
  }
};

export default function AuthContextProvider({ children }) {
  const [authUser, dispatch] = useReducer(reducerFunction, {
    token: null,
    role: "guest",
  });

  const signup = async (user) => {
    return await fetch("http://127.0.0.1:8000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  const login = async (user) => {
    const responseBody = await fetch("http://127.0.0.1:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (responseBody.ok) {
      const data = await responseBody.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      dispatch({ type: "LOGIN", user: localStorage.getItem("token") });
      return data;
    }
    return responseBody;
  };

  const logout = async () => {
    const responseBody = await fetch("http://127.0.0.1:8000/api/auth/logout", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    if (responseBody.ok) {
      localStorage.clear();
      dispatch({ type: "LOGOUT" });
    }
  };

  const authContext = {
    // token: localStorage.getItem('token'),
    // role: localStorage.getItem('role'),
    ...authUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
}
