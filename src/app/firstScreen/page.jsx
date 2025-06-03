"use client";

import React, { useState, useEffect } from "react";
import styles from "./first.module.css";
import { useRouter } from "next/navigation";

export default function FirstScreen() {
  const [backgroundPositionY, setBackgroundPositionY] = useState(-1160);
  const [advice, setAdvice] = useState(true);
  const router = useRouter();

  const changeBackground = () => {
    setBackgroundPositionY(0);
  };

  useEffect(() => {
    const handleKeyDown = (tecla) => {
      if (tecla.key.toLowerCase() === "enter") {
        changeBackground();
        setAdvice(false);

        setTimeout(() => {
          router.push("./cracha");
        }, 7000);
      }
    };

    // Adiciona o event listener ao objeto window quando o componente é montado
    window.addEventListener("keydown", handleKeyDown);

    // Função de limpeza: Remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [changeBackground]);
  return (
    <div
      className={styles.background}
      style={{ backgroundPosition: `-10px ${backgroundPositionY}px` }}
    >
      {advice && (
        <span className={styles.advice}>Pressione Enter para Iniciar</span>
      )}
    </div>
  );
}
