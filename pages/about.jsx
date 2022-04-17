import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import styles from "../styles/About/AboutPage.module.css"

const About = () => {
  return (
    <>
    <Navbar color={"black"}/>
    <Layout />
<main className={styles["main"]}>
About Page
</main></>
  );
}

export default About;
