"use client";

import React from "react";
import styles from "./quadroGame.module.css";
import Image from "next/image";

export default function QuadroGame({ nome, imagem }) {
  return (
    <div className={styles.quadroGame}>
      <Image
        className={styles.quadro}
        src="/images/negociation/Sprites/Quadro.png"
        width={320}
        height={220}
      />

      <Image
        className={styles.imagemPlayer}
        src={imagem}
        width={120}
        height={120}
      />

      <Image
        className={styles.nomePlayer}
        src="/images/negociation/Sprites/Nome Player.png"
        width={150}
        height={95}
      />

      <Image
        className={styles.taxinha}
        src="/images/negociation/Sprites/Taxinha.png"
        width={35}
        height={35}
      />

      <span>{nome}</span>
    </div>
  );
}
