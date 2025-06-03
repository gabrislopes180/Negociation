import React from "react";
import Image from "next/image";
import styles from "./newGameDoor.module.css";
import Link from "next/link";

export default function NewGameDoor() {
  const openSound = new Audio("/Opening Door.mp3");
  const closeSound = new Audio("/Closing Door.mp3");

  const handleMouseEnter = () => {
    openSound.play();
  };

  const handleMouseLeave = () => {
    closeSound.play();
  };

  return (
    <div className={styles.doors}>
      <div
        className={styles.closed}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src="/Porta Fechada.png"
          width={220}
          height={365}
          alt="Porta Fechada"
        />
      </div>

      <div className={styles.opened}>
        <Image
          src="/Porta Aberta.png"
          width={136}
          height={360}
          alt="Porta Aberta"
        />
      </div>
    </div>
  );
}
