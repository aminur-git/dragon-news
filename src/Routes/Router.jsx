import { createBrowserRouter, Navigate } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivatesRoutes from "./PrivatesRoutes";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
        element: <CategoryNews></CategoryNews>,
      },
    ],
  },
  {
    path: "news/:id",
    loader: (({params})=>
    fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    ),
    element: <PrivatesRoutes>
      <NewsDetails></NewsDetails>
    </PrivatesRoutes>,
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
        {
            path: "/auth/login",
            element: <Login></Login>
        },
        {
            path: "/auth/register",
            element: <Register></Register>
        },
    ]
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default Router;
