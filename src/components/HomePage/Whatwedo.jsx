"use client";

import React from "react";
import styles from "./Whatwedo.module.css";
import { useRouter } from "next/navigation";
import {
  BrainCircuit,
  LayoutTemplate,
  ShoppingCart,
  TabletSmartphone,
  Component,
  Settings,
  Activity,
  UserRoundCog,
  Airplay,
  icons,
} from "lucide-react";

const ExpandableCards = () => {
  const router = useRouter();

  const cards = [
    {
      title: "Custom Software Development",
      description:
        "We also develop custom software to improve your organisational processes thus improving productivity and efficiency.",
      redirectLink: "/custom-software-development",
      icon:BrainCircuit,
    },
    {
      title: "Web Development",
      description:
        "Being one of the best web design company in Bhopal, while designing our products, we lay extensive focus on speed, responsiveness and user interactivity.",
      redirectLink: "/web-development",
      icon:LayoutTemplate,
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Our configurable eCommerce solutions help increase your revenues – whether starting from a new store or redesign existing one.",
      redirectLink: "/e-commerce-solutions",
      icon:ShoppingCart,
    },
    {
      title: "Mobile App Development",
      description:
        "We create stable iOS and Android applications with a comprehensive list of natural and appealing UX/UI design.",
      redirectLink: "/mobile-app-development",
      icon:TabletSmartphone,
    },
    {
      title: "UI/UX Design",
      description:
        "Our designers build interfaces simplifying the way a user is able to interact with the digital product with ease and without strain.",
      redirectLink: "/ui-ux-design",
      icon:Component,
    },
    {
      title: "Product Development",
      description:
        "From idea generation to market entry, we develop effective competitors &apos; apps; products employing innovative technology and current tendencies.",
      redirectLink: "/product-development",
      icon:Settings,
    },
    {
      title: "Digital Marketing",
      description:
        "Our SEO, social media and content creation services increase brand visibility and website ranking on the search engines.",
      redirectLink: "/digital-marketing",
      icon:Activity,
    },
    {
      title: "Staff Augmentation",
      description:
        "Find experienced IT professionals promptly and ramp up your team – that will allow you to complete the project as soon as possible without lowering the desired quality.",
      redirectLink: "/staff-augmentation",
      icon:UserRoundCog,
    },
    {
      title: "Desktop App Development",
      description:
        "We build effective and safe desktop applications for your business to solve your industry’s distinct requirements and sustain their stability and functionality.",
      redirectLink: "/desktop-app-development",
      icon:Airplay,
    },
  ];

  const handleCardClick = (link) => {
    router.push(link); 
  };

  return (
    <div className={styles.cardsContainer}>
      
      <div className={styles.cardsWrapper}>
        <div className={styles.sectionHeader}>
          <h1>
            What <span className={styles.highlight}>We</span> Do
          </h1>
          <p>
            IT services that top the market offering a unique and excellent
            solution for businesses throughout all sectors. Being an
            experienced software development company, our solutions are
            designed to assist companies to be successful in present day
            marketplace.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={styles.card}
              onClick={() => handleCardClick(card.redirectLink)}
            >
              <div className='bg-[#22d3ee] w-full relative h-[70px] overflow-hidden text-white flex justify-center items-center'>
                <div className="cir w-[120px] h-[120px] absolute rounded-full bottom-1 border-8 border-black bg-transparent justoify-center items-center flex"> 
                 {card.icon && <card.icon className="w-[60px] h-[60px] flex items-center justify-center text-black ml-6 pt-6"  />}  
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>

              <div className={styles.triangle}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpandableCards;
