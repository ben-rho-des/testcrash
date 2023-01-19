import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>home page 🏡</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>home page 🏡</h1>
      </main>
    </div>
  );
}
