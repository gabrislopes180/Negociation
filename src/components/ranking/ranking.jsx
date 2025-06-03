"use client";

import React from "react";
import styles from "./ranking.module.css";
import Image from "next/image";

export default function Ranking() {
  return (
    <Image
      src="/images/negociation/Sprites/Ranking.png"
      className={styles.Ranking}
      width={280}
      height={540}
      alt="ranking"
    />
  );
}
