import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/layout/NotFound";
import Register from "./pages/Register";
import Profile, { loader as profileLoader } from "./pages/Profile";
import Login from "./pages/Login";
import FilterTestQuestion from "./pages/FilterTestQuestion";
import AdminDashboard from "./pages/AdminDashboard";
import TopicList, { loader as topicLoader } from "./pages/topic/TopicList";
import QuestionList, {
  loader as questionLoader,
} from "./pages/question/QuestionList";

import TestList, {loader as testListLoader} from "./pages/TestList";
import TestAttempt, {loader as testLoader} from "./pages/TestAttempt";
import ViewAttemptedTest, {loader as attemptedTestLoader} from "./pages/ViewAttemptedTest";
import UserList from "./pages/UserList";
import TopicCreate from "./pages/topic/TopicCreate";
import QuestionCreate from "./pages/question/QuestionCreate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/admin",
    element: <AdminDashboard />,
  },
  {
    path: "/users",
    element: <UserList />,
  },
  {
    path: "/topic",
    element: <TopicList />,
    loader: topicLoader,
  },
  {
    path: "/topic/create",
    element: <TopicCreate />,
  },
  {
    path: "/question",
    element: <QuestionList />,
    loader: questionLoader,
  },
  {
    path: "/question/create",
    element: <QuestionCreate />,
  },

  {
    path: "/profile",
    element: <Profile />,
    loader: profileLoader,
  },
  {
    path: "/filter-test-question",
    element: <FilterTestQuestion />,
  },
  {
    path: "/test-list",
    element: <TestList />,
    loader: testListLoader
  },
  {
    path: "/test-started/:test_id",
    element: <TestAttempt />,
    loader: testLoader
  },
  {
    path: "/view-attempted-test/:test_id",
    element: <ViewAttemptedTest />,
    loader: attemptedTestLoader
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
