import React from "react";
import styles from "./infos.module.css";

export default function Infos({ titulo, pontuacao, clientes, colocacao }) {
  return (
    <div className={styles.infos}>
      <span>{titulo}</span>

      <div className={styles.desempenho}>
        <span>{pontuacao} pts</span>
        <span>{clientes} clientes</span>
      </div>

      <span>colocação {colocacao}º</span>
    </div>
  );
}
