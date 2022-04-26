import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import styles from "../styles/About/AboutPage.module.css"
import ContactHome from "../components/Contact/ContactHome"
const About = () => {
  return (
    <>
    <Navbar color={"black"}/>
    <Layout />
<main className={styles["main"]}>
About Page
      </main>
    <ContactHome/>
    </>
  );
}

export default About;
