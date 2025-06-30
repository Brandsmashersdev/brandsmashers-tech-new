// OurPartner.js
import styles from "./PartnerCompanies.module.css";
import Image from 'next/image';  // Import Image from next/image

const images = [
  { src: "/assets/googles.png", alt: "google", width: 100, height: 50 },
  { src: "/assets/accionlabs.png", alt: "accion-labs", width: 100, height: 50 },
  { src: "/assets/airbnb.png", alt: "airbnb", width: 100, height: 50 },
  { src: "/assets/dunzo.png", alt: "dunzo", width: 100, height: 50 },
  // { src: "/assets/eventbrite.png", alt: "eventbrite" },
  // { src: "/assets/Goeasy.png", alt: "Goeasy" },
  { src: "/assets/salesforce.png", alt: "salesforce", width: 100, height: 50 },
  { src: "/assets/boxly.webp", alt: "boxly", width: 100, height: 50 },
  // { src: "/assets/turing-logo-new.png", alt: "Turing" },
];

const OurPartner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h2 className={styles.title}>
          Trusted <span className={styles.highlight}>Client</span> Worldwide 
          <div className={styles.underline}></div>
        </h2>
      </div>
      <div className={styles.carouselContainer}>
        <div className={styles.scroll}>
          {/* Repeat images for continuous scrolling */}
          {images.concat(images).map((image, i) => (
            <div className={styles.imageWrapper} key={i}>
              <Image
                src={image.src}
                alt={image.alt}
                className={styles.image}
                width={image.width}  // Specify width
                height={image.height} // Specify height
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartner;
