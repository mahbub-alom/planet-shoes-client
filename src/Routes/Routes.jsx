import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Layout/Dashboard";
import AddProducts from "../Pages/Dashboard/AddProducts";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import MyProduct from "../Pages/Dashboard/MyProduct";
import UpdateProduct from "../Pages/Dashboard/UpdateProduct";
import UserInfo from "../Pages/Dashboard/UserInfo";
import UpdateUserInfo from "../Pages/Dashboard/UpdateUserInfo";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/registration",
        element: <Registration />
      }
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "addproduct",
        element: <AddProducts />
      },
      {
        path: "myproduct",
        element: <MyProduct />
      },
      {
        path: "updateproduct/:id",
        element: <UpdateProduct />,
        loader: ({ params }) => fetch(`https://planet-shoes-server.onrender.com/updateGetProduct/${params.id}`)
      },
      {
        path: "userInfo",
        element: <UserInfo />
      }, {
        path: "updateUserInfo/:id",
        element: <UpdateUserInfo />,
        loader: ({ params }) => fetch(`https://planet-shoes-server.onrender.com/updateUserInfo/${params.id}`)
      }
    ]
  }
]);

export default router;
