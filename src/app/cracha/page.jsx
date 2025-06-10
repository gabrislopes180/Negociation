"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./cracha.module.css";
import Cracha1 from "@/components/cracha1/cracha1";
import Cracha2 from "@/components/cracha2/cracha2";
import Cracha3 from "@/components/cracha3/cracha3";
import Cracha4 from "@/components/cracha4/cracha4";
import Cracha5 from "@/components/cracha5/cracha5";

export default function Cracha() {
  return (
    <div className={styles.background}>
      <div className={styles.notepad}>
        <Image
          src="/images/negociation/Sprites/Notepad.png"
          width={600}
          height={600}
          alt="notepad"
        />
        <span>Escolha seu Crachá</span>
      </div>

      <Link href="/escritorio">
        <Cracha1
          avatarSrc="/images/negociation/Sprites/Avatar1.png"
          nome="Valdo"
          coracoesSrc="/images/negociation/Sprites/coracao.png"
        />
      </Link>

      <Link href="/escritorio">
        <Cracha2
          avatarSrc="/images/negociation/Sprites/Avatar1.png"
          nome="Elza"
          coracoesSrc="/images/negociation/Sprites/coracao.png"
        />
      </Link>
      <Link href="/escritorio">
        <Cracha3
          avatarSrc="/images/negociation/Sprites/Avatar1.png"
          nome="Cassia"
          coracoesSrc="/images/negociation/Sprites/coracao.png"
        />
      </Link>
      <Link href="/escritorio">
        <Cracha4
          avatarSrc="/images/negociation/Sprites/Avatar1.png"
          nome="Nando"
          coracoesSrc="/images/negociation/Sprites/coracao.png"
        />
      </Link>
      <Link href="/escritorio">
        <Cracha5
          avatarSrc="/images/negociation/Sprites/Avatar1.png"
          nome="Milton"
          coracoesSrc="/images/negociation/Sprites/coracao.png"
        />
      </Link>
    </div>
  );
}
