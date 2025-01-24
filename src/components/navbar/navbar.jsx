import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
      <Link href="/">
        <img src="/nav.svg" alt="Logo" />
        </Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <img src="/hamburger.png" alt=""/>
      </div>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        <li>
          <Link href="/hiredevelopers">Hire Developers</Link>
          {/* <img src="/Vector.png" alt="Dropdown" className={styles.dropdownIcon} /> */}
        </li>
        <li>
          <Link href="/service">Services</Link>
          {/* <img src="/Vector.png" alt="Dropdown" className={styles.dropdownIcon} /> */}
        </li>
        <li>
          <Link href="/technologies">Technologies</Link>
          {/* <img src="/Vector.png" alt="Dropdown" className={styles.dropdownIcon} /> */}
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
          {/* <img src="/Vector.png" alt="Dropdown" className={styles.dropdownIcon} /> */}
        </li>
        <li>
          <Link href="/aboutus">About Us</Link>
        </li>
      </ul>
     
      <button className={styles.contactBtn}> <Link href="/contactus">Contact Us</Link></button>
    </nav>
  );
};

export default Navbar;
