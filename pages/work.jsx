import React from 'react';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import styles from "../styles/Work/Work.module.css"

const work = () => {
  return (
    <>
    <Navbar color={"black"}/>
    <Layout />
<main className={styles["main"]}>
Work Page
</main></>
  );
}

export default work;
