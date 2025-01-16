import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/nav.svg" alt="Logo" />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="#">Hire Developers</Link>
          <img src="/Vector.png" alt="Dropdown" className={styles.dropdownIcon} />
        </li>
        <li>
          <Link href="#">Services</Link>
          <img src="/Vector.png" alt="Dropdown" className={styles.dropdownIcon} />
        </li>
        <li>
          <Link href="#">Technologies</Link>
          <img src="/Vector.png" alt="Dropdown" className={styles.dropdownIcon} />
        </li>
        <li>
          <Link href="#">Blogs</Link>
          <img src="/Vector.png" alt="Dropdown" className={styles.dropdownIcon} />
        </li>
        <li>
          <Link href="#">About Us</Link>
        </li>
      </ul>
      <button className={styles.contactBtn}>Contact Us</button>
    </nav>
  );
};

export default Navbar;
