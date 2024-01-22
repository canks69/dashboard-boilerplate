import {createBrowserRouter} from "react-router-dom";
import {BaseLayout} from "../layouts/BaseLayout.tsx";
import {AuthRoutes} from "./authRoutes.tsx";
import {AdminRoutes} from "./adminRoutes.tsx";

export const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <h1>404</h1>,
    children: [{path: "/", element: <h1>Home Page</h1>}, ...AuthRoutes, ...AdminRoutes]
  }]
)

