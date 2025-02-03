import React, { Component } from 'react';
import Image from 'next/image';
import styles from './ServiceCards.module.css';

class ServiceCard extends Component {
  renderHeader() {
    const { mainTitle, highlightedWord, subTitle } = this.props;
    if (!mainTitle) return null;

    const titleParts = mainTitle.split(highlightedWord);
    return (
      <div className={styles.headerContainer}>
        <h1 className={styles.mainTitle}>
          {titleParts[0]}
          <span className={styles.highlight}>{highlightedWord}</span>
          {titleParts[1]}
        </h1>
        <p className={styles.subTitle}>{subTitle}</p>
      </div>
    );
  }

  renderCards() {
    const { services } = this.props;
    return services?.map((service, index) => (
      <div key={index} className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.headerSection}>
              <h3 className={styles.title}>{service.title}</h3>
              {service.iconSrc && (
                <div className={styles.iconWrapper}>
                  <Image 
                    src={service.iconSrc}
                    alt="service icon"
                    width={24}
                    height={24}
                    className={styles.icon}
                  />
                </div>
              )}
            </div>
            <p className={styles.description}>{service.description}</p>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className={styles.sectionContainer}>
        {this.renderHeader()}
        <div className={styles.cardsGrid}>
          {this.renderCards()}
        </div>
      </div>
    );
  }
}

export default ServiceCard;