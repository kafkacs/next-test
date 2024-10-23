"use client";
import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.mainNav}>
      <Link href="/">Home Page</Link>
      <Link href="/users">Users Page</Link>
      <Link href="/about">About Page</Link>
    </nav>
  );
};
export default NavBar;
