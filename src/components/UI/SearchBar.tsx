import { useContext } from "react";

import classes from "./SearchBar.module.css";

import ThemeContext from "../../store/theme-context";

const SearchBar = (props: any) => {
  const { setThemeStyles, theme } = useContext(ThemeContext);

  return (
    <section
      className={`${classes["search-wrapper"]} ${setThemeStyles(
        "backgroundHeader"
      )}`}
    >
      <div className={classes["search-input__wrapper"]}>
        <label htmlFor="search">
          <svg
            fill={theme === "light" ? "#111517" : "#ffff"}
            className={classes["search-input__icon"]}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </label>
        <input
          value={props.value}
          onChange={props.searchInputHandler}
          id="search"
          className={`${classes.search} ${setThemeStyles("backgroundHeader")}`}
          type="text"
          placeholder="Search for a country..."
        />
      </div>
    </section>
  );
};

export default SearchBar;
