"use client";

import React, { useState, useEffect } from "react";
import styles from "./loading.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoadingScreen() {
  const [iconOpacity, setIconOpacity] = useState(0);
  const router = useRouter(); // Inicialize o router

  useEffect(() => {
    const timer = setTimeout(() => {
      setIconOpacity(1); // Mude a opacidade para 1
    }, 3000);

    setTimeout(() => {
      setIconOpacity(0); // Mude a opacidade para 1
    }, 8000);

    const navigateTimer = setTimeout(() => {
      router.push("/firstScreen"); // Mude '/nome-da-proxima-pagina' para o caminho real
    }, 9000);

    // Limpeza: limpa o timer se o componente for desmontado antes do tempo
    return () => {
      clearTimeout(timer);
      clearTimeout(navigateTimer);
    };
  }, [router]);

  return (
    <div className={styles.background}>
      <div className={styles.backgroundEffect}>
        <Image
          src="/images/negociation/Sprites/Icone%20CEU.png"
          alt="Ícone céu"
          className={styles.CEUicon}
          width={200}
          height={200}
          style={{ opacity: iconOpacity }}
        />
      </div>
    </div>
  );
}
