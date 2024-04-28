import styles from "./ListContact.module.css";
import ListItem from "./ListItem";

function ListContact() {
  return (
    <div>
      <h2 className={styles.h2}>contact list</h2>
      <div className={styles.containerlc}>
        <p className={styles.plc}>no contact yet!</p>
        <ListItem />
      </div>
    </div>
  );
}

export default ListContact;
