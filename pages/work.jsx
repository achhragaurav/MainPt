import React from 'react';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import styles from "../styles/Work/Work.module.css";
import ContactHome from "../components/Contact/ContactHome"
import WorkPageLayout from '../components/Projects/WorkPageLayout';


const work = () => {
  return (
    <>
    <Navbar colorFirstNav={"black"}/>
    <Layout />
<main className={styles["main"]}>
    <WorkPageLayout/>
      </main>
    <ContactHome/>
    
    </>
  );
}

export default work;
