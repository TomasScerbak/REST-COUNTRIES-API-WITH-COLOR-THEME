import React, { useState } from "react";

const ThemeContext = React.createContext<any>(null);

export function ThemeProvider({ children }: any) {
  let [theme, setTheme] = useState("light");

  const setThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const setThemeStyles = (args: {}) => {
    const styles = {
      themeOne: {
        backgroundHeader: "header-background-light",
        backgroundBody: "body-background-light",
      },
      themeTwo: {
        backgroundHeader: "header-background-dark",
        backgroundBody: "body-background-dark",
        fontColor: "font-color-white",
      },
    };
    if (theme === "light") return styles.themeOne[args];
    if (theme === "dark") return styles.themeTwo[args];
  };

  return (
    <ThemeContext.Provider value={{ setThemeStyles, setThemeHandler, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
