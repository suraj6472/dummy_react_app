import React from "react";

const AuthContext = React.createContext({
  currentUser: null,
  role: 'guest',
  signup: () => {},
  login: () => {},
  logout: () => {},
  getProfileData: () => {}
});

export default AuthContext;
