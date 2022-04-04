import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import styles from "../styles/Contact/ContactPage.module.css"
const Contact = () => {
  return (
    <>
    <Navbar/>
    <Layout />
    <main className={styles["main"]}>
Contact Page
</main></>
  );
}

export default Contact;
