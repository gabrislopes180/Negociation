"use client";

import React, { useState } from "react";
import styles from "./escritorio.module.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import NewGameDoor from "@/components/NewGameDoor0/newGameDoor";
import TabelaLigas from "@/components/tabelaLigas/tabelaLigas";
import Ranking from "@/components/ranking/ranking";
import QuadroNoticias from "@/components/quadroNoticias/quadroNoticias";
import Folhas from "@/components/folhas/folhas";

export default function Escritorio() {
  const [modalActive, setModalActive] = useState(false);
  const [backButtonActive, setBackButtonActive] = useState(false);

  const modal = () => {
    setModalActive(true);
    setTimeout(() => {
      setBackButtonActive(true);
    }, 300);
  };
  return (
    <div className={styles.background}>
      <Link href="/gameMode">
        <NewGameDoor />
      </Link>
      <QuadroNoticias />

      <TabelaLigas />
      <Ranking />
      <Folhas folha1="texto aqui" folha2="texto" folha3="texto" />

      <button className={styles.button} onClick={modal}>
        <Image
          src="/images/negociation/Sprites/Button.png"
          alt="btn"
          width={35}
          height={15}
        />
      </button>

      <AnimatePresence>
        {modalActive && (
          <div className={styles.modal}>
            <motion.img
              src="/images/negociation/Sprites/Modal.png"
              alt="modal"
              width={650}
              height={490}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />
          </div>
        )}
      </AnimatePresence>

      {backButtonActive && (
        <button
          className={styles.backButton}
          onClick={() => {
            setModalActive(false);
            setBackButtonActive(false);
          }}
        >
          <Image
            src="/images/negociation/Sprites/Back Button.png"
            alt="voltar"
            width={60}
            height={30}
          />
        </button>
      )}
    </div>
  );
}
