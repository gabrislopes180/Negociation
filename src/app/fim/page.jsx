import React from "react";
import styles from "./fim.module.css";
import Quadros from "@/components/quadros/quadros";
import Infos from "@/components/infosFinais/infos";

export default function Fim() {
  return (
    <div className={styles.background}>
      <Quadros
        imagem1="/images/negociation/Sprites/Quadro2.png"
        imagem2="/images/negociation/Sprites/Quadro1.png"
      />

      <Infos titulo="Produção" pontuacao="800" clientes="90" colocacao="20" />
    </div>
  );
}
