import React from "react";
import { useState, useEffect } from "react";
import styles from "./timer2.module.css";

export default function Reloginho2() {
  const [timer, setTimer] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const step = Math.floor((100 - timer) / 10);

  return (
    <div className={styles.timer3}>
      <div className={styles.timerDisplay}>
        <p className={styles.text}>TIMER</p>
        <span>{timer}</span>
      </div>

      <div className={styles.progressBar}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className={`${styles.segment} ${
              index >= 10 - step ? styles.inactive : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
