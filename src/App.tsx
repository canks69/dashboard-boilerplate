import {RouterProvider} from "react-router-dom";
import {mainRoutes} from "./routes/mainRoutes.tsx";
import {HelmetProvider} from "react-helmet-async";

function App() {

  return (
    <>
      <HelmetProvider>
        <RouterProvider router={mainRoutes}></RouterProvider>
      </HelmetProvider>
    </>
)
}

export default App
