import React from 'react'
import styles from "../../styles/Home/HomeSection.module.css";
import { BsArrowUp } from "react-icons/bs";
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import { useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const HomeSection = () => {

    const homeImgRef = useRef(null)
    const subRefTrigger = useRef(null)
    useEffect(() => {
     
    },[])
  return (
      <section className={styles["home-section"]} ref={subRefTrigger}>
          <div className={styles["home-heading"]}>
              <p>Freelance Devloper & Designer</p>
              <h1>Gaurav Achhra</h1>
            </div>
      </section>
  )
}

export default HomeSection