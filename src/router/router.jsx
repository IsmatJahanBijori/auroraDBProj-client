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
import MyCart from "../pages/Dashboard/Users/MyCart/MyCart";
import AdminRoute from "../Provider/AdminRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ManageItems from "../pages/Dashboard/Admin/ManageItems/ManageItems";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/catalog",
        element: <Catalog />
      },
      // {
      //     path: "/carts",
      //     element: <MyCart/>
      // },
      {
        path: "/books/:id",
        element: <PrivateRoute><SingleBook /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`)
      },
    ]
  },
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: 'manageUsers',
        element: <AdminRoute><ManageUsers /></AdminRoute>
      },
      {
        path: 'addItem',
        element: <AdminRoute><AddItem /></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems /></AdminRoute>,
        // children: [
        //   {
        //     path: 'updateItem/:id',
        //     element: <UpdateItem />,
        //     loader:({ params }) => fetch(`http://localhost:5000/books/${params.id}`)
        //   },
        // ]
      },
      {
        path: "carts",
        element: <MyCart />
      },
    ]
  }
]);