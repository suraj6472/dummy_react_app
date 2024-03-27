import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";
const routeList = [
  { to: "/login", title: "Login", userType: "guest" },
  { to: "/register", title: "Signup", userType: "guest" },
  { to: "/admin", title: "Dashboard", userType: "admin" },
  { to: "/topic", title: "Topic", userType: "admin" },
  { to: "/question", title: "Question", userType: "admin" },
  { to: "/users", title: "User List", userType: "admin" },
  { to: "/profile", title: "Profile", userType: "user" },
  {
    to: "/filter-test-question",
    title: "Filter Test Question",
    userType: "user",
  },
  { to: "/test-list", title: "Test List", userType: "user" },
];

const Layout = ({ children }) => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  let role = localStorage.getItem("role");
  role = role ? role : "guest";
  const logoutHandler = () => {
    authContext.logout();
    return navigate("/");
  };
  return (
    <>
      <div className="page-content">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link
                className="link-offset-2 link-underline link-underline-opacity-0 text-white mx-1"
                color="inherit"
                to="/"
              >
                Quiz
              </Link>
            </Typography>
            {routeList
              .filter((route) => route.userType === role)
              .map((route) => (
                <Link
                  className="link-offset-2 link-underline link-underline-opacity-0 text-white mx-1"
                  color="inherit"
                  key={route.title}
                  to={route.to}
                >
                  {route.title}
                </Link>
              ))}

            {role !== "guest" && (
              <Link
                className="link-offset-2 link-underline link-underline-opacity-0 text-white mx-1"
                color="inherit"
                onClick={logoutHandler}
              >
                Logout
              </Link>
            )}
          </Toolbar>
        </AppBar>
        <Container
          maxWidth="lg"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          {children}
        </Container>
      </div>

      <footer
        style={{
          backgroundColor: "#f5f5f5",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} Quiz. All rights reserved.
        </Typography>
      </footer>
    </>
  );
};

export default Layout;
