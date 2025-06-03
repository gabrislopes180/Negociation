"use client";

import React from "react";
import styles from "./tabelaLigas.module.css";
import Image from "next/image";

export default function TabelaLigas() {
  return (
    <Image
      src="/images/negociation/Sprites/TabelaLigas.png"
      className={styles.TabelaLigas}
      width={280}
      height={430}
      alt="ligas"
    />
  );
}
