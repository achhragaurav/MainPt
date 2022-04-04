import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import styles from "../styles/Home/HomePage.module.css"

export default function Home() {
  return (
    <>
    <Navbar/>
    <Layout />
      <div className={styles["main"]}>
        <p>Lorem ipsum dolor, sit amet consectetur 
          adipisicing elit. Amet iste dicta vitae nisi quaerat impedit eum cumque, ad quis sequi quisquam harum, voluptatibus maxime ipsam eveniet mollitia similique accusamus modi. Officia corrupti debitis eius, numquam repudiandae consectetur beatae autem consequatur quia rem exercitationem
           quibusdam doloremque? Perspiciatis dolorem quod expedita explicabo.</p>
      </div>
        </>

  )
}
