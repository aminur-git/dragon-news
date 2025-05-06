import { createBrowserRouter, Navigate } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";

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
    path: "news",
    element: <h1>News layout</h1>,
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
        {
            path: "/auth/login",
            element: <h1>hi</h1>
        },
        {
            path: "/auth/register",
            element: <h1>Register</h1>
        },
    ]
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default Router;
