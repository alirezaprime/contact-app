import styles from "./Form.module.css";
import { useState } from "react";
import "./Form.css";

function Form() {
  ///////////////////////////////////////////تعریف states////////////////////////////
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  //////////////////////////////////////////////استفاده از setState//////////////////
  const clickHandler = () => {
    console.log({ name, lastname, email, phone });
  };
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const lastnameHandler = (event) => {
    setLastname(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const phoneHandler = (event) => {
    setPhone(event.target.value);
  };
  //////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className={styles.container}>
      <div className={styles.parent}>
        <div className={styles.child}>
          <input
            className={styles.element}
            onChange={nameHandler}
            type="text"
            placeholder="name"
          />
          <input
            className={styles.element}
            onChange={lastnameHandler}
            type="text"
            placeholder="last name"
          />
        </div>
        <div className={styles.child}>
          <input
            className={styles.element}
            onChange={emailHandler}
            type="email"
            placeholder="email"
          />
          <input
            className={styles.element}
            onChange={phoneHandler}
            type="text"
            placeholder="phone"
          />
        </div>
        <button className={styles.button} onClick={clickHandler}>
          add contact
        </button>
      </div>
    </div>
  );
}

export default Form;
