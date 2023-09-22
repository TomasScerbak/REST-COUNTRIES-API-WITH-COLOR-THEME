import classes from "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
  return <main className={classes.container}>{props.children}</main>;
};

export default Container;
