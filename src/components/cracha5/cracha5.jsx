import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./cracha5.module.css";

export default function Cracha5({ avatarSrc, nome, coracoesSrc }) {
  const [coracoes, setCoracoes] = useState(3);
  const [espacoCount, setEspacoCount] = useState(0);

  const changeCoracao = (e) => {
    if (e.key.toLowerCase() === "enter") {
      setCoracoes((prev) => (prev > 0 ? prev - 1 : 0));
    }

    if (e.code === "Space") {
      setEspacoCount((prev) => prev + 1);
      console.log("Espaço pressionado:", espacoCount + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", changeCoracao);

    return () => {
      window.removeEventListener("keydown", changeCoracao);
    };
  }, []);

  return (
    <div
      className={`${styles.cracha} ${espacoCount >= 10 ? styles.girar : ""}`}
    >
      <Image
        src="/images/negociation/Sprites/Cracha individual.png"
        width={320}
        height={200}
        alt="cracha"
      />

      <span className={styles.name}>{nome}</span>

      <div className={styles.coracoes}>
        {coracoes >= 1 && (
          <Image
            className={styles.coracao1}
            src={coracoesSrc}
            width={50}
            height={50}
            alt="coracao"
          />
        )}
        {coracoes >= 2 && (
          <Image
            className={styles.coracao2}
            src={coracoesSrc}
            width={50}
            height={50}
            alt="coracao"
          />
        )}
        {coracoes >= 3 && (
          <Image
            className={styles.coracao3}
            src={coracoesSrc}
            width={50}
            height={50}
            alt="coracao"
          />
        )}
      </div>

      <Image
        className={styles.avatar}
        src={avatarSrc}
        width={95}
        height={119}
        alt="avatar1"
      />
    </div>
  );
}
