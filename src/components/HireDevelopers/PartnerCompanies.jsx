// OurPartner.js
import styles from "./PartnerCompanies.module.css";

const images = [
  { src: "/assets/googles.png", alt: "google" },
  { src: "/assets/accionlabs.png", alt: "accion-labs" },
  { src: "/assets/airbnb.png", alt: "airbnb" },
  { src: "/assets/dunzo.png", alt: "dunzo" },
  // { src: "/assets/eventbrite.png", alt: "eventbrite" },
  // { src: "/assets/Goeasy.png", alt: "Goeasy" },
  { src: "/assets/salesforce.png", alt: "salesforce" },
  { src: "/assets/boxly.webp", alt: "boxly" },
  { src: "/assets/turing-logo-new.png", alt: "Turing" },
];

const OurPartner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h2 className={styles.title}>Our Esteemed Clients Who Trust Us</h2>
      </div>
      <div className={styles.carouselContainer}>
        <div className={styles.scroll}>
          {/* Repeat images for continuous scrolling */}
          {images.concat(images).map((image, i) => (
            <div className={styles.imageWrapper} key={i}>
              <img src={image.src} alt={image.alt} className={styles.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartner;
