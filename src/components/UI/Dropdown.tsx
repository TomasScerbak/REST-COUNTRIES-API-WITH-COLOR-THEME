import { useState } from "react";

import Arrow from "../../assets/angle-down-solid.svg";

import classes from "./Dropdown.module.css";

const Dropdown = () => {
  const [open, isOpen] = useState<boolean>(false);
  const [country, setCountry] = useState("");

  console.log(country);

  const continets = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const handleOpen = () => {
    isOpen(!open);
  };

  const handleCountry = (event: any) => {
    setCountry(event.target.innerHTML);
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
              <li onClick={handleCountry} key={id}>
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
