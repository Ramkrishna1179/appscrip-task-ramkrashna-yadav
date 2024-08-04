"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={styles.logoContainer}>
          <div
            className={styles.mobileMenuIcon}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.logo}>
            {" "}
            <img src="/Logo.png" alt="Logo" width={25} height={25} />
          </div>
        </div>
        <nav className={styles.navCenter}>
          <a href="/">Logo</a>
        </nav>
        <div className={styles.icons}>
          <img src="/search-normal.png" alt="Search Logo" />
          <img src="/heart.png" alt="Heart Image" />
          <img src="/shopping-bag.png" alt="Shopping-Logo" />
          <img
            className={styles.displayNoneOnMobile}
            src="/profile.png"
            alt="Profile Logo"
          />
          <span>ENG ▼</span>
        </div>
      </div>
      <nav className={`${styles.bottomRow} ${styles.desktopNav}`}>
        <a href="/#">SHOP</a>
        <a href="/#">SKILLS</a>
        <a href="/#">STORIES</a>
        <a href="/#">ABOUT</a>
        <a href="/#">CONTACT US</a>
      </nav>
      {isMenuOpen && (
        <nav className={styles.mobileMenu}>
          <a href="/#">SHOP</a>
          <a href="/#">SKILLS</a>
          <a href="/#">STORIES</a>
          <a href="/#">ABOUT</a>
          <a href="/#">CONTACT US</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
