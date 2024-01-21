import {SidebarProvider} from "./contexts/SidebarContext.tsx";
import {Sidebar} from "./layouts/Sidebar.tsx";
import {Navbar} from "./layouts/Navbar.tsx";

function App() {

  return (
    <>
      <SidebarProvider>
        <div className="max-h-screen flex flex-col">
          <Navbar />
          <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
            <Sidebar/>
            <div className="overflow-x-hidden px-8 pb-4">
              <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                Hello Vite + React + TypeScript!
              </div>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </>
)
}

export default App
