import React from "react";
import styles from "./quadros.module.css";
import Image from "next/image";

export default function Quadros({ imagem1, imagem2 }) {
  return (
    <div className={styles.quadros}>
      <Image src={imagem1} width={200} height={250} />
      <br />
      <Image src={imagem2} width={270} height={180} />
    </div>
  );
}
