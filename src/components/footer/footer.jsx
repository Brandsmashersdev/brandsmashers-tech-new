import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const aboutText =
    "Founded in 2018, Brandsmashers has quickly grown into a trusted name in the world of software development. We specialize in delivering tailor-made software solutions that drive business transformation forward by connecting technical innovation with ease.";

  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Service", href: "/service" },
    { name: "Contact us", href: "/contact" },
    { name: "Our Partners", href: "/partners" },
  ];

  const servicesLinks = [
    { name: "Web Design", href: "/services/web-design" },
    { name: "Desktop app development", href: "/services/desktop-apps" },
    { name: "Mobile app development", href: "/services/mobile-apps" },
    { name: "UI/UX", href: "/services/ui-ux" },
    { name: "AI/ML", href: "/services/ai-ml" },
    { name: "Data Drive", href: "/services/data" },
    { name: "Digital marketing", href: "/services/marketing" },
    { name: "Beyond the Browser", href: "/services/beyond" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#", image: "/linkedin-icon.png", row: 2 },
    { name: "Facebook", href: "#", image: "/facebook-icon.png", row: 1 },
    { name: "Cloud", href: "#", image: "/clutch-icon.png", row: 2 },
    { name: "YouTube", href: "#", image: "/youtube-icon.png", row: 1 },
    { name: "Instagram", href: "#", image: "/instagram-icon.png", row: 2 },
  ];

  const SocialIcons = () => (
    <div className={styles.socialIcons}>
      <div className={styles.socialRowFirst}>
        {socialLinks
          .filter((social) => social.row === 1)
          .map((social) => (
            <a key={social.name} href={social.href} className={styles.socialLink}>
              <img src={social.image} alt={social.name} className={styles.socialIcon} />
            </a>
          ))}
      </div>
      <div className={styles.socialRowSecond}>
        {socialLinks
          .filter((social) => social.row === 2)
          .map((social) => (
            <a key={social.name} href={social.href} className={styles.socialLink}>
              <img src={social.image} alt={social.name} className={styles.socialIcon} />
            </a>
          ))}
      </div>
    </div>
  );

  return (
    <div className={styles.footerContainer}>
      <div className={styles.leftTriangle}></div>
      <div className={styles.rightTriangle}></div>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.mobileLayout}>
            <div className={styles.footerSection}>
              <h3 className={styles.sectionTitle}>About Us</h3>
              <p className={styles.aboutText}>{aboutText}</p>
            </div>

            <div className={styles.footerSection}>
              <h3 className={styles.sectionTitle}>Company</h3>
              <ul className={styles.companyLinks}>
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h3 className={styles.sectionTitle}>More to explore</h3>
              <ul className={styles.servicesLinks}>
                {servicesLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.mobileSocial}>
              <SocialIcons />
            </div>
          </div>

          <div className={styles.desktopLayout}>
            <div className={styles.footerSection}>
              <h3 className={styles.sectionTitle}>About US</h3>
              <p className={styles.aboutText}>{aboutText}</p>
              <SocialIcons />
            </div>

            <div className={styles.footerSection}>
              <h3 className={styles.sectionTitle}>Company</h3>
              <ul className={styles.companyLinks}>
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h3 className={styles.sectionTitle}>Services</h3>
              <ul className={styles.servicesLinks}>
                {servicesLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.bottomBar}>
            <div className={styles.bottomContent}>
              <div className={styles.bottomLinks}>
                <a href="/sitemap">SITE MAP</a>
                <a href="/privacy">PRIVACY</a>
                <a href="/terms">TERM</a>
              </div>
              <p className={styles.copyright}>
                © 2018 <span className={styles.highlight}>Brandsmashers</span> Tech | 
                <a href="#top" className={styles.backToTop}> BACK TO TOP ↑</a>
              </p>
            </div>
            <div className={styles.tagline}>
              Your Trusted Development Partner. 10X Faster and smarter
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
