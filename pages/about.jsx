import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import styles from "../styles/About/AboutPage.module.css"
import ContactHome from "../components/Contact/ContactHome"
import AboutPageLayout from '../components/About/AboutPageLayout';
const About = () => {
  return (
    <>
    <Navbar colorFirstNav={"black"}/>
    <Layout />
<main className={styles["main"]}>
      <AboutPageLayout/>
      </main>
    <ContactHome/>
    </>
  );
}

export default About;
