import { gsap } from "gsap"
import React from 'react'
import classes from "../../styles/About/AboutPageLayout.module.css";
import { useRef, useState, useEffect } from "react"

const AboutPageLayout = () => {
  const mainAboutFirst = useRef(null)
  useEffect(() => {
    let delayTimer = `${0.03}`;
    console.log(mainAboutFirst.current.children[0]);
    gsap.fromTo(mainAboutFirst.current, {
      x: 50,
      opacity:0
    },{x:0,opacity: 1})
   
  },[])
  const para1 = `With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs.
              Solid company branding is the foundation of any succesful website.`;
  const para2 = `I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations,
                transitions and interaction. F this
                or content management I use Kirby CMS.`;
  const para3=`A complete website from concept to implementation,
              that's what makes me stand out. My great sense for design and my
                development skills enable me to create kick-ass projects.`
  return (
    <section className={classes["about-page-layout"]}>
      <div className={classes["about-page-container"]}>
        <div className={classes["hero-heading"]}>
          <h1 ref={mainAboutFirst}><span>Helping</span>
            <span> brands </span>
            <span>thrive </span>
            <span>in </span>
            <span>the </span>
            <span>digital </span>
            <span>world</span>
          </h1>
      </div>
      <div className={classes["earth-sec"]}>
        <span></span>
          <div className={classes["earth"]}>
            <div className={classes["globe"]}>
                  <div className={classes["overlay"]}></div>
                  <div className={classes["globe"]}>
                     <div className={classes["globe-wrap"]}>
                        <div className={classes["circle"]}></div>
                        <div className={classes["circle"]}></div>
                        <div className={classes["circle"]}></div>
                        <div className={classes["circle-hor"]}></div>
                        <div className={classes["circle-hor-middle"]}></div>
                     </div>
                  </div>
                  </div>
        </div>
      </div>
      <div className={classes["desc-image"]}>
        <div className={classes["desc-content"]}>
          <p> This world I help companies from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.</p>
          <p>Always Exploring ...</p>
        </div>
        <div className={classes["desc-image-img"]}>
          <img src="https://images.pexels.com/photos/10931575/pexels-photo-10931575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
        </div>
      </div>
      <div className={classes["packages"]}>
        <div className={classes["packages-heading"]}>
          <h1>I can help you with ...</h1>
        </div>
        <div className={classes["packages-content"]}>
          <div className={classes["pc-card"]}>
            <p>01</p>
            <span></span>
            <h1>Design</h1>
              <p>{ para1}</p>
          </div>
           <div className={classes["pc-card"]}>
            <p>01</p>
            <span></span>
            <h1>Development</h1>
              <p>{ para2}</p>
          </div>
           <div className={classes["pc-card"]}>
            <p>01</p>
            <span></span>
            <h1>* The full package</h1>
            <p>{para3}
              </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default AboutPageLayout