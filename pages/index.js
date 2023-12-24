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
import { Main } from '../components/Home/ThreeJSAnim/Main'
import HomeSectionMain from '../components/Home/HomeSectionMain'

export default function Home({initialLoad, setInitialLoad}) {
 
  
  const aboutRef = useRef(null);
  const aboutHeadingRef = useRef(null);

useEffect(() =>{
  window.scrollTo(0, 0)
},[])

  return (
    <>
    <Navbar colorFirstNav={"white"} />
    <Layout />
      <div className={styles["main"]}>
       {initialLoad &&  <HomeSection initialLoad={initialLoad} setInitialLoad={setInitialLoad} />}
        <HomeSectionMain initialLoad={initialLoad} setInitialLoad={setInitialLoad} />
        {/* <Main/> */}
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
