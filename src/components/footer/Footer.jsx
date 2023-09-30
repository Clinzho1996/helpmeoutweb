import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          src={"/logowhite.png"}
          alt="logo white"
          width={200}
          height={50}
        />
      </div>
      <div className={styles.links}>
        <div className={styles.menu}>
          <span>Menu</span>
          <Link href="/">Home</Link>
          <Link href="/">Converter</Link>
          <Link href="/">How It Works</Link>
        </div>
        <div className={styles.menu}>
          <span>About Us</span>
          <Link href="/">About</Link>
          <Link href="/">Contact Us</Link>
          <Link href="/">Privacy Policy</Link>
        </div>
        <div className={styles.menu}>
          <span>Screen Record</span>
          <Link href="/">Browser Window</Link>
          <Link href="/">Desktop</Link>
          <Link href="/">Application</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
