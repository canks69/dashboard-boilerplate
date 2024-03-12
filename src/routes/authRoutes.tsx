import {RouteObject} from "react-router-dom";
import {LoginPage} from "../pages/authentication/LoginPage.tsx";

export const AuthRoutes:RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/register",
    element: <>Register Page</>,
  },
];