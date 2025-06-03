"use client";

import React, { useEffect, useState } from "react";
import styles from "./bancoScreen.module.css";
import Prancheta from "@/components/bancoPrancheta/prancheta";
import { useRouter } from "next/navigation";
export default function BancoScreen() {
  const [advice, setAdvice] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setAdvice(true);
    }, 1500);

    setTimeout(() => {
      router.push("/game");
    }, 6000);
  });
  return (
    <div className={styles.background}>
      <Prancheta carteiraSRC="/images/negociation/Sprites/Carteira.png" />

      {advice && <span className={styles.loadingText}>Um momento...</span>}
    </div>
  );
}
