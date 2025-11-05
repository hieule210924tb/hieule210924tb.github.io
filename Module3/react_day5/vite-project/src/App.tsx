import Content from "./components/Content";
import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./components/ThemeConvert";

function App() {
  const context = useContext(ThemeContext) as { handleTheme: () => void };
  console.log(context);
  return (
    <>
      <Content />
      <button onClick={context.handleTheme}>Convert</button>
    </>
  );
}

export default App;
