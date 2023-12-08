import React , {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const ModalBackdrop = ({onCloseModal}) => {
  return <div className={styles["modal-backdrop"]} onClick={onCloseModal}></div>
};
const ModalCon = ({onCloseModal}) => {
  const [formData, setFormData] = useState({
    category: '',
    store: '',
    date: '',
    size: '',
    itemName: ''
  });
  useEffect(() => {
    const isValid = Object.values(formData).every(value => value.trim() !== '');
    setIsFormValid(isValid);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCloseModal();
  };
  const [isFormValid, setIsFormValid] = useState(false);

  return (
    <form className={styles.modal} aria-label="modal" onSubmit={handleSubmit}>
      <div className={`inner-content ${styles["inner-content--modal"]}`}>
        <div className={styles["modal-header"]} aria-label="modal-header">
          <h2>Add Item</h2>
        </div>
        <div className={styles["modal-body"]} aria-label="modal-body">
          <ul>
            <li>
              <input type="text" name="category" placeholder="Category" onChange={handleInputChange} required />
              <input type="text" name="store" placeholder="Store" onChange={handleInputChange} required />
            </li>
            <li>
              <input type="date" name="date" onChange={handleInputChange} required />
              <input type="number" name="size" placeholder="Size" onChange={handleInputChange} required />
            </li>
            <li>
              <input type="text" name="itemName" placeholder="Item name" onChange={handleInputChange} required />
            </li>
          </ul>
        </div>
        <div className={styles["modal-footer"]} aria-label="modal-footer">
          <div className={styles["modal-button-wrapper"]}>
            <button className="btTypeThree" type="submit" disabled={!isFormValid}>Add</button>
            <button className="btTypeFour" type="button" onClick={onCloseModal}>Cancel</button>
          </div>
        </div>
      </div>
    </form>
  );
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