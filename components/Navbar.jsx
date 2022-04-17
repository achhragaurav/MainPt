import React,{useRef,useState} from 'react';
import Link from 'next/link'
import styles from "../styles/Navbar.module.css"
import BallElasticAnimComp from './AnimationComp/BallElasticAnimComp';
import {gsap} from "gsap"
const Navbar = ({color}) => {
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className={styles["navbar"]}>
      <div style={{color:`${color ? color : "white"}`}} className={styles["logo"]}><Link  href="/" ><p>@ Code By Gaurav</p></Link></div>
      <ul className={styles["first-nav"]} style={{color:`${color ? color : "white"}`}}>
          <li >
              <Link  href="/about" >About</Link>
              </li>
          <li ><Link  href="/contact">Contact</Link></li>
          <li ><Link  href="/work">Work</Link></li>
          </ul>
          <div className={styles["second-nav"]}>
            <div className={styles["menu-btn"]} 
            onClick={() =>{
              if(menuOpen){
                gsap.to(menuRef.current,{x:`100vh`});
                gsap.to(menuRef.current,{borderRadius: `50%`,})
                setMenuOpen(false)
              }
              else{
                gsap.to(menuRef.current,{x:`50vh`,})
                gsap.to(menuRef.current,{borderRadius: `0`})
                setMenuOpen(true)

              }
            }}
            >
              <span></span>
              <span></span>
            </div>
            <div className={styles["second-menu-container"]} ref={menuRef}>
              <ul>
              <li >
              <Link  href="/" >Home</Link>
              </li>
              <li >
              <Link  href="/about" >About</Link>
              </li>
              <li >
                <Link  href="/contact">Contact</Link>
              </li>
              <li >
                <Link  href="/work">Work</Link>
              </li>
              </ul>
            </div>
          </div>
    </nav>
  );
}

export default Navbar;
