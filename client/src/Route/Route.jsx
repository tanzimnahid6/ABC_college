import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Colleges from "../pages/Colleges";
import Users from "../pages/Users";
import MyCollege from "../pages/MyCollege";
import Admission from "../pages/Admission";
import Body from "../components/Body";
import NotFound from "../pages/NotFound";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import Profile from "../components/Profile/Profile";
import CollegeDetails from "../pages/CollegeDetails/CollegeDetails";
import PrivetRoute from "./PrivetRoute";
import TaskDetailsPage from "../pages/Description";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <h1>Error occurred when routing</h1>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "/colleges/:id",
        element: (
          <PrivetRoute>
            <CollegeDetails></CollegeDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "/users",
        element: <Users></Users>,
      },
      {
        path: "/my-college",
        element: (
          <PrivetRoute>
            <MyCollege></MyCollege>
          </PrivetRoute>
        ),
      },
      {
        path: "/admission",
        element: (
          <PrivetRoute>
            <Admission></Admission>
          </PrivetRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            <Profile></Profile>
          </PrivetRoute>
        ),
      },
      {
        path:"/taskDescription",
        element:<TaskDetailsPage></TaskDetailsPage>
      },
      {
        path: "*",
        element: <NotFound />,
      },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
]);

export default route;
