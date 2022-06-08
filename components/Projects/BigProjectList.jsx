import {gsap} from 'gsap';
import React,{useRef,useState} from 'react';
import classes from "./BigProject.module.css"
import BallElasticAnimComp from "../AnimationComp/BallElasticAnimComp"
import { projects } from './WorkProjects';
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
  return <section className={classes["big-project"]}>
    <p>Recent Work</p>
    <ul>
      {projects.slice(0,3).map((item,index) => {
       return  <li key={index} onMouseOverCapture={(e) => {
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
    <button><BallElasticAnimComp link="/work" centerTwoStat={true} styles={classes} title="More Work" /></button>
    </section>
}

export default BigProjectList;
