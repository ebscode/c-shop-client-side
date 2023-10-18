import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Addcoffee from "./components/Addcoffee";
import Updatecoffee from "./components/Updatecoffee";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Authprovider from "./Authprovider";
import Users from "./components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () =>
      fetch("https://coffee-store-server-five-delta.vercel.app/coffee"),
  },
  {
    path: "addcoffee",
    element: <Addcoffee></Addcoffee>,
  },
  {
    path: "/updatecoffee/:id",
    element: <Updatecoffee></Updatecoffee>,
    loader: ({ params }) =>
      fetch(
        `https://coffee-store-server-five-delta.vercel.app/coffee/${params.id}`
      ),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () =>
      fetch("https://coffee-store-server-five-delta.vercel.app/user"),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>
);
