import React from "react";
import { useState, useEffect } from "react";
import styles from "./timer1.module.css";

export default function Reloginho() {
  const [timer, setTimer] = useState(100);
  const [bar, setBar] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });

      setBar((prev) => {
        if (prev > 0) {
          return prev - 0.01;
        }
        return 0;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.timerContainer}>
      <span>{timer}</span>
      <div className={styles.bartimer}>
        <div
          className={styles.barFill}
          style={{ width: `${bar * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
