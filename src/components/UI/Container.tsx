import { useContext } from "react";

import classes from "./Container.module.css";

import ThemeContext from "../../store/theme-context";
interface ContainerProps {
  children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
  const { setThemeStyles } = useContext(ThemeContext);

  return (
    <main
      className={`${classes.container} ${setThemeStyles("backgroundBody")}`}
    >
      {props.children}
    </main>
  );
};

export default Container;
