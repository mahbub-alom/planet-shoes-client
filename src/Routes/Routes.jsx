import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Layout/Dashboard";
import AddProducts from "./AddProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/registration",
        element:<Registration/>
      }
    ],
  },
  {
    path:"dashboard",
    element:<Dashboard/>,
    children:[
      {
        path:"addproduct",
        element:<AddProducts/>
      }
    ]
  }
]);

export default router;
