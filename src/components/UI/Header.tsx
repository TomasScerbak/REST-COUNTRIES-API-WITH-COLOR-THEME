import { useContext } from "react";

import MoonImage from "../../assets/moon-regular.svg";

import classes from "./Header.module.css";

import ThemeContext from "../../store/theme-context";

const Header = () => {
  const { setThemeHandler, setThemeStyles } = useContext(ThemeContext);
  return (
    <header
      className={`${classes.header} ${setThemeStyles("backgroundHeader")}`}
    >
      <h2 className={classes["header__text"]}>Where in the world?</h2>
      <div className={classes["header-darkmode__wrapper"]}>
        <span>
          <img
            className={classes["header__image"]}
            src={MoonImage}
            alt="theme mode image of moon"
          />
        </span>
        <span onClick={setThemeHandler} className={classes["header__darkmode"]}>
          Dark mode
        </span>
      </div>
    </header>
  );
};

export default Header;
