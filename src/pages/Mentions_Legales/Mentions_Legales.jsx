import React from "react";
import styles from "./Mentions_Legales.module.scss";

export default function Mentions_Legales() {
  return (
    <div className={`${styles.ml}`}>
      <h1>Mentions Légales</h1>
      <h2>Propriétaire du site :</h2>
      <p>
        Nom du salon de coiffure : <strong>Les Ciseaux d'Antoine</strong>
      </p>
      <br />
      <p>
        Propriétaire : <strong>Antoine Grabarski</strong>
      </p>
      <br />
      <p>
        Adresse : <strong>45 RUE DU 11 NOVEMBRE 62400 ESSARS</strong>
      </p>
      <br />
      <p>
        Numéro de téléphone : <strong>03 21 57 21 39</strong>
      </p>
      <br />
      <p>
        Adresse email : <strong>lesciseauxdantoine@gmail.com</strong>
      </p>
      <br />
      <p>
        SIRET : <strong>929 514 404 00011</strong>
      </p>
      <br />
      <p>
        Directeur de la publication : <strong>Antoine Grabarski</strong>
      </p>
      <br />
      <p>
        Responsable de la rédaction : <strong>Antoine Grabarski</strong>
      </p>
      <br /> <br />
      <h2>Hébergement du site :</h2>
      <p>
        Nom de l'hébergeur : <strong>[Nom de l'hébergeur]</strong>
      </p>
      <br />
      <p>
        Adresse de l'hébergeur : <strong>[Adresse de l'hébergeur]</strong>
      </p>
      <br />
      <p>
        Téléphone de l'hébergeur :{" "}
        <strong>[Numéro de téléphone de l'hébergeur]</strong>
      </p>
      <br />
      <p>
        Email de l'hébergeur : <strong>[Email de l'hébergeur]</strong>
      </p>
      <br /> <br />
      <h2>Propriété intellectuelle :</h2>
      <p>
        Tous les éléments de ce site (textes, images, logos, etc.) sont la
        propriété de <strong>Les Ciseaux d'Antoine</strong>. Toute reproduction,
        représentation ou utilisation est interdite sans l'autorisation
        préalable du propriétaire.
      </p>
      <br /> <br />
      <h2>Données personnelles :</h2>
      <p>
        Les informations collectées sur ce site sont destinées exclusivement à
        <strong>Les Ciseaux d'Antoine</strong>. Elles sont utilisées dans le
        cadre des services offerts par le salon (prise de rendez-vous,
        informations commerciales, etc.). Conformément à la loi n° 78-17 du 6
        janvier 1978 modifiée, relative à l'informatique, aux fichiers et aux
        libertés, vous disposez d’un droit d’accès, de rectification et de
        suppression des données vous concernant. Pour exercer ce droit,
        contactez <strong>lesciseauxdantoine@gmail.com</strong>.
      </p>
      <br />
      <h2>Responsabilité :</h2>
      <p>
        <strong>Les Ciseaux d'Antoine</strong> décline toute responsabilité en
        cas d'erreur ou d'omission dans les informations publiées sur ce site.
        Les informations sont fournies à titre indicatif et peuvent être
        modifiées sans préavis. L’utilisateur est invité à vérifier les
        informations directement auprès de{" "}
        <strong>Les Ciseaux d'Antoine</strong>.
      </p>
      <br />
      <h2>Liens hypertextes :</h2>
      <p>
        Le site <strong>[Nom du site]</strong> peut contenir des liens vers
        d'autres sites internet. <strong>Les Ciseaux d'Antoine</strong> ne peut
        être tenu responsable du contenu de ces sites externes.
      </p>
      <br />
      <h2>Création du site :</h2>
      <p>
        Site réalisé par <strong>Delaforge Corentin</strong>,
        <strong>delaforgecorentin62@gmail.com</strong>.
      </p>
    </div>
  );
}
