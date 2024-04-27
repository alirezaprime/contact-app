import styles from "./ListContact.module.css";

function ListContact() {
  return (
    <div>
      <h2 className={styles.h2}>contact list</h2>
      <div className={styles.containerlc}>
        <p className={styles.plc}>no contact yet!</p>
      </div>
    </div>
  );
}

export default ListContact;
