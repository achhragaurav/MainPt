import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

import BallElasticAnimComp from "./AnimationComp/BallElasticAnimComp";
import { gsap } from "gsap";
const Navbar = ({ colorFirstNav }) => {
  const spanElementHouse = <img width="100px" src="https://i.ibb.co/qD7Yz9m/house.png" alt="" />
  const spanElementAbout = <img width="100px" src="https://i.ibb.co/D4M8gwX/information.png" alt="" />
  const spanElementWork = <img width="100px" src="https://i.ibb.co/jRf3q23/work-in-progress.png" alt="" />
  const spanElementContact = <img width="100px" src="https://i.ibb.co/9Hs7qKp/mail.png" alt="" />

  const colorChange = (e, back) => {
    if (back) {
      return gsap.to(menuUl.current,{backgroundColor:"#1c1d10"})
    }
    if (e.target.textContent === "Home"
    || (e.target.closest("h5") && e.target.closest("h5").textContent === "Home")) {
      return gsap.to(menuUl.current,{backgroundColor:"#160000"})
    }
    if (e.target.textContent === "About"
    || (e.target.closest("h5") && e.target.closest("h5").textContent === "About")) {
      return gsap.to(menuUl.current,{backgroundColor:"#00263D"})
    }
    if (e.target.textContent === "Work"
      || (e.target.closest("h5") && e.target.closest("h5").textContent === "Work")) {
      return gsap.to(menuUl.current,{backgroundColor:"#3D3300"})
    }
    if (e.target.textContent === "Contact"
      || (e.target.closest("h5") && e.target.closest("h5").textContent === "Contact")) {
      return gsap.to(menuUl.current,{backgroundColor:"#3C0206"})
    }
    
  }
    const lockScroll = (lock) =>{
    if(lock){

     return document.body.style.overflow = "hidden";
    }
    document.body.style.overflow = "scroll";
  }
  const menuUl = useRef(null);
  const roundRef = useRef(null);
  const logo = useRef(null);
  const secondNavMenuBtn = useRef(null);
  const secondNav = useRef(null);
  const [navState, setNavstate] = useState(false);

  let oldValue = 0;
  let newValue = 0;

  const navBack = (e) => {

    if (e.target.classList[0] === styles["second-nav"]) {
      setNavstate(false)
      navHandler()
    }
        }
  useEffect(() => {
    if (navState) {
      document.addEventListener("click",navBack) 
    }
    return () => {
      document.removeEventListener("click", navBack)
    }
  }, [navState])
  useEffect(() => {
    document.querySelector("ul").style.color=`${colorFirstNav}`
  },[])
  const navFunction = e => {
    newValue = window.pageYOffset;
    var scrollTop = document.documentElement.scrollTop;
    if (oldValue < newValue) {
      gsap.to(secondNavMenuBtn.current, {
        ease: "power2.out",
        transform: `scale(1)`,
        overflow: "visible",
        delay: 0.2
      });
      // gsap.to(secondNav.current, { display: "flex" });
      // TEMP
    } else if (oldValue > newValue) {
      if (scrollTop < 500 && window.innerWidth > 1200) {
        gsap.to(secondNavMenuBtn.current, {
          overflow: "hidden",
          transform: `scale(0)`,
          delay: 0,
          ease: "power2.in"
        });
        // gsap.to(secondNav.current, { display: "none" });
      // TEMP

      }
    }
    oldValue = newValue;
  };
  const navHandler = () => {
    if (navState) {
      gsap.to(menuUl.current, { x: 0 });
      gsap.to(roundRef.current, { width: "120px" });
      gsap.to(secondNav.current, {zIndex: 0, background: "transparent" });

      gsap.to(secondNavMenuBtn.current.childNodes[0].childNodes[3], {
        y: "100%",
        duration: 1
      });
      gsap.to(secondNavMenuBtn.current.childNodes[0].childNodes[0], {
        x: `0px`
      });
      gsap.to(
        secondNavMenuBtn.current.childNodes[0].childNodes[0].childNodes[0],
        {
          transform: `rotate(0deg) translateX(0px)`
        }
      );
      gsap.to(
        secondNavMenuBtn.current.childNodes[0].childNodes[0].childNodes[1],
        {
          transform: `rotate(0deg) translateX(0px)`
        }
      );
      setNavstate(false);
      lockScroll(false);
    } else {
      if (window.innerWidth < 900) {
        gsap.to(menuUl.current, { x: -500 });
      } else {
        gsap.to(menuUl.current, { x: -800 });
      }
      gsap.to(roundRef.current, { width: "0px" });
      gsap.to(secondNav.current, { zIndex: 500, background: "#00000046" });
      gsap.to(secondNavMenuBtn.current.childNodes[0].childNodes[3], {
        y: -23
      });
      gsap.to(secondNavMenuBtn.current.childNodes[0].childNodes[0], {
        x: `-5px`
      });
      gsap.to(
        secondNavMenuBtn.current.childNodes[0].childNodes[0].childNodes[0],
        {
          transform: `rotate(45deg) translate(5px, 0px)`
        }
      );
      gsap.to(
        secondNavMenuBtn.current.childNodes[0].childNodes[0].childNodes[1],
        {
          transform: `rotate(-45deg) translate(5px, 0px)`
        }
      );
      setNavstate(true);
      lockScroll(true);
    }
  };
  const navPageChange = () => {
    setNavstate(false)
    navHandler()
    lockScroll(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", navFunction);
    return () => {
      window.removeEventListener("scroll", navFunction);
    };
  }, []);
  return (
    <nav className={styles["navbar"]}>
      <div
        className={styles["menu-btn"]}
        onClick={navHandler}
        ref={secondNavMenuBtn}
        onMouseMove={() => {
          gsap.to(secondNav.current, {
            display:"flex"
          })
        }}
         onMouseLeave={() => {
           if (!navState) {
            gsap.to(secondNav.current, {
            display:"none"
          })
          }
        }}
      >
        <BallElasticAnimComp styles={styles} navState={navState} >
          <div className={styles["menuLineWrapper"]}>
            <div className={styles["menuLine"]}></div>
            <div className={styles["menuLine"]}></div>
          </div>
        </BallElasticAnimComp>
      </div>
      <div className={styles["first-nav"]}>
        <div className={styles["logo"]}>
          <p ref={logo} style={{color:`${colorFirstNav}`}}>
            <Link href="/">@Code by Gaurav</Link>
          </p>
        </div>
        <div className={styles["list-container"]}>
          <ul >
            <Link href="/about">
              <li>
                <BallElasticAnimComp
                  centerTwoStat={true}
                  spanAnimDot={true}
                  styles={{
                    ...styles,
                  }}
                  title={"About"}
                  className={"containerLink"}
                />
              </li>
            </Link>
            <Link href="/work">
              <li>
                <BallElasticAnimComp
                  centerTwoStat={true}
                  
                  spanAnimDot={true}
                  styles={{
                    ...styles
                  }}
                  title={"Work"}
                  className={"containerLink"}
                />
              </li>
            </Link>
            <Link href="/contact">
              <li>
                <BallElasticAnimComp
                  centerTwoStat={true}
                  
                  spanAnimDot={true}
                  styles={{
                    ...styles
                  }}
                  title={"Contact"}
                  className={"containerLink"}
                />
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className={styles["second-nav"]} ref={secondNav}>
        <div className={styles["list-container-two"]} ref={menuUl}>
          <div className={styles["fixed-nav-rounded-div"]}>
            <div className={styles["rounded-div-wrapper"]} ref={roundRef}>
              <div className={styles["rounded-div"]}></div>
            </div>
          </div>
          <div className={styles["second-main-holder"]}>
            <div className={styles["navigation-heading"]}>
              <p>NAVIGATION</p>
              <span></span>
            </div>
            <ul>
              <Link href="/">
                <li onMouseLeave={(e) => {
                  colorChange(e,true)
                }} onMouseMove={colorChange} onClick={navPageChange}> <BallElasticAnimComp
                  centerTwoStat={true}
                  spanAnimDot={true}
                  styles={{
                    ...styles
                    }}
                    // Span element
                    spanElement={spanElementHouse}
                  title={"Home"}
                  className={"containerLinkBig"}
                /></li>
              </Link>
              <Link href="/about">
                <li onMouseLeave={(e) => {
                  colorChange(e,true)
                }} onMouseMove={colorChange} onClick={navPageChange}><BallElasticAnimComp
                  centerTwoStat={true}
                  spanAnimDot={true}
                  styles={{
                    ...styles
                    }}
                     spanElement={spanElementAbout}
                  title={"About"}
                  className={"containerLinkBig"}
                /></li>
              </Link>
              <Link href="/work">
                <li onMouseLeave={(e) => {
                  colorChange(e,true)
                }} onMouseMove={colorChange} onClick={navPageChange}><BallElasticAnimComp
                    centerTwoStat={true}
                     spanElement={spanElementWork}
                    
                  spanAnimDot={true}
                  styles={{
                    ...styles
                  }}
                  title={"Work"}
                  className={"containerLinkBig"}
                /></li>
              </Link>
              <Link href="/contact">
                <li onMouseLeave={(e) => {
                  colorChange(e,true)
                }} onMouseMove={colorChange} onClick={navPageChange}><BallElasticAnimComp
                  centerTwoStat={true}
                  spanAnimDot={true}
                  styles={{
                    ...styles
                    }}
                     spanElement={spanElementContact}
                    
                  title={"Contact"}
                  className={"containerLinkBig"}
                /></li>
              </Link>
            </ul>
            <div className={styles["nav-socials"]}>
              <p>SOCIALS</p>
              <ol className={styles["socialInner"]}>
                <li><a href="https://github.com/achhragaurav">GitHub</a></li>
                    <li><a href="https://www.instagram.com/achhragaurav/">Instagram</a> </li>
                    <li><a href="https://dribbble.com/gaurav008">Dribble</a> </li>
                    <li><a href="https://www.linkedin.com/in/gaurav-ashra-aaa596129/">Linkden</a> </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
