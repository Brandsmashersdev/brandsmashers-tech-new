import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const techDropdownContent = {
    "Mobile App Developers": {
      items: [
        { name: "Android Developer", iconSrc: "/Nav-Dropdown-icons/Android.svg", path: "android-developer" },
        { name: "iOS Developer", iconSrc: "/Nav-Dropdown-icons/iOS-Developer.svg", path: "ios-developer" },
        { name: "Flutter Developer", iconSrc: "/Nav-Dropdown-icons/Flutter.svg", path: "flutter-developer" },
        { name: "React-Native Developer", iconSrc: "/Nav-Dropdown-icons/React.svg", path: "react-native-developer" },
        // { name: "Unity Developers", iconSrc: "/Nav-Dropdown-icons/Unity.svg", path: "unity" },
        // { name: "Metaverse Developers", iconSrc: "/Nav-Dropdown-icons/Metaverse.svg", path: "metaverse" }
      ]
    },
    "Front End Developer": {
      items: [
        { name: "Angular JS Developers", iconSrc: "/Nav-Dropdown-icons/Angular.svg", path: "angular-developer" },
        { name: "React JS Developers", iconSrc: "/Nav-Dropdown-icons/React.svg", path: "react-js-developer" },
        { name: "JS Developer", iconSrc: "/Nav-Dropdown-icons/JS.svg", path: "js-developer" },
        { name: "Next JS Developer", iconSrc: "/Nav-Dropdown-icons/Next-JS.svg", path: "next-js-developer" }
      ]
    },
    "Back-End Developers": {
      items: [
        { name: "Laravel Developer", iconSrc: "/Nav-Dropdown-icons/Laravel.svg", path: "laravel-developer" },
        { name: "Node JS Developer", iconSrc: "/Nav-Dropdown-icons/Node-JS.svg", path: "node-js-developer" },
        { name: "Python Developer", iconSrc: "/Nav-Dropdown-icons/Python.svg", path: "python-developer" },
        { name: ".Net Developer", iconSrc: "/Nav-Dropdown-icons/DotNet.svg", path: "dotnet-developer" },
        { name: "PHP Developers", iconSrc: "/Nav-Dropdown-icons/PHP.svg", path: "php-developer" }
      ]
    },
    "CMS & E-Commerce Developers": {
      items: [
        { name: "Drupal Developer", iconSrc: "/Nav-Dropdown-icons/Drupal.svg", path: "drupal" },
        { name: "WordPress Developer", iconSrc: "/Nav-Dropdown-icons/WordPress.svg", path: "wordpress" },
        { name: "Shopify Developer", iconSrc: "/Nav-Dropdown-icons/Shopify.svg", path: "shopify" },
        { name: "Magento Developer", iconSrc: "/Nav-Dropdown-icons/Magento.svg", path: "magento" },
        { name: "Java Developers", iconSrc: "/Nav-Dropdown-icons/Java.svg", path: "java" }
      ]
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(`.${styles.navbar}`)) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleItemClick = (path) => {
    window.location.href = path;
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const menuItems = [
    { name: "Hire Developers", hasDropdown: false, href: '/hiredevelopers' },
    { name: "Services", hasDropdown: false, href: '/services' },
    { name: "Technologies", hasDropdown: true },
    { name: "Blogs", hasDropdown: false, href: '/blogs' },
    { name: "About Us", hasDropdown: false, href: '/aboutus' }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/nav.svg" alt="Logo" width={150} height={40} />
        </Link>
      </div>
      
      <div className={styles.hamburger} onClick={toggleMenu}>
        <Image src="/hamburger.png" alt="Menu" width={24} height={24} />
      </div>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        {menuItems.map((item) => (
          <li 
            key={item.name} 
            className={`${item.hasDropdown ? styles.hasDropdown : ''} ${
              activeDropdown === item.name ? styles.active : ''
            }`}
            onClick={() => item.hasDropdown && toggleDropdown(item.name)}
          >
            <div className={styles.menuItem}>
              <Link href={item.href || "#"}>
                {item.name}
              </Link>
              {item.hasDropdown && (
                <svg 
                  className={`${styles.dropdownIcon} ${
                    activeDropdown === item.name ? styles.rotate : ''
                  }`}
                  width="10" 
                  height="6" 
                  viewBox="0 0 10 6" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            {item.name === "Technologies" && (
              <div className={`${styles.dropdownMenu} ${
                activeDropdown === item.name ? styles.show : ''
              }`}>
                <div className={styles.dropdownGrid}>
                  {Object.entries(techDropdownContent).map(([category, { items }]) => (
                    <div key={category} className={styles.dropdownColumn}>
                      <h3>{category}</h3>
                      <ul>
                        {items.map((tech, index) => (
                         <li key={tech.path}>
                         <Link href={`/tech/${tech.path}`}>
                           <span className={styles.iconWrapper}>
                             <Image src={tech.iconSrc} alt={`${tech.name} icon`} width={20} height={20} />
                           </span>
                           {tech.name}
                         </Link>
                       </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      <button className={styles.contactBtn}>
        <Link href="/contactus">Contact Us</Link>
      </button>
    </nav>
  );
};

export default Navbar;