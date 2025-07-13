'use client'
import styles from "./page.module.css";

export default function Home() {
  const apple = (item)=>{
    alert(item)
  }
  return (
    <div className={styles.page}>
      <h1>home</h1>
      <button onClick={()=>apple("Fruit")}>Click Me</button>
    </div>
  );
}