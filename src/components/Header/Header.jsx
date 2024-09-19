import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <Link to="/" className={`${styles.logo}`}></Link>
      <ul className={styles.headerList}>
        <NavLink to="/contact" className={`${styles.contact}`}>
          Contact
        </NavLink>
      </ul>
    </header>
  );
}

export default Header;
