import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles["navbar"]}>
      <Link className={styles["navbar-link"]} href="/">
        Accueil
      </Link>

      <Link className={styles["navbar-link"]} href="/listes">
        Listes
      </Link>

      <Link className={styles["navbar-link"]} href="/isr">
        ISR
      </Link>
      <Link className={styles["navbar-link"]} href="/btc">
        BTC
      </Link>
      <Link className={styles["navbar-link"]} href="/add">
        Add (POST API)
      </Link>
    </nav>
  );
};

export default Navbar;
