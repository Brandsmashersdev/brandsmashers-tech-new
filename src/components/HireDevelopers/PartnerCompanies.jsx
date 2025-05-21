import Image from "next/image"; // Importing Image component
import styles from "./PartnerCompanies.module.css";

const images = [
  { src: "/assets/googles.png", alt: "google", width: 150, height: 50 },
  { src: "/assets/accionlabs.png", alt: "accion-labs", width: 150, height: 50 },
  { src: "/assets/airbnb.png", alt: "airbnb", width: 150, height: 50 },
  // { src: "/assets/dunzo.png", alt: "dunzo", width: 150, height: 50 },
  // { src: "/assets/eventbrite.png", alt: "eventbrite", width: 150, height: 50 },
  { src: "/assets/Goeasy.png", alt: "Goeasy", width: 150, height: 50 },
  { src: "/assets/salesforce.png", alt: "salesforce", width: 150, height: 50 },
  // { src: "/assets/boxly.webp", alt: "boxly", width: 150, height: 50 },
  // { src: "/assets/turing-logo-new.png", alt: "Turing", width: 150, height: 50 },
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
              {/* Use Image component from Next.js */}
              <Image 
                src={image.src} 
                alt={image.alt} 
                className={styles.image} 
                width={image.width} // Specify the width
                height={image.height} // Specify the height
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartner;
