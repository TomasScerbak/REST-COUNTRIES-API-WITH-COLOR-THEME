import { useState, useContext } from "react";

import Arrow from "../../assets/angle-down-solid.svg";

import classes from "./Dropdown.module.css";

import ThemeContext from "../../store/theme-context";

const Dropdown = ({ handleContinent, continent }: any) => {
  const { setThemeStyles } = useContext(ThemeContext);
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
        <span>{continent ? continent : "Filter by Region"}</span>
        <span>
          <img className={classes.arrow} src={Arrow} alt="dropdown arrow" />
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
              <li onClick={handleContinent} key={id}>
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
