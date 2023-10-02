import { useState, Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./ModalCard.module.css";

const ModalCard = () => {
  const [closeModal, setCloseModal] = useState(false);

  const closeModalHandler = () => {
    setCloseModal(!closeModal);
  };

  return (
    <Fragment>
      {!closeModal ? (
        <div>
          <div onClick={closeModalHandler} className={classes.backdrop}>
            <div className={classes.modal}>
              <header className={classes["modal-logo"]}>
                <h1 className={classes["modal-header"]}>
                  Bookmarks are only available for registered users.
                </h1>
              </header>
              <footer className={classes["modal-footer"]}>
                <p className={classes["modal-text"]}>Please log in</p>
              </footer>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

const Modal = () => {
  return ReactDOM.createPortal(
    <ModalCard />,
    document.querySelector<any>("#modal-root")
  );
};

export default Modal;
