'use client'
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [name, setName]= useState("Mustafa")
  const apple = ()=>{
    setName("Mustafa Ahsan")
  }
  return (
    <div className={styles.page}>
      <h1>{name}</h1>
      <button onClick={apple}>Click Me</button>
    </div>
  );
}