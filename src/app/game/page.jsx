"use client";

import React from "react";
import styles from "./game.module.css";
import Image from "next/image";
import TelaGame from "@/components/telaGame/telaGame";

export default function GameScreen() {
  return (
    <div className={styles.background}>
      <Image
        className={styles.gameTable}
        src="/images/negociation/Sprites/Game Table.png"
        width={1300}
        height={642}
      />

      <TelaGame />
    </div>
  );
}
