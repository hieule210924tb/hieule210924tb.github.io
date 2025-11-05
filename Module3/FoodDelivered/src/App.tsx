// import { BrowserRouter, Route } from "react-router-dom";
// import Banner from "./common/components/Banner/Banner";
// import FeatureCard from "./common/components/FeatureCard/FeatureCard";
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
