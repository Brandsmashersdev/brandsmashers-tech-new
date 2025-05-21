import React from "react";
import Image from "next/image"; // ✅ Import Next.js Image component
import styles from "./BlogDetails.module.css";

const BlogDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <button className={styles.button}>Back</button>
        <div className={styles.blogDetails}>
          <h1 className={styles.heading}>
            Emerging Trends in{" "}
            <span className={styles.highlight}>AI and Machine Learning</span>
          </h1>

          {/* ✅ Replaced <img> with <Image /> */}
          <Image
            src="/BlogDetails.png"
            alt="AI Trends"
            width={1200} // Set appropriate width
            height={600} // Set appropriate height
            className={styles.image}
          />

          <p className={styles.subheading}>
            Explore the latest trends in AI and machine learning, including
            advancements in natural language processing, automation, and ethical
            AI.
          </p>

          <h2 className={styles.sectionHeading}>Introduction</h2>
          <p className={styles.content}>
            Artificial Intelligence (AI) and Machine Learning (ML) continue to
            transform industries and redefine the way businesses operate. As
            technology advances, new trends are emerging that shape the future
            of AI and ML. Understanding these trends is crucial for businesses
            and professionals looking to leverage AI effectively. Here are some
            of the most significant emerging trends in AI and machine learning.
          </p>

          {/* Repeating content - assuming placeholder; can be updated */}
          <h2 className={styles.sectionHeading}>Introduction</h2>
          <p className={styles.content}>
            Artificial Intelligence (AI) and Machine Learning (ML) continue to
            transform industries and redefine the way businesses operate...
          </p>

          <h2 className={styles.sectionHeading}>Introduction</h2>
          <p className={styles.content}>
            Artificial Intelligence (AI) and Machine Learning (ML) continue to
            transform industries and redefine the way businesses operate...
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
