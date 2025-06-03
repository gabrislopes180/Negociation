"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Cracha1 from "@/components/cracha1/cracha1";
import Cracha2 from "@/components/cracha2/cracha2";
import Cracha3 from "@/components/cracha3/cracha3";
import Cracha4 from "@/components/cracha4/cracha4";
import Cracha5 from "@/components/cracha5/cracha5";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}></div>
      </main>
      <footer className={styles.footer}></footer>

      <Link href="/loadingScreen">
        <button
          style={{
            marginTop: "90%",
            padding: "0.5rem 1rem",
            backgroundColor: "transparent",
          }}
        >
          Iniciar jogo
        </button>
      </Link>
    </div>
  );
}
