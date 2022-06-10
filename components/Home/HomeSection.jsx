import React from 'react'
import styles from "../../styles/Home/HomeSection.module.css";
import { BsArrowUp } from "react-icons/bs";
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import { useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const HomeSection = ({initialLoad, setInitialLoad}) => {

    const subHeading = useRef(null)
    const headingOne = useRef(null)
    const homeSectionRef = useRef(null)
const lockScroll = (lock) =>{
    if(lock){

     return document.body.style.overflow = "hidden";
    }
    document.body.style.overflow = "scroll";
  }

    useEffect(() => {
        if (initialLoad) {
            gsap.fromTo(subHeading.current, {
      y:100   
        }, {
            y: 0,
            delay: 1,
            onStart: () => {
                lockScroll(true)
            }
        })
         gsap.fromTo([headingOne.current], {
      y:200   
        }, {
             y: 0,
            delay:1.5
         })
        gsap.fromTo([headingOne.current, subHeading.current], {
            opacity: 1,
        }, {
            
            opacity: 0,
            delay: 2.5
        
        })
        gsap.fromTo([homeSectionRef.current], {
           y:0
        }, {
            
          y:"-100vh",
            delay: 3,
            display:"none"
        })
       }
       
        
    },[initialLoad])
  return (
      <section className={styles["home-section"]} ref={homeSectionRef}>
          <div className={styles["home-heading"]}>
              <span>
                  <p ref={subHeading}>Freelance Devloper & Designer</p>
              </span>
              <span>
                  <h1 ref={headingOne}>Gaurav Achhra</h1>
              </span>
            </div>
      </section>
  )
}

export default HomeSection