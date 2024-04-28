import styles from "./Form.module.css";
import "./Form.css";

function Form() {
  const clickHandler = () => {};

  console.log(styles);

  return (
    <div className={styles.container}>
      <div className={styles.parent}>
        <div className={styles.child}>
          <input className={styles.element} type="text" placeholder="name" />
          <input
            className={styles.element}
            type="text"
            placeholder="lastname"
          />
        </div>
        <div className={styles.child}>
          <input className={styles.element} type="email" placeholder="email" />
          <input className={styles.element} type="text" placeholder="phone" />
        </div>
        <button className={styles.button} onClick={clickHandler}>
          add contact
        </button>
      </div>
    </div>
  );
}

export default Form;
