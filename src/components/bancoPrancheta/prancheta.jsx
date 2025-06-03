import React from "react";
import Image from "next/image";
import styles from "./prancheta.module.css";

export default function Prancheta({ carteiraSRC }) {
  return (
    <div>
      <Image
        className={styles.prancheta}
        src="/images/negociation/Sprites/Banco Prancheta.png"
        width={300}
        height={400}
      />

      <Image
        className={styles.carteira}
        src={carteiraSRC}
        width={200}
        height={150}
      />
    </div>
  );
}
