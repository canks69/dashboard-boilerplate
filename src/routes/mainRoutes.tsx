import {createBrowserRouter} from "react-router-dom";
import {BaseLayout} from "../layouts/BaseLayout.tsx";
import {AuthRoutes} from "./authRoutes.tsx";
import {AdminRoutes} from "./adminRoutes.tsx";
import {HomePage} from "../pages/home/HomePage.tsx";

export const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <h1>404</h1>,
    children: [{path: "/", element: <HomePage/>}, ...AuthRoutes, ...AdminRoutes]
  }]
)

