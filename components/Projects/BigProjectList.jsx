import {gsap} from 'gsap';
import React,{useRef,useState} from 'react';
import classes from "./BigProject.module.css"

const BigProjectList = () => {
  return <section className={classes["big-project"]}>
    <p>Recent Work</p>
    <ul>
      <li>
        <img src="https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <h1>Chainn</h1>
        <span></span>
        <div className={classes["cat"]}>
          <p>Interation and devlopment</p>
          <p>2022</p>
        </div>
      </li>
      <li>
        <img src="https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <h1>Chainn</h1>
        <span></span>
        <div className={classes["cat"]}>
          <p>Interation and devlopment</p>
          <p>2022</p>
        </div>
      </li>
      <li>
        <img src="https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <h1>Chainn</h1>
        <span></span>
        <div className={classes["cat"]}>
          <p>Interation and devlopment</p>
          <p>2022</p>
        </div>
      </li>
    </ul>
    <button>More Work</button>
    </section>
}

export default BigProjectList;
