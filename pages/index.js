import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import styles from "../styles/Home/HomePage.module.css"
import { useState } from 'react'
import { useEffect, useRef } from 'react'
import {gsap} from 'gsap'
import BallElasticAnimComp from '../components/AnimationComp/BallElasticAnimComp'
import BigProjectList from '../components/Projects/BigProjectList'
import AboutHome from '../components/About/AboutHome'
import ContactHome from '../components/Contact/ContactHome'
import HomeSection from '../components/Home/HomeSection'

export default function Home() {
  const aboutRef = useRef(null);
  const aboutHeadingRef = useRef(null);
  const lockScroll = (lock) =>{
    if(lock){

     return document.body.style.overflow = "hidden";
    }
    document.body.style.overflow = "scroll";
  }


  return (
    <>
    <Navbar color={"white"} lockScroll={lockScroll} />
    <Layout />
      <div className={styles["main"]}>
        <HomeSection/>
      </div>
      <AboutHome/>
      <div className={styles["main-projects"]}>
        <div className={styles["main-projects-container"]}>
          <BigProjectList/>
        </div>
      </div>
      <div className={styles["main-contact"]}>
        <ContactHome/>
      </div>
        </>

  )
}
