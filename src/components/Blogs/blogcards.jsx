// BlogPage.js
import styles from './blogcards.module.css';

const blogData = [
  {
    id: 1,
    title: 'Top Programming Language to Learn in 2023',
    description:"Programming skills are in high demand, making it essential to master the right language for career advancement. Whether you're starting out or looking to upskill, this blog highlights the top programming languages to learn in 2024 and their significance for your career.",
    imageSrc: '/Blog-img/B-1.svg',
  },
  {
    id: 2,
    title: 'Top Programming Language to Learn in 2023',
    description:"Programming skills are in high demand, making it essential to master the right language for career advancement. Whether you're starting out or looking to upskill, this blog highlights the top programming languages to learn in 2024 and their significance for your career.",
    imageSrc: '/Blog-img/b-2.svg',
  },
  {
    id: 3,
    title: 'Top Programming Language to Learn in 2023',
    description:"Programming skills are in high demand, making it essential to master the right language for career advancement. Whether you're starting out or looking to upskill, this blog highlights the top programming languages to learn in 2024 and their significance for your career.",
    imageSrc: '/Blog-img/B-3.svg',
  },
  {
    id: 4,
    title: 'Top Programming Language to Learn in 2023',
    description:"Programming skills are in high demand, making it essential to master the right language for career advancement. Whether you're starting out or looking to upskill, this blog highlights the top programming languages to learn in 2024 and their significance for your career. ",
    imageSrc: '/Blog-img/B-4.svg',
  },
  {
    id: 5,
    title: 'Top Programming Language to Learn in 2023',
    description:"Programming skills are in high demand, making it essential to master the right language for career advancement. Whether you're starting out or looking to upskill, this blog highlights the top programming languages to learn in 2024 and their significance for your career.",
    imageSrc: '/Blog-img/B-3.svg',
  },
];

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {blogData.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.imageSrc} alt={`Image ${item.id}`} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <div className={styles.cardDuration}>2 min read</div>
              <div className={styles.cardTitle}>{item.title}</div>
              <div className={styles.cardDescription}>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;