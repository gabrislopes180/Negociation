"use client";

import React from "react";
import styles from "./quadroNoticias.module.css";
import Image from "next/image";

export default function QuadroNoticias() {
  return (
    <Image
      src="/images/negociation/Sprites/QuadroNoticias.png"
      className={styles.QuadroNoticias}
      width={350}
      height={600}
      alt="quadro"
    />
  );
}
