import { createContext, useState } from "react";

export const ThemeContext = createContext();
type ContentProps = {
  children: React.ReactNode;
};
const ThemeConvert = ({ children }: ContentProps) => {
  const [theme, setTheme] = useState("dark");
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const value = {
    theme,
    handleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeConvert;
