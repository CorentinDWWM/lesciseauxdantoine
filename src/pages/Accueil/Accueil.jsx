import React, { useState } from "react";
import styles from "./Accueil.module.scss";
import Modal from "../../components/Modal/Modal";
import { images1, images2 } from "../../images";
import { NavLink } from "react-router-dom";

export default function Accueil() {
  const [showModal, setShowModal] = useState(false);
  const [btnNumber, setBtnNumber] = useState(0);

  function handleBtnOne() {
    setBtnNumber(1);
    setShowModal(true);
  }

  function handleBtnTwo() {
    setBtnNumber(2);
    setShowModal(true);
  }

  function handleCloseModal() {
    setBtnNumber(0);
    setShowModal(false);
  }

  return (
    <>
      <div className={`${styles.content}`}>
        <div className={`${styles.start}`}>
          <h1>
            Bienvenue sur le site du salon de coiffure <br />
            <span>Les Ciseaux d’Antoine</span>
          </h1>
        </div>
        <div className={`${styles.container}`}>
          <h2>Le salon</h2>
          <div className={`${styles.contenu}`}>
            <div className={`${styles.photos} ${styles.devanture}`}></div>
            <div className={`${styles.textBtn}`}>
              <p>
                Envie d’une nouvelle coupe ou d’une coloration ? <br /> Homme,
                Femme ou enfants ? <br /> Les Ciseaux d’Antoine vous accueillent
                dans un cadre chaleureux et convivial. <br /> Pour voir plus de
                photos du salon, cliquez sur le bouton ci-dessous.
              </p>
              <button onClick={handleBtnOne}>Voir plus de photos</button>
            </div>
          </div>
        </div>
        <div className={`${styles.trait}`}></div>
        <div className={`${styles.container}`}>
          <h2>Nos produits</h2>
          <div className={`${styles.contenu} ${styles.columnRV}`}>
            <div className={`${styles.textBtn}`}>
              <p>
                Découvrez notre gamme de produits professionnels pour vous de la
                marque René Furterer et l’Oréal professionnel. <br /> Pour
                cheveux sensible, colorés, décolorés, méchés, à tendance grasse,
                etc... <br />
                Nous disposons des produits qu’il vous faut. <br /> Cliquez sur
                le bouton ci-dessous pour les découvrir.
              </p>
              <button onClick={handleBtnTwo}>Voir plus de photos</button>
            </div>
            <div className={`${styles.photos} ${styles.produits}`}></div>
          </div>
        </div>
        <div className={`${styles.trait}`}></div>
        <div className={`${styles.container}`}>
          <h2>Capillum</h2>
          <div className={`${styles.contenu}`}>
            <div className={`${styles.photos} ${styles.capillum}`}></div>
            <div className={`${styles.textBtn}`}>
              <p>
                Le salon adhère à Capillum. <br /> A chaque passage, vos cheveux
                sont recyclés. <br /> <br /> 1 KG de cheveux <br /> = <br /> 200
                litres d'eau économisés. <br /> <br /> Pour en apprendre plus
                sur comment sont recyclés vos cheveux avec Capillum, <br />{" "}
                cliquez sur le bouton ci-dessous.
              </p>
              <NavLink target="_blank" to={"https://www.capillum.fr/"}>
                En savoir plus
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {showModal && btnNumber === 1 ? (
        <Modal
          onClose={handleCloseModal}
          handleCloseModal={handleCloseModal}
          images={images1}
        ></Modal>
      ) : showModal && btnNumber === 2 ? (
        <Modal
          onClose={handleCloseModal}
          handleCloseModal={handleCloseModal}
          images={images2}
        ></Modal>
      ) : null}
    </>
  );
}
