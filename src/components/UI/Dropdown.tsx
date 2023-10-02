import { useState, useContext } from "react";

import classes from "./Dropdown.module.css";

import ThemeContext from "../../store/theme-context";

const Dropdown = ({ handleContinent, continent }: any) => {
  const { setThemeStyles, theme } = useContext(ThemeContext);
  const [open, isOpen] = useState<boolean>(false);

  const continets = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const handleOpen = () => {
    isOpen(!open);
  };

  return (
    <div className={classes["dropdown-wrapper"]} onClick={handleOpen}>
      <div
        className={`${classes.filter} ${setThemeStyles("backgroundHeader")}`}
      >
        <span className={`${setThemeStyles("fontColor")}`}>
          {continent ? continent : "Filter by Region"}
        </span>
        <span>
          <svg
            fill={theme === "light" ? "#111517" : "#ffff"}
            className={classes.arrow}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
          {/* <img className={classes.arrow} src={Arrow} alt="dropdown arrow" /> */}
        </span>
      </div>
      {open ? (
        <div
          className={`${classes.dropdown} ${setThemeStyles(
            "backgroundHeader"
          )}`}
        >
          <ul>
            {continets.map((continent, id) => (
              <li
                className={setThemeStyles("fontColor")}
                onClick={handleContinent}
                key={id}
              >
                {continent}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
