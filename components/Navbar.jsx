import React,{useRef,useState,useEffect} from 'react';
import Link from 'next/link'
import styles from "../styles/Navbar.module.css"
import BallElasticAnimComp from './AnimationComp/BallElasticAnimComp';
import {gsap} from "gsap"
const Navbar = ({color,lockScroll}) => {
  const menuUl = useRef(null);
  const roundRef = useRef(null);
  const secondNavMenuBtn = useRef(null)

  const [navState, setNavstate] = useState(false);
  let oldValue = 0
  let newValue = 0
  const navFunction = (e) => {
      newValue = window.pageYOffset;
      if (oldValue < newValue) {
        console.log("Up",e);
        gsap.to(secondNavMenuBtn.current,{
          overflow: "hidden",
          transform:`scale(0)`,delay:.2})
      } else if (oldValue > newValue) {
        console.log("Down");
        
        gsap.to(secondNavMenuBtn.current,{transform:`scale(1)`,overflow: "visible",delay:.2})
      }
      oldValue = newValue;


    };
    const navHandler = () =>{
      if(navState){
        gsap.to(menuUl.current,{x:0})
          gsap.to(roundRef.current,{width: '120px',})
        setNavstate(false);
        lockScroll(false)
      }
      else{
        console.log(window.innerWidth);
       gsap.to(menuUl.current,{x:-500})
       gsap.to(roundRef.current,{width: '0px',})
        setNavstate(true)
        lockScroll(true)
      }

    }
  useEffect(() => {
    window.addEventListener("scroll",navFunction)
    return () => {
      window.removeEventListener("scroll",navFunction)
    };
  }, []);
  return (
    <nav className={styles['navbar']}>
        <div className={styles["menu-btn"]} onClick={navHandler} ref={secondNavMenuBtn}>
          <BallElasticAnimComp styles={styles} title="-"/>
        </div>
        <div className={styles["first-nav"]}>
        <div className={styles["logo"]}>
            <p>@Code by Gaurav</p>
        </div>
        <div className={styles["list-container"]}>
        <ul>
        <li>Work</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
        </div>
        </div>
        <div className={styles["second-nav"]} >
        <div className={styles["logo"]}>
            <p>@Code by Gaurav</p>
        </div>
        <div className={styles["list-container"]} ref={menuUl}>
        <div className={styles["fixed-nav-rounded-div"]}>
        <div className={styles["rounded-div-wrapper"]}ref={roundRef}>
                <div className={styles["rounded-div"]}></div>
              </div>
        </div>
        <ul>
        <li>Home</li>
        <li>Work</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
        </div>
        </div>
    </nav>
  );
}

export default Navbar;
