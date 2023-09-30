import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={"/logomain.png"} alt="logo" width={200} height={50} />
      </div>
      <div className={styles.work}>
        <Link href="/features">Features</Link>
        <Link href="/how-it-works">How It Works</Link>
      </div>
      <div className={styles.start}>
        <Link href="/get-started">Get Started</Link>
      </div>
    </div>
  );
}

export default Navbar;
