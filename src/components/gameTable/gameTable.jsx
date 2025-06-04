"use client";

import React from "react";
import styles from "./gameTable.module.css";
import Image from "next/image";

export default function GameTable() {
  return (
    <Image
      className={styles.gameTable}
      src="/images/negociation/Sprites/Game Table.png"
      width={1300}
      height={642}
    />
  );
}
