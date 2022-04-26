import React from 'react';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import styles from "../styles/Work/Work.module.css";
import ContactHome from "../components/Contact/ContactHome"


const work = () => {
  return (
    <>
    <Navbar color={"black"}/>
    <Layout />
<main className={styles["main"]}>
Work Page
      </main>
    <ContactHome/>
    
    </>
  );
}

export default work;
