import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const servicesItems = [
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'Mobile App Development', href: '/services/mobile-app-development' },
    { label: 'UI/UX Design', href: '/services/ui-ux-design' },
  ];

  const hireDevelopersItems = [
    { label: 'Frontend Developers', href: '/hiredevelopers/frontend' },
    { label: 'Backend Developers', href: '/hiredevelopers/backend' },
    { label: 'Full Stack Developers', href: '/hiredevelopers/fullstack' },
  ];

  const companyItems = [
    { label: 'Who We Are', href: '/whoweare' },
    { label: 'Career', href: '/career' },
    { label: 'Blog', href: '/Blog' }
  ];

  const menuItems = [
    { name: "Company", hasDropdown: true },
    { name: "Hire Developers", hasDropdown: true },
    { name: "Services", hasDropdown: true },
    { name: "Industries", hasDropdown: false, href: "/industries" },
    { name: "Contact Us", hasDropdown: false, href: "/contactus" },
  ];

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
            className={`${item.hasDropdown ? styles.hasDropdown : ''} ${activeDropdown === item.name ? styles.active : ''}`}
            onClick={() => item.hasDropdown && toggleDropdown(item.name)}
          >
            <div className={styles.menuItem}>
              <Link href={item.href || "#"} className={styles.link}>
                {item.name}
              </Link>
              {item.hasDropdown && (
                <svg
                  className={`${styles.dropdownIcon} ${activeDropdown === item.name ? styles.rotate : ''}`}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            {item.hasDropdown && activeDropdown === item.name && (
              <div className={styles.dropdownMenu}>
                <ul className={styles.simpleDropdown}>
                  {(item.name === "Company" ? companyItems :
                    item.name === "Services" ? servicesItems :
                      item.name === "Hire Developers" ? hireDevelopersItems : []
                  ).map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={styles.link}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setActiveDropdown(null);
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* ✅ Fixed "Contact Us" button to use <Link> */}
      <Link href="/contactus" className={styles.contactBtn}>
        Contact Us
      </Link>
    </nav>
  );
};

export default Navbar;
