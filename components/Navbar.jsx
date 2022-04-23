import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import BallElasticAnimComp from "./AnimationComp/BallElasticAnimComp";
import { gsap } from "gsap";
const Navbar = ({ color, lockScroll }) => {
  const menuUl = useRef(null);
  const roundRef = useRef(null);
  const logo = useRef(null);
  const secondNavMenuBtn = useRef(null);
  const secondNav = useRef(null);
  const [navState, setNavstate] = useState(false);

  let oldValue = 0;
  let newValue = 0;
  const navFunction = e => {
    newValue = window.pageYOffset;
    var scrollTop = document.documentElement.scrollTop;
    if (oldValue < newValue) {
      console.log("Up", scrollTop);
      gsap.to(secondNavMenuBtn.current, {
        ease: "power2.out",
        transform: `scale(1)`,
        overflow: "visible",
        delay: 0.2
      });
      gsap.to(secondNav.current, { display: "flex" });
    } else if (oldValue > newValue) {
      console.log("Down", window.innerWidth, scrollTop);
      if (scrollTop < 500 && window.innerWidth > 1200) {
        gsap.to(secondNavMenuBtn.current, {
          overflow: "hidden",
          transform: `scale(0)`,
          delay: 0,
          ease: "power2.in"
        });
        gsap.to(secondNav.current, { display: "none" });
      }
    }
    oldValue = newValue;
  };
  const navHandler = () => {
    if (navState) {
      gsap.to(menuUl.current, { x: 0 });
      gsap.to(roundRef.current, { width: "120px" });
      gsap.to(secondNav.current, { zIndex: 0, background: "transparent" });

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
      console.log(window.innerWidth);
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
      >
        <BallElasticAnimComp styles={styles} navState={navState}>
          <div className={styles["menuLineWrapper"]}>
            <div className={styles["menuLine"]}></div>
            <div className={styles["menuLine"]}></div>
          </div>
        </BallElasticAnimComp>
      </div>
      <div className={styles["first-nav"]}>
        <div className={styles["logo"]}>
          <p ref={logo}>
            <Link href="/">@Code by Gaurav</Link>
          </p>
        </div>
        <div className={styles["list-container"]}>
          <ul>
            <Link href="/about">
              <li>
                <BallElasticAnimComp
                  styles={{
                    ...styles
                  }}
                  title={"About"}
                  className={"containerLink"}
                />
              </li>
            </Link>
            <Link href="/work">
              <li>
                <BallElasticAnimComp
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
                <li>Home</li>
              </Link>
              <Link href="/about">
                <li>About</li>
              </Link>
              <Link href="/work">
                <li>Work</li>
              </Link>
              <Link href="/contact">
                <li>Contact</li>
              </Link>
            </ul>
            <div className={styles["nav-socials"]}>
              <p>SOCIALS</p>
              <ol className={styles["socialInner"]}>
                <li>
                  <a href="">Awwards</a>
                </li>
                <li>
                  <a href="">Insta</a>
                </li>
                <li>
                  <a href="">Facebook</a>
                </li>
                <li>
                  <a href="">Linkden</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
