"use client";

import React from "react";
import styles from "./folhas.module.css";
import Image from "next/image";

export default function Folhas({ folha1, folha2, folha3 }) {
  return (
    <div className={styles.folhas}>
      <Image
        src="/images/negociation/Sprites/Folha.png"
        className={styles.Folha1}
        width={300}
        height={420}
        alt="folha"
      />

      <span className={styles.textoFolha1}>{folha1}</span>

      <Image
        src="/images/negociation/Sprites/PostIt1.png"
        className={styles.PostIt1}
        width={120}
        height={120}
        alt="folha"
      />

      <Image
        src="/images/negociation/Sprites/PostIt2.png"
        className={styles.PostIt2}
        width={120}
        height={120}
        alt="folha"
      />
      <span className={styles.textoPostIt1}>{folha2}</span>
      <span className={styles.textoPostIt2}>{folha3}</span>
    </div>
  );
}
