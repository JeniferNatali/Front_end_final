import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello Lua</h1>
      <h2>Olá terra</h2>
      <p>paragrafo</p>
      <br />
      <p>outro paragrafo</p>
      <br />
      <p>mais outro paragrafo</p>
      <br />
      {/* <br /> espaco */}
      <div>
      <h1>Olá universo</h1>
    </div>
    </main>
  );
}
