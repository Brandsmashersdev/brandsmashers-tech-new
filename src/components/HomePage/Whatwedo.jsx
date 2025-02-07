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
      redirectLink: "/services",
      icon:BrainCircuit,
    },
    {
      title: "Web Development",
      description:
        "Being the best web design company in Bhopal, we focus on speed, responsiveness, and efficiency in our designs.",
      redirectLink: "/services",
      icon:LayoutTemplate,
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Our configurable e-commerce solutions boost revenues, whether launching a new store or redesigning an existing one",
      redirectLink: "/services",
      icon:ShoppingCart,
    },
    {
      title: "Mobile App Development",
      description:
        "Our configurable e-commerce solutions drive revenue growth, whether you're starting a new store or redesigning an existing one.",
      redirectLink: "/services",
      icon:TabletSmartphone,
    },
    {
      title: "UI/UX Design",
      description:
        "Our designers build interfaces simplifying the way a user is able to interact with the digital product with ease and without strain.",
      redirectLink: "/services",
      icon:Component,
    },
    {
      title: "Product Development",
      description:
        "From idea generation to market entry, we craft competitive products using innovative technology and current trends.",
      redirectLink: "/services",
      icon:Settings,
    },
    {
      title: "Digital Marketing",
      description:
        "Our SEO, social media and content creation services increase brand visibility and website ranking on the search engines.",
      redirectLink: "/services",
      icon:Activity,
    },
    {
      title: "Staff Augmentation",
      description:
        "Find Quickly find experienced IT professionals to scale your team and complete projects on time without compromising quality.",
      redirectLink: "/services",
      icon:UserRoundCog,
    },
    {
      title: "Desktop App Development",
      description:
        "We create secure, efficient desktop apps tailored to your industry's needs, ensuring long-term stability and functionality.",
      redirectLink: "/services",
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
            What <span className={styles.highlight}>we</span> Do
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
              <div className='bg-[#2CC5D9] w-full  h-[70px] overflow-hidden text-white flex justify-center items-center '>
                <div className="cir w-[120px] h-[125px]  rounded-full bottom-1 border-8 border-[#343333] bg-transparent justoify-center items-center flex mb-14"> 
                 {card.icon && <card.icon className="w-[60px] h-[60px] flex items-center justify-center text-[#343333] ml-5 pt-7"  />}  
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
