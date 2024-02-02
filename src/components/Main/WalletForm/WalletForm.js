import styles from "./WalletForm.module.css";

const WalletForm = () => {
  const moneyHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={moneyHandler} className={styles["wallet-form"]}>
        <div className={styles["wallet-form__wrapper"]}>
          <ul className={styles["form-field"]}>
            <li>
              <input type="text" placeholder="Money" required/>
            </li>
            <li className={styles["wallet-form__radio-field"]}>
              <ul className={styles["radio-field__wrapper"]}>
                <li>
                  <input id="cash" name="method" type="radio" required />
                  <label htmlFor="cash">Cash</label>
                </li>
                <li>
                  <input id="card" name="method" type="radio" required />
                  <label htmlFor="card">Card</label>
                </li>
              </ul>          
              
              <ul className={styles["radio-field__wrapper"]}>
                <li>
                  <input id="add" name="expense" type="radio" required />
                  <label htmlFor="add">+</label>
                </li>
                <li>
                  <input id="subtract" name="expense" type="radio" required />
                  <label htmlFor="subtract">-</label>
                </li>
              </ul>
            </li>
          </ul>
          <div className="button-wrapper">
            <button className="btTypeThree" type="submit">Save</button>
            <button className="btTypeFour" type="button">Cancel</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default WalletForm;