import styles from "./Header.module.css";
import "./Fontstyle.css";
function Header() {
  return (
    <div className={styles.header}>
      <h1>contact App</h1>
      <div className={styles.subheader}>
        <p>botostart</p>
        <span>| react.js full course</span>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Header;
