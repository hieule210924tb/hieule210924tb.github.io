import { RouterProvider } from "react-router-dom";
import { router } from "./common/routers/Routers";
import "./App.css";
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
