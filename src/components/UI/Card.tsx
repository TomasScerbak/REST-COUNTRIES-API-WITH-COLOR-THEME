import { useContext } from "react";
import classes from "./Card.module.css";

import ThemeContext from "../../store/theme-context";

type CardProps = {
  image: string;
  name: string;
  population: string;
  region: string;
  capital: string[];
};

const Card = (props: CardProps) => {
  const { setThemeStyles } = useContext(ThemeContext);

  return (
    <div className={`${classes.card} ${setThemeStyles("backgroundHeader")}`}>
      <header>
        <img className={classes.image} src={props.image} alt="country flag" />
      </header>
      <div className={classes["card-body"]}>
        <h1 className={classes.name}>{props.name}</h1>
        <div className={classes["population-wrapper"]}>
          <p className={classes["population__text"]}>Population:</p>
          <p className={classes["population__number"]}>{props.population}</p>
        </div>
        <div className={classes["region-wrapper"]}>
          <p className={classes["region__text"]}>Region:</p>
          <p className={classes["region__number"]}>{props.region}</p>
        </div>
        <div className={classes["capital-wrapper"]}>
          <p className={classes["capital__text"]}>Capital:</p>
          <p className={classes["capital__number"]}>{props.capital}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
