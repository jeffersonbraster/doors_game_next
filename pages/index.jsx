import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Gift from "../components/Gift";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Doors Game</title>
        <meta name="description" content="Game find the gift" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Gift />
    </div>
  );
}
