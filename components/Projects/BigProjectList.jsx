import {gsap} from 'gsap';
import React,{useEffect, useRef,useState} from 'react';
import classes from "./BigProject.module.css"
import BallElasticAnimComp from "../AnimationComp/BallElasticAnimComp"
import { projects } from './WorkProjects';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const BigProjectList = () => {
  const animProjectHover = (e) => {
    gsap.to(e.target.closest("li"), {
      transform: `scale(1.03)`,
     
    })
    console.log(e.target.nextElementSibling);
    gsap.to(e.target.closest("li"), {
      boxShadow:`2px 3px 36px -9px rgba(0,0,0,0.75)`,
     
    })
    // gsap.to(e.target.closest("li"), {
    //   transform:`scale(1.1)`
    // })
  }
  const animProjectHoverRet = (e) => {
    gsap.to(e.target.closest("li"), {
      transform: `scale(1)`,
      boxShadow: `0px 0px 0px 0px rgba(0,0,0,0.0)`,
      ease:"power0in"
    })

    // gsap.to(e.target.closest("li"), {
    //   transform:`scale(1.1)`
    // })
  }
  const containerRef = useRef(null);
  const containerOne = useRef(null);
  const containerTwo = useRef(null);
  const containerThree = useRef(null);
    useEffect(() => {
 
      gsap.fromTo(containerOne.current, {
        x: 50,
        opacity:0,
          ease: "Power2.out"
        },{scrollTrigger: {
          trigger: containerRef.current,
        },
            duration:1,
            x: 0,
            opacity:1,
            ease: "Power2.out"
      });
      

 gsap.fromTo(containerTwo.current, {
        x: 50,
        opacity:0,
          ease: "Power2.out"
        },{scrollTrigger: {
          trigger: containerRef.current,
        },
            duration:1,
            x: 0,
   opacity: 1,
            delay:.5,
            
            ease: "Power2.out"
 });
      
      
       gsap.fromTo(containerThree.current, {
        x: 50,
        opacity:0,
          ease: "Power2.out"
        },{scrollTrigger: {
          trigger: containerRef.current,
        },
            duration:1,
         x: 0,
            delay:1,
            opacity:1,
            ease: "Power2.out"
          });

          },[])
        
        return <section  className={classes["big-project"]}>
    <p ref={containerRef}>Recent Work</p>
    <ul>
      {projects.slice(0,3).map((item,index) => {
        return <li ref={
          index === 1 ? containerOne : index === 2 ? containerTwo : containerThree
        } key={index} onMouseOverCapture={(e) => {
          animProjectHover(e)
      }}
      
      onMouseOut={(e) => {
        animProjectHoverRet(e)
      }}
      >
         <a rel="noreferrer" target="_blank" href={`${item.link}`}>
           <img src={`${item.img}`} alt="" />
        <h1>{item.heading}</h1>
        <span></span>
        <div className={classes["cat"]}>
           <p>{item.cat}</p>
          <p>{item.year}</p>
        </div>
        </a>
      </li>
     })}
      
    </ul>
    <button ><BallElasticAnimComp link="/work" centerTwoStat={true} styles={classes} title="More Work" /></button>
    </section>
}

export default BigProjectList;
