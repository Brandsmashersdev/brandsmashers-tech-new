import React from 'react';
import ServiceCard from '../ServiceCards';

const ServiceGrids = ({ serviceData }) => {
  // Fallback to default data if no props are provided
  const defaultData = {
    mainTitle: "Our Developers at Your Service",
    highlightedWord: "App Developers",
    subTitle: "Hire offshore developers to enhance your in-house team and create user-friendly, feature-rich applications.",
    services: [
      {
        title: "Custom App Development",
        description: "Build custom apps from scratch using cutting-edge technologies.",
        iconSrc: "/default-icon.svg"
      }
    ]
  };

  const finalData = serviceData || defaultData;

  return (
    <ServiceCard
      mainTitle={finalData.mainTitle}
      highlightedWord={finalData.highlightedWord}
      subTitle={finalData.subTitle}
      services={finalData.services}
    />
  );
};

export default ServiceGrids;
