import {JSX} from "react";
import {AdminLayout} from "../layouts/AdminLayout.tsx";
import {Navigate} from "react-router-dom";
import {BaseLayout} from "../layouts/BaseLayout.tsx";
import {DashboardPage} from "../pages/dashboard/DashboardPage.tsx";

export interface adminMenuProps {
  title?: string;
  path: string;
  icon?: string;
  iconActive?: string;
  isActive?: boolean;
  element?: JSX.Element;
  children?: adminMenuProps[];
}
export const AdminMenu = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <Navigate to={'/admin/dashboard'} replace={true} />,
      },
      {
        title: "Dashboard",
        path: "dashboard",
        element: <DashboardPage />,
        icon: "iconamoon:home-light",
        iconActive: "iconamoon:home-fill",
      },
      {
        title: "Users",
        path: "users",
        element: <h1>Users</h1>,
        icon: "basil:user-outline",
        iconActive: "basil:user-solid",
      },
      {
        title: "Settings",
        path: "settings",
        icon: "ion:settings-outline",
        iconActive: "ion:settings-sharp",
        element: <BaseLayout />,
        children: [
          {
            path: "",
            element: <Navigate to={'/admin/settings/profile'} replace={true} />,
          },
          {
            title: "Profile",
            element: <h1>Profile</h1>,
            path: "profile",
          },
          {
            title: "Security",
            element: <h1>Security</h1>,
            path: "security",
          },
        ],
      },
    ],
  }
]

