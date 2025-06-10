"use client";

import React from "react";
import styles from "./ranking.module.css";
import Image from "next/image";

export default function Ranking({ nome, pontos, clientes }) {
  return (
    <div className={styles.Ranking}>
      <Image
        src="/images/negociation/Sprites/Ranking.png"
        width={280}
        height={540}
        alt="ranking"
      />

      <p>RANKING SCORE</p>

      <div className={styles.colocacao}>
        <span>{nome}</span>
        <div className={styles.info}>
          <span>{pontos} pontos</span>
          <span>|</span>
          <span>{clientes} clientes</span>
        </div>
      </div>
    </div>
  );
}
