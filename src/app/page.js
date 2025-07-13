'use client'
import styles from "./page.module.css";

export default function Home() {
  const apple = ()=>{
    alert("Fruit")
  }
  return (
    <div className={styles.page}>
      <h1>home</h1>
      <button onClick={apple}>Click Me</button>
    </div>
  );
}