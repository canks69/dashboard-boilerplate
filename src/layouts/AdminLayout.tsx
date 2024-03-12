import {Navbar} from "./Navbar.tsx";
import {Sidebar} from "./Sidebar.tsx";
import {SidebarProvider} from "../contexts/SidebarContext.tsx";
import {Outlet} from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import i18n from "../commons/hooks/i18n.ts";

export const AdminLayout = () => {
    return (
      <I18nextProvider i18n={i18n}>
        <SidebarProvider>
            <div className="h-screen flex flex-col dark:bg-gray-900 dark:text-white">
            <Navbar />
            <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
              <Sidebar/>
              <div className="overflow-x-hidden px-8 pb-4">
                <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </SidebarProvider>
      </I18nextProvider>
    )
}