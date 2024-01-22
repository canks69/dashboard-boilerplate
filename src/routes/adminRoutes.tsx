import {RouteObject} from "react-router-dom";
import {AdminMenu, adminMenuProps } from "./adminMenu";

const genarateRoutes = (adminMenu: adminMenuProps[]) => {
  const routes: RouteObject[] = [];
  adminMenu.forEach((item) => {
    routes.push({
      path: item.path,
      element: item.element,
      children: item.children ? genarateRoutes(item.children) : [],
    });
  });
  return routes;
}

export const AdminRoutes: RouteObject[] =genarateRoutes(AdminMenu)