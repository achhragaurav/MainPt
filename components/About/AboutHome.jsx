import React, { useEffect, useRef } from "react";
import styles from "../../styles/About/AboutHome.module.css";
import BallElasticAnimComp from "../AnimationComp/BallElasticAnimComp";
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const AboutHome = () => {
  const mainAboutFirst = useRef(null);
  const aboutBallRef = useRef(null);

  useEffect(() => {
    let delayTimer = `${0.03}`;
    [...mainAboutFirst.current.children].forEach(element => {
      console.log(element.children[0])
      gsap.fromTo(element.children[0],{  y: 100,}, {
        y: 0,
        ease: "none",
        delay: delayTimer,
        ease:"power2.out",
        scrollTrigger: {
            trigger: mainAboutFirst.current,
        }, 
      });
      delayTimer = `${+delayTimer+0.03}`
    });

    gsap.to(mainAboutFirst, {
      x: 200,
      duration: 3

      // scrollTrigger: {
      //   trigger: mainAboutFirst, // make .panel2 the trigger
      //   start: "10% bottom" // 10% of .panel2 enters the bottom of the viewport
      //   // Whatever other ScrollTrigger vars you need here
      // }
    });
      gsap.fromTo(aboutBallRef.current,{  y: 300,}, {
        y: -100,
        ease: "none",
        scrollTrigger: {
            trigger: mainAboutFirst.current,
            start: "-100px 800px", // the default values
            end: "800px -100px",
            scrub: true,
        }, 
      });
    // gsap.fromTo(mainAboutFirst.current.children,{  y: 100,}, {
    //     y: 0,
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: mainAboutFirst.current,
    //     }, 
    //         });
  }, []);
  return (
    <section className={styles["main-about"]}>
      <div className={styles["main-about-first"]}>
        <p ref={mainAboutFirst}>
          <span className={styles["span-line"]}>
            <span className={styles["span-line-inner"]}>
              Helping
            </span>
          </span>
          <span className={styles["span-line"]}>
            <span className={styles["span-line-inner"]}>to</span></span>
          <span className={styles["span-line"]}>
            <span className={styles["span-line-inner"]}>brands</span></span>
          <span className={styles["span-line"]}>
            <span className={styles["span-line-inner"]}>stand</span></span>
          <span className={styles["span-line"]}>
            <span className={styles["span-line-inner"]}>out</span></span>
          <span className={styles["span-line"]}>
            <span className={styles["span-line-inner"]}>in</span></span>
          <span className={styles["span-line"]}>
            <span className={styles["span-line-inner"]}>the</span></span>
          <span className={styles["span-line"]}>
            <span className={styles["span-line-inner"]}>digital</span></span>
          <span className={styles["span-line"]}>
            <span className={styles["span-line-inner"]}>era.</span></span>
          <span className={styles["span-line"]}>
            <span className={styles["span-line-inner"]}>Together</span></span>
          <span className={styles["span-line"]}>
            <span className={styles["span-line-inner"]}>we</span></span>
          <span className={styles["span-line"]}>
            <span className={styles["span-line-inner"]}>will</span></span>
          <span className={styles["span-line"]}>
            <span className={styles["span-line-inner"]}>set</span></span>
          <span className={styles["span-line"]}>
            <span className={styles["span-line-inner"]}>the</span></span>
          <span className={styles["span-line"]}>
            <span className={styles["span-line-inner"]}>new</span></span>
          <span className={styles["span-line"]}>
            <span className={styles["span-line-inner"]}>status</span></span>
          <span className={styles["span-line"]}>
            <span className={styles["span-line-inner"]}>quo.</span></span>
          <span className={styles["span-line"]}>
            <span className={styles["span-line-inner"]}>No</span></span>
          <span className={styles["span-line"]}>
            <span className={styles["span-line-inner"]}>nonsense</span></span>
          <span className={styles["span-line"]}>
            <span className={styles["span-line-inner"]}>always</span></span>
          <span className={styles["span-line"]}>
            <span className={styles["span-line-inner"]}>on</span></span>
          <span className={styles["span-line"]}>
            <span className={styles["span-line-inner"]}>cutting</span></span>
          <span className={styles["span-line"]}>
            <span className={styles["span-line-inner"]}>edge</span></span>
        </p>
      </div>
      <div className={styles["main-about-second"]}>
        <p>
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </p>
        <div className={styles["about-ball"]} ref={aboutBallRef}>
          <BallElasticAnimComp styles={styles} title="About" />
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
