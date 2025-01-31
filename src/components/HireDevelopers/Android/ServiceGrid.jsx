// pages/index.js or any other page
import React, { Component } from 'react';
import ServiceCard from '../ServiceCards';

class ServiceGrids extends Component {
  render() {
    const serviceData = {
      mainTitle: "Our Android App Developers at Your Service",
      highlightedWord: "App Developers",
      subTitle: "Hire offshore Android app programmers with us to enhance your in-house team and create user-friendly, custom, feature-rich mobile and web applications using the latest technology.",
      services: [
        {
            title: "Custom Android App Development",
            description: "Hire our application developer to build a custom app from scratch. Our Android engineers are familiar with Android Studio and will deliver top-notch mobile apps for your business.",
            iconSrc: "/Android-page-img/mobile-icon.svg" 
          },
          {
            title: "Custom Android App Development",
            description: "Hire our application developer to build a custom app from scratch. Our Android engineers are familiar with Android Studio and will deliver top-notch mobile apps for your business.",
            iconSrc: "/Android-page-img/mobile-icon.svg" 
          },
          {
            title: "Custom Android App Development",
            description: "Hire our application developer to build a custom app from scratch. Our Android engineers are familiar with Android Studio and will deliver top-notch mobile apps for your business.",
            iconSrc: "/Android-page-img/mobile-icon.svg" 
          },
          {
            title: "Custom Android App Development",
            description: "Hire our application developer to build a custom app from scratch. Our Android engineers are familiar with Android Studio and will deliver top-notch mobile apps for your business.",
            iconSrc: "/Android-page-img/mobile-icon.svg" 
          },
          {
            title: "Custom Android App Development",
            description: "Hire our application developer to build a custom app from scratch. Our Android engineers are familiar with Android Studio and will deliver top-notch mobile apps for your business.",
            iconSrc: "/Android-page-img/mobile-icon.svg" 
          },
          {
            title: "Custom Android App Development",
            description: "Hire our application developer to build a custom app from scratch. Our Android engineers are familiar with Android Studio and will deliver top-notch mobile apps for your business.",
            iconSrc: "/Android-page-img/mobile-icon.svg" 
          },
          {
            title: "Custom Android App Development",
            description: "Hire our application developer to build a custom app from scratch. Our Android engineers are familiar with Android Studio and will deliver top-notch mobile apps for your business.",
            iconSrc: "/Android-page-img/mobile-icon.svg" 
          },
          {
            title: "Custom Android App Development",
            description: "Hire our application developer to build a custom app from scratch. Our Android engineers are familiar with Android Studio and will deliver top-notch mobile apps for your business.",
            iconSrc: "/Android-page-img/mobile-icon.svg" 
          },
          {
            title: "Custom Android App Development",
            description: "Hire our application developer to build a custom app from scratch. Our Android engineers are familiar with Android Studio and will deliver top-notch mobile apps for your business.",
            iconSrc: "/Android-page-img/mobile-icon.svg" 
          }
      ]
    };

    return (
      <ServiceCard
        mainTitle={serviceData.mainTitle}
        highlightedWord={serviceData.highlightedWord}
        subTitle={serviceData.subTitle}
        services={serviceData.services}
      />
    );
  }
}

export default ServiceGrids;