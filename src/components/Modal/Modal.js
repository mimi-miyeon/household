import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const ModalBackdrop = ({onCloseModal}) => {
  return <div className={styles["modal-backdrop"]} onClick={onCloseModal}></div>
};
const ModalCon = ({onCloseModal}) => {
  return (
    <form className={styles.modal} aria-label="modal">
      <div className={`inner-content ${styles["inner-content--modal"]}`}>
        <div className={styles["modal-header"]} aria-label="modal-header">
          <h2>Add Item</h2>
        </div>
        <div className={styles["modal-body"]} aria-label="modal-body">
          <ul >
            <li>
              <input type="text" placeholder="Category" required />
              <input type="text" placeholder="Store" required />
            </li>
            <li>
              <input type="date" required />
              <input type="text" placeholder="Size" required />
            </li>
            <li>
              <input type="text" placeholder="Item name" required />
            </li>
          </ul>
        </div>
        <div className={styles["modal-footer"]} aria-label="modal-footer">
          <div className={styles["modal-button-wrapper"]}>
            <button className="btTypeThree" type="submit" disabled>Add</button>
            <button className="btTypeFour" type="button" onClick={onCloseModal}>Cancel</button>
          </div>
        </div>
      </div>
    </form>
  )
};
const Modal = ({onCloseModal}) => {
  return ( 
    <>
      {ReactDOM.createPortal(
        <ModalBackdrop onCloseModal={onCloseModal} />,
        document.getElementById("modal-backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalCon onCloseModal={onCloseModal} />,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;