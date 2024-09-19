import React from "react";
import styles from "./Contact.module.scss";
import { NavLink } from "react-router-dom";

export default function Contact() {
  return (
    <div className={`${styles.content}`}>
      <div className={`${styles.container}`}>
        <h2>Contact</h2>
        <div className={`${styles.contenu}`}>
          <NavLink
            target="_blank"
            to="https://www.facebook.com/profile.php?id=61561067972660"
          >
            <i class="fa-brands fa-square-facebook"></i>
            Facebook
          </NavLink>
          <NavLink
            target="_blank"
            to="https://www.instagram.com/lesciseauxdantoine/"
          >
            <i class="fa-brands fa-instagram"></i>
            Instagram
          </NavLink>
          <NavLink className={`${styles.tel}`}>
            <i class="fa-solid fa-phone"></i>
            03 21 57 21 39
          </NavLink>
        </div>
      </div>
      <div className={`${styles.container}`}>
        <h2>Emplacement du salon</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2535.31631370498!2d2.6604488768549595!3d50.546887380414965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd23c98dcc2fe7%3A0xd221d584edc81d76!2s45%20Rue%20du%2011%20Novembre%2C%2062400%20Essars!5e0!3m2!1sfr!2sfr!4v1726658171084!5m2!1sfr!2sfr"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={`${styles.container}`}>
        <h2>Horaires</h2>
        <div className={`${styles.horaires}`}></div>
      </div>
    </div>
  );
}
