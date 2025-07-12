import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>home</h1>
      <User name="Mustafa" />
      <User name="World" />
    </div>
  );
}

const User = (main)=>{
  return (
    <div>
      <h1>hello {main.name}</h1>
    </div>
  )
}
