import { useContext } from "react";

import SearchIcon from "../../assets/magnifying-glass-solid.svg";

import classes from "./SearchBar.module.css";

import ThemeContext from "../../store/theme-context";

const SearchBar = (props: any) => {
  const { setThemeStyles } = useContext(ThemeContext);

  return (
    <section
      className={`${classes["search-wrapper"]} ${setThemeStyles(
        "backgroundHeader"
      )}`}
    >
      <div className={classes["search-input__wrapper"]}>
        <label htmlFor="search">
          <img
            className={classes["search-input__icon"]}
            src={SearchIcon}
            alt="search"
          />
        </label>
        <input
          value={props.value}
          onChange={props.searchInputHandler}
          id="search"
          className={classes.search}
          type="text"
          placeholder="Search for a country..."
        />
      </div>
    </section>
  );
};

export default SearchBar;
