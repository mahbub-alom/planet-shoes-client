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
    element: <Dashboard />,
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
        path:"updateproduct/:id",
        element:<UpdateProduct/>,
        loader:({params})=>fetch(`http://localhost:5000/updateGetProduct/${params.id}`)
      }
    ]
  }
]);

export default router;
