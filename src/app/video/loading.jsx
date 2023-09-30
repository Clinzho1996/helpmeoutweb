import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

function Loading() {
  return (
    <div className={styles.loading}>
      <Image src="/loader.svg" alt="loading" width={100} height={100} />
    </div>
  );
}

export default Loading;
