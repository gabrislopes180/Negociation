"use client";

import React from "react";
import styles from "./game.module.css";
import GameTable from "@/components/gameTable/gameTable";
import TelaGame from "@/components/telaGame/telaGame";
import QuadroGame from "@/components/quadroGame/quadroGame";
import Telefone from "@/components/telefone/telefone";
import CrachaGame from "@/components/crachaGame/crachaGame";

export default function GameScreen() {
  return (
    <div className={styles.background}>
      <GameTable />
      <TelaGame
        carteira="Iglu"
        tipo="veículo"
        atraso="100 dias"
        valor="10.000,00"
        p1="10"
        p2="25"
        p3="40"
      />
      <QuadroGame
        nome="Zildo comedor de maçã"
        imagem="/images/negociation/Sprites/Avatar1.png"
      />
      <Telefone descript="teste teste sdfwfwfwf we fw f w e w ew fwefwefwef wrwerf efwfefw f wefwefwe fw fwfwfw" />
      <CrachaGame
        nome="Zildo"
        coracoesSrc="/images/negociation/Sprites/coracao.png"
        avatarSrc="/images/negociation/Sprites/Avatar1.png"
      />
    </div>
  );
}
