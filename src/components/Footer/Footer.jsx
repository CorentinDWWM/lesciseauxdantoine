import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <p>© - 2024 Copyright</p>
      <NavLink to="/mentions_legales" className={`${styles.ml}`}>
        Mentions légales
      </NavLink>
    </footer>
  );
}

export default Footer;
