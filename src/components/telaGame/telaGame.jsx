"use client";

import React from "react";
import styles from "./telaGame.module.css";
import Image from "next/image";
import Link from "next/link";

export default function TelaGame({
  carteira,
  tipo,
  atraso,
  valor,
  p1,
  p2,
  p3,
}) {
  return (
    <div className={styles.gameContainer}>
      <Image
        className={styles.telaGame}
        src="/images/negociation/Sprites/Tela Game.png"
        width={580}
        height={420}
      />

      <div className={styles.dados}>
        <Image
          src="/images/negociation/Sprites/Dados Game.png"
          width={430}
          height={120}
        />

        <div className={styles.dadosCliente}>
          <span>tipo: {tipo}</span> <br />
          <span>Atraso: {atraso}</span> <br />
          <span>Valor: {valor}</span> <br />
        </div>

        <div className={styles.dadosCarteira}>
          <span>0 a 30 - {p1}%</span> <br />
          <span>31 a 60 - {p2}%</span> <br />
          <span>Acima de 60 - {p3}%</span> <br />
        </div>
      </div>

      <button>
        <Link href="/fim">
          <Image
            className={styles.aceitar}
            width={150}
            height={40}
            src="/images/negociation/Sprites/Aceitar.png"
          />
        </Link>
      </button>

      <button>
        <Link href="/fim">
          <Image
            className={styles.negociar}
            width={150}
            height={40}
            src="/images/negociation/Sprites/Aceitar.png"
          />
        </Link>
      </button>

      <span className={styles.span1}>Dados do cliente</span>

      <span className={styles.span2}>Carteira: {carteira}</span>
    </div>
  );
}
