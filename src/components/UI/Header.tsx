import { useContext, useEffect } from "react";

import MoonImage from "../../assets/moon-regular.svg";
import SunImage from "../../assets/sun-regular.svg";

import classes from "./Header.module.css";

import ThemeContext from "../../store/theme-context";

const Header = () => {
  const { setThemeHandler, setThemeStyles, theme } = useContext(ThemeContext);

  // changing background color of body depending on setThemneHandler value
  useEffect(() => {
    document.body.className = setThemeStyles("backgroundBody");
  }, [setThemeHandler]);

  return (
    <header
      className={`${classes.header} ${setThemeStyles("backgroundHeader")}`}
    >
      <h2 className={classes["header__text"]}>Where in the world?</h2>
      <div className={classes["header-darkmode__wrapper"]}>
        <span>
          <img
            className={classes["header__image"]}
            src={theme === "light" ? MoonImage : SunImage}
            alt="theme mode image of moon"
          />
        </span>
        <span onClick={setThemeHandler} className={classes["header__darkmode"]}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
    </header>
  );
};

export default Header;
