import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";

type ContentProps = {
  children: React.ReactNode;
};

const ThemeConvert: React.FC<ContentProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const value = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={value}>
      {" "}
      <div className={theme === "dark" ? "dark" : ""}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeConvert;
