import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Swanslate</title>
        <meta name="description" content="Swanslate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <>
          <h1 className={styles.motto}>
            Beatiful Translations
            <br />
            Instantly Delivered
          </h1>
          <h3 className={styles.subContent}>
            Translation and localization tasks <br />
            Powered by millions of Pioneers around the World <br />
            Start earning Pi now!
          </h3>
        </>
      </Layout>
    </div>
  );
}
