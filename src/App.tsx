import {RouterProvider} from "react-router-dom";
import {mainRoutes} from "./routes/mainRoutes.tsx";

function App() {

  return (
    <>
      <RouterProvider router={mainRoutes}></RouterProvider>
    </>
)
}

export default App
