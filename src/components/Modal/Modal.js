import React , {useState, useEffect, useContext} from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import {Data} from "../../store/money-data";

const ModalBackdrop = ({onCloseModal}) => {
  return <div className={styles["modal-backdrop"]} onClick={onCloseModal}></div>
};
const ModalCon = ({onCloseModal}) => {
  // const {itemInfo} = useContext(Data);
  const {itemInfoHandler} = useContext(Data);
  const [isFormValid, setIsFormValid] = useState(false);

  // form input들이 모두 작성 되었는지 확인하기 위한 코드
  const [formData, setFormData] = useState({
    category: '',
    store: '',
    date: '',
    size: '',
    itemName: '',
    price: '',
    method:'',
  });
  
  useEffect(() => {
    // input change로 formData state가 변경될 때 마다 isValid 확인
    // formData의 값이 모두 ''가 아니면 isValid는 true, ''면 false
    const isValid = Object.values(formData).every(value => value.trim() !== '');
    setIsFormValid(isValid);
  }, [formData]);

  // input 값이 변할 때, formData state에 해당 input name과 value 업데이트
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // form이 submit 되었을 때 
  const handleSubmit = (e) => {
    e.preventDefault();
    itemInfoHandler(formData);
    onCloseModal();
  };
  

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
              <ul>
                <li>
                  <input type="radio" id="cash" name="method" value="cash" required onChange={handleInputChange} />
                  <label htmlFor="cash">Cash</label>
                </li>
                <li>
                  <input type="radio" id="card" name="method" value="card" required onChange={handleInputChange} />
                  <label htmlFor="card">Card</label>
                </li>
                <input type="number" name="price" placeholder="price" onChange={handleInputChange} required />
              </ul>
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