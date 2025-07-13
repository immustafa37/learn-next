'use client'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>home</h1>
      <button onClick={()=>{
        alert("Hello Next js")
      }}>Click Me</button>
    </div>
  );
}