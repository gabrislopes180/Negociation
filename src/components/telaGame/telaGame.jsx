"use client";

import React from "react";
import styles from "./telaGame.module.css";
import Image from "next/image";

export default function TelaGame() {
  return (
    <div className={styles.telaGame}>
      <Image
        src="/images/negociation/Sprites/Tela Game.png"
        width={580}
        height={420}
      />

      <Image
        className={styles.dados}
        src="/images/negociation/Sprites/Dados Game.png"
        width={430}
        height={120}
      />

      <button>
        <Image
          className={styles.aceitar}
          width={150}
          height={45}
          src="/images/negociation/Sprites/Aceitar.png"
        />
      </button>

      <button>
        <Image
          className={styles.negar}
          width={150}
          height={45}
          src="/images/negociation/Sprites/Negociar.png"
        />
      </button>

      <span className={styles.span1}>Exemplo</span>

      <span className={styles.span2}>Exemplo</span>
    </div>
  );
}
