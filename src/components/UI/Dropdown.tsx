import { useState } from "react";

import Arrow from "../../assets/angle-down-solid.svg";

import classes from "./Dropdown.module.css";

const Dropdown = ({ handleContinent }: any) => {
  const [open, isOpen] = useState<boolean>(false);

  const continets = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const handleOpen = () => {
    isOpen(!open);
  };

  return (
    <div className={classes["dropdown-wrapper"]} onClick={handleOpen}>
      <div className={classes.filter}>
        <span>Filter by Region</span>
        <span>
          <img className={classes.arrow} src={Arrow} alt="dropdown arrow" />
        </span>
      </div>
      {open ? (
        <div>
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
