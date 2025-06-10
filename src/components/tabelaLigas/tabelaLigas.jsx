"use client";

import React from "react";
import styles from "./tabelaLigas.module.css";
import Image from "next/image";

export default function TabelaLigas({
  nome,
  pontos,
  ranking,
  clientes,
  data,
  level,
}) {
  return (
    <div className={styles.TabelaLigas}>
      <Image
        src="/images/negociation/Sprites/TabelaLigas.png"
        width={280}
        height={430}
        alt="ligas"
      />

      <div className={styles.infos}>
        <span>{nome}</span> <br />
        <span>{pontos} pontos</span> <br />
        <span>Ranking: {ranking}</span> <br />
        <span>{clientes} clientes</span> <br />
        <span>Data Score: {data}</span> <br />
        <span>{level}</span> <br />
      </div>
    </div>
  );
}
