import React from "react";
import Image from "next/image";
import styles from "./newGameDoor2.module.css";

export default function NewGameDoor2() {
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
          width={240}
          height={400}
          alt="Porta Fechada"
        />
      </div>

      <div className={styles.opened}>
        <Image
          src="/Porta Aberta.png"
          width={136}
          height={380}
          alt="Porta Aberta"
        />
      </div>
    </div>
  );
}
