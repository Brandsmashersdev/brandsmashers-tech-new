import React from "react";
import Image from "next/image"; // ✅ Import Image from next/image
import styles from "./BlogsHeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {/* ✅ Replaced <img> with <Image /> */}
        <Image
          src="/Blogs-HeroSection.png"
          alt="Blogs Hero Section"
          width={1200}  // Adjust width to match image's actual size
          height={500}  // Adjust height to match image's actual size
        />
      </div>
    </div>
  );
};

export default HeroSection;
