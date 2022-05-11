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
        const homeImgRefEl = homeImgRef.current;
            gsap.fromTo(homeImgRefEl,{  y: 0,}, {
        y: 500,
        ease: "none",
        scrollTrigger: {
            trigger: subRefTrigger.current,
            start: "0 top", // the default values
            end: "1000 top",
            scrub: true,
            markers:true
        }, 
});
    },[])
  return (
      <section className={styles["home-section"]} ref={subRefTrigger}>
          <div className={styles["home-img"]}>
              <img src="https://images.pexels.com/photos/458497/pexels-photo-458497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  ref={homeImgRef}
                  alt="" />
          </div>
          <div className={styles["home-heading"]}>
              <p>Freelance Devloper & Designer</p>
              <h1>Gaurav Achhra</h1>
              <span></span>
            </div>
      </section>
  )
}

export default HomeSection