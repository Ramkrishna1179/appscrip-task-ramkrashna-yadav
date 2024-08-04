"use client";

import React, { useState } from "react";
import styles from "./Footer.module.css";

const MobileFooterSection: React.FC<{
  title: string;
  children: React.ReactNode;
  noAccordion?: boolean;
}> = ({ title, children, noAccordion = false }) => {
  const [isOpen, setIsOpen] = useState(noAccordion);

  return (
    <div
      className={`${styles.mobileFooterSection} ${
        noAccordion ? styles.noAccordion : ""
      }`}
    >
      <div
        className={styles.sectionHeader}
        onClick={() => !noAccordion && setIsOpen(!isOpen)}
      >
        <h3>{title}</h3>
        {!noAccordion && (
          <span className={`${styles.arrow} ${isOpen ? styles.arrowUp : ""}`}>
            ▼
          </span>
        )}
      </div>
      <div className={`${styles.sectionContent} ${isOpen ? styles.open : ""}`}>
        {children}
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.desktopFooter}>
        <div className={styles.upperFooter}>
          <div className={styles.newsletter}>
            <h4>BE THE FIRST TO KNOW</h4>
            <p style={{ fontSize: "15px", padding: "30px 0px" }}>
              Sign up for updates from mettā muse.
            </p>
            <div className={styles.subscribeForm}>
              <input type="email" placeholder="Enter your e-mail..." />
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <h4>CONTACT US</h4>
            <p style={{ fontSize: "15px", padding: "10px 0px 10px 0px" }}>
              +44 221 133 5360
            </p>
            <p>customercare@mettamuse.com</p>
            <h4 style={{ fontSize: "15px", padding: "10px 0px 10px 0px" }}>
              CURRENCY
            </h4>
            <div className={styles.currencyDiv}>
            <img
              className={styles.currency}
              src="/United States of America (US).png"
              alt="US Flag"
              width={20}
              height={20}
            />
            <img  src="/Star 1.png" alt="Star Img" />
            <span>USD</span>
            </div>
            <p className={styles.currencyNote}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>

        <div className={styles.lowerFooter}>
          <div className={styles.companyInfo}>
            <h3>mettā muse</h3>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div className={styles.quickLinks}>
            <h3>QUICK LINKS</h3>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className={styles.socialAndPayment}>
            <h3>FOLLOW US</h3>
            <div className={styles.socialIcons}>
              <img src="/Insta.png" alt="Instagram" width={30} height={25} />
              <img src="/a.png" alt="LinkedIn" width={30} height={25} />
            </div>
            <h3>mettā muse ACCEPTS</h3>
            <div className={styles.paymentIcons}>
              <img
                src="/Group 136188.png"
                alt="Google Pay"
                width={40}
                height={25}
              />
              <img
                src="/Group 136190.png"
                alt="Mastercard"
                width={40}
                height={25}
              />
              <img
                src="/Group 136192.png"
                alt="PayPal"
                width={40}
                height={25}
              />
              <img
                src="/Group 136193.png"
                alt="American Express"
                width={40}
                height={25}
              />
              <img
                src="/Group 136194.png"
                alt="Apple Pay"
                width={40}
                height={25}
              />
              <img src="/Group 136195.png" alt="D Pay" width={40} height={25} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mobileFooter}>
        <MobileFooterSection title="BE THE FIRST TO KNOW" noAccordion={true}>
          <p className={styles.newsletterText}>
            Sign up for updates from mettā muse.
          </p>
          <div className={styles.subscribeForm}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </MobileFooterSection>

        <div className={styles.callUs}>
          <h3>CALL US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
        </div>

        <div className={styles.currency}>
          <h3>CURRENCY</h3>
          <div className={styles.currencyDiv}>
            <img
              src="/United States of America (US).png"
              alt="US Flag"
              width={20}
              height={15}
            />
                        <img  src="/Star 1.png" alt="Star Img" />

            <span>USD</span>
          </div>
        </div>

        <MobileFooterSection title="mettā muse">
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </MobileFooterSection>

        <MobileFooterSection title="QUICK LINKS">
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </MobileFooterSection>

        <MobileFooterSection title="FOLLOW US">
          <div className={styles.socialIcons}>
            <img src="/Insta.png" alt="Instagram" width={30} height={25} />
            <img src="/a.png" alt="LinkedIn" width={30} height={25} />
          </div>
        </MobileFooterSection>

        <div className={styles.paymentSection}>
          <h3>mettā muse ACCEPTS</h3>
          <div className={styles.paymentIcons}>
            <img src="/Group 136188.png" alt="Google Pay" />
            <img src="/Group 136190.png" alt="Mastercard" />
            <img src="/Group 136192.png" alt="PayPal" />
            <img src="/Group 136193.png" alt="American Express" />
            <img src="/Group 136194.png" alt="Apple Pay" />
            <img src="/Group 136195.png" alt="D Pay" />
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
