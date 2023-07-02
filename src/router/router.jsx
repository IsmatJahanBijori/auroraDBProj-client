import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import About from "../pages/About/About";
import Catalog from "../pages/Catalog/Catalog";
import SingleBook from "../pages/Catalog/SingleBook";
import Dashboard from "../Layout/Dashboard";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import AddItem from "../pages/Dashboard/Admin/AddItem/AddItem";
import UpdateItem from "../pages/Dashboard/Admin/UpdateItem/UpdateItem";
import PrivateRoute from "../Provider/PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/catalog",
            element: <Catalog/>
        },
        {
            path: "/books/:id",
            element: <PrivateRoute><SingleBook/></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/books/${params.id}`)
        },
      ]
    },
    {
      path: "/",
      element: <LoginLayout/>,
      children: [
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/signup",
            element: <Signup/>
        },
      ]
    },
    {
      path:'dashboard',
      element: <Dashboard/>,
      children:[
        {
          path:'manageUsers',
          element: <ManageUsers/>
        },
        {
          path:'addItem',
          element: <AddItem/>
        },
        {
          path:'updateItem',
          element: <UpdateItem/>
        },
      ]
    }
  ]);