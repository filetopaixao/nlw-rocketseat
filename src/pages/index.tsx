import React from "react";
import CompletedChallenges from "../components/CompletedChallenges";
import Head from 'next/head';
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";

import styles from '../styles/pages/Home.module.css'
import ChallengeBox from "../components/ChallengeBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}
