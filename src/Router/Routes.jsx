import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Posts from "../Posts/Posts";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/LogIn/Login";
import Team from "../components/Team/Team";
import Error from "../Pages/Error/Error";
import SignupComplete from "../Pages/Signup/SignupComplete";
import SingleMember from "../Pages/SingleMember/SingleMember";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "team",
        element: <Team />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "team/:member",
        element: <SingleMember />,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.member}`),
      },
      {
        path: "posts",
        element: <Posts />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
    ],
  },
  {
    path: "signup",
    element: <Signup />,
    children: [
      {
        path: "/signup/:complete",
        element: <SignupComplete />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);
