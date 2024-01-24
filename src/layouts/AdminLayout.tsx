import {Navbar} from "./Navbar.tsx";
import {Sidebar} from "./Sidebar.tsx";
import {SidebarProvider} from "../contexts/SidebarContext.tsx";
import {Outlet} from "react-router-dom";

export const AdminLayout = () => {
    return (
      <SidebarProvider>
        <div className="h-screen flex flex-col dark:bg-[#0f0f0f] dark:text-white">
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
    )
}