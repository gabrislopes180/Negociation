"use client";

import React from "react";
import styles from "./telefone.module.css";
import Image from "next/image";

export default function Telefone({ descript }) {
  return (
    <div className={styles.telefoneContainer}>
      <Image
        className={styles.telefone}
        src="/images/negociation/Sprites/Telefone.png"
        width={380}
        height={340}
      />

      <span>{descript}</span>
    </div>
  );
}
