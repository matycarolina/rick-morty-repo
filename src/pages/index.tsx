import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rick and Morty | Home</title>
        <meta name="keywords" content="RickMorty" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Home</h1>
      <p className={styles.text}>
        Rick Sánchez es la definición exacta de "científico loco". Es
        alcohólico, es un genio, es irresponsable y está loco. Rick acaba de
        mudarse a casa de su hija Beth y allí recuerda que tiene un nieto
        llamado Morty. Sin preguntar a nadie, decide que va a obligarle a que le
        acompañe a todo tipo de aventuras para que el chico se vuelva
        inteligente como él y no se convierta en un idiota como Jerry, padre de
        Morty y yerno de Rick.
      </p>
      <Link href="/characters">
        <a className={styles.btn}>Ver Personajes</a>
      </Link>
    </>
  );
};

export default Home;
