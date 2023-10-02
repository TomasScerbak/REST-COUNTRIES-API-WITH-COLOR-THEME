import { useContext, useState } from "react";
import classes from "./Card.module.css";

import ThemeContext from "../../store/theme-context";
import Modal from "./ModalCard";

type CardProps = {
  image: string;
  name: string;
  population: string;
  region: string;
  capital: string[];
};

const Card = (props: CardProps) => {
  const [open, isOpen] = useState(false);
  const { setThemeStyles } = useContext(ThemeContext);

  const onCardClick = () => {
    isOpen(!open);
  };

  return (
    <>
      {!open ? (
        <div
          onClick={onCardClick}
          className={`${classes.card} ${setThemeStyles("backgroundHeader")}`}
        >
          <header>
            <img
              className={classes.image}
              src={props.image}
              alt="country flag"
            />
          </header>
          <div className={classes["card-body"]}>
            <h1 className={`${classes.name} ${setThemeStyles("fontColor")}`}>
              {props.name}
            </h1>
            <div className={classes["population-wrapper"]}>
              <p
                className={`${classes["population__text"]} ${setThemeStyles(
                  "fontColor"
                )}`}
              >
                Population:
              </p>
              <p
                className={`${classes["number"]} ${setThemeStyles(
                  "fontColor"
                )}`}
              >
                {props.population.toLocaleString()}
              </p>
            </div>
            <div className={classes["region-wrapper"]}>
              <p
                className={`${classes["region__text"]} ${setThemeStyles(
                  "fontColor"
                )}`}
              >
                Region:
              </p>
              <p
                className={`${classes["region__number"]} ${setThemeStyles(
                  "fontColor"
                )}`}
              >
                {props.region}
              </p>
            </div>
            <div className={classes["capital-wrapper"]}>
              <p
                className={`${classes["capital__text"]} ${setThemeStyles(
                  "fontColor"
                )}`}
              >
                Capital:
              </p>
              <p
                className={`${classes["capital__number"]} ${setThemeStyles(
                  "fontColor"
                )}`}
              >
                {props.capital}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Modal />
      )}
    </>
  );
};

export default Card;
