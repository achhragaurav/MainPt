import React from 'react'
import styles from "../../styles/About/AboutHome.module.css"
import BallElasticAnimComp from '../AnimationComp/BallElasticAnimComp'
const AboutHome = () => {
  return (
    <section className={styles["main-about"]}>
    <div className={styles["main-about-first"]}>
      <p><span>Helping</span>
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
      <p>The combination of my passion for design, code & interaction 
        positions me in a unique place in the web design world.</p>
        <BallElasticAnimComp styles={styles} title="About"/>
    </div>
    </section>
  )
}

export default AboutHome