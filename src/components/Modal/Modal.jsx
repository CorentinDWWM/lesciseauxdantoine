import styles from "./Modal.module.scss";

import React, { useState } from "react";

export default function Modal({ onClose, handleCloseModal, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={`${styles.close}`}>
          <button
            className={`btn btn-reverse-primary ${styles.croix}`}
            onClick={handleCloseModal}
          >
            X
          </button>
        </div>
        <div className={`${styles.carousel}`}>
          <div
            className={`${styles.carousel_slide}`}
            style={{ backgroundImage: `url(${images[currentIndex].lien})` }}
          >
            <div className={`${styles.carousel_controls}`}>
              <button
                onClick={prevSlide}
                className={`${styles.carousel_control} ${styles.prev}`}
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className={`${styles.carousel_control} ${styles.next}`}
              >
                ›
              </button>
            </div>
          </div>
          <div className={`${styles.carousel_indicator}`}>
            {images.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${
                  index === currentIndex ? `${styles.active}` : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
        <p className={`${styles.texte}`}>{images[currentIndex].texte}</p>
        {images[currentIndex].sous_texte ? (
          <p className={`${styles.sous_texte}`}>
            {images[currentIndex].sous_texte}
          </p>
        ) : null}
      </div>
    </div>
  );
}
