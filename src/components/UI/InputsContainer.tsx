import classes from "./InputsContainer.module.css";

type InputsContainerProps = {
  children: React.ReactNode;
};

const InputsContainer = (props: InputsContainerProps) => {
  return <section className={classes.container}>{props.children}</section>;
};

export default InputsContainer;
