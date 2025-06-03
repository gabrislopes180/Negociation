"use client";

import React from "react";
import Link from "next/link";
import styles from "./gameMode.module.css";
import NewGameDoor1 from "@/components/NewGameDoor1/newGameDoor1";
import NewGameDoor2 from "@/components/NewGameDoor2/newGameDoor2";

export default function GameMode() {
  return (
    <div className={styles.background}>
      <Link href="/bancoScreen">
        <NewGameDoor1 />
      </Link>

      <Link href="/bancoScreen">
        <NewGameDoor2 />
      </Link>
    </div>
  );
}
