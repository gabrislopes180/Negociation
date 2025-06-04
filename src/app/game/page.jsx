"use client";

import React from "react";
import styles from "./game.module.css";
import Link from "next/link";
import GameTable from "@/components/gameTable/gameTable";
import TelaGame from "@/components/telaGame/telaGame";
import QuadroGame from "@/components/quadroGame/quadroGame";
import Telefone from "@/components/telefone/telefone";
import Cracha4 from "@/components/cracha4/cracha4";

export default function GameScreen() {
  return (
    <div className={styles.background}>
      <GameTable />
      <TelaGame />
      <QuadroGame
        nome="Nome Jogador"
        imagem="/images/negociation/Sprites/Avatar1.png"
      />
      <Telefone />
      <Cracha4 />

      <Link href="/fim">
        <button>Avançar</button>
      </Link>
    </div>
  );
}
