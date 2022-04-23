import React, { useEffect, useRef } from "react";
import styles from "../../styles/About/AboutHome.module.css";
import BallElasticAnimComp from "../AnimationComp/BallElasticAnimComp";
import { gsap } from "gsap";
const AboutHome = () => {
  const mainAboutFirst = useRef(null);
  useEffect(() => {
    gsap.to(mainAboutFirst, {
      x: 200,
      duration: 3

      // scrollTrigger: {
      //   trigger: mainAboutFirst, // make .panel2 the trigger
      //   start: "10% bottom" // 10% of .panel2 enters the bottom of the viewport
      //   // Whatever other ScrollTrigger vars you need here
      // }
    });
  }, []);
  return (
    <section className={styles["main-about"]}>
      <div className={styles["main-about-first"]}>
        <p ref={mainAboutFirst}>
          <span>Helping</span>
          <span>brands</span>
          <span>to</span>
          <span>stand</span>
          <span>out</span>
          <span>in</span>
          <span>the</span>
          <span>digital</span>
          <span>era.</span>
          <span>Together</span>
          <span>we</span>
          <span>will</span>
          <span>set</span>
          <span>the</span>
          <span>new</span>
          <span>status</span>
          <span>quo.</span>
          <span>No</span>
          <span>nonsense</span>
          <span>always</span>
          <span>on</span>
          <span>cutting</span>
          <span>edge</span>
        </p>
      </div>
      <div className={styles["main-about-second"]}>
        <p>
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </p>
        <BallElasticAnimComp styles={styles} title="About" />
      </div>
    </section>
  );
};

export default AboutHome;
