import React, { useEffect, useRef, useState } from 'react'
import styles from "../../styles/Home/HomeSectionMain.module.css";
import { gsap } from "gsap";
const HomeSectionMain = () => {
    const [portfolio, setPortfolio] = useState(true);
    const [gaurav, setGaurav] = useState(false);

    const letterOne = useRef(null)
    const letterTwo = useRef(null)
    const letterThree = useRef(null)
    const letterFour = useRef(null)
    const letterFive = useRef(null)
    const letterSix = useRef(null)
    const letterSeven = useRef(null)
    const letterEight = useRef(null)
    const letterNine = useRef(null)


    useEffect(() => {
        gsap.to([
            letterFour.current,
            letterOne.current,
            letterNine.current,
            letterThree.current,
            letterTwo.current,
            letterFive.current,
            letterSeven.current,
            letterSix.current,
            letterEight.current,
        ], {
            y: -165,
            delay: 3,
            stagger: .1
        })
         gsap.to([
            letterFour.current,
            letterOne.current,
            letterNine.current,
            letterThree.current,
            letterTwo.current,
            letterFive.current,
            letterSeven.current,
            letterSix.current,
            letterEight.current,
        ], {
            y: -500,
            delay: 5,
             stagger: .1,
             onComplete: () => {
                 setPortfolio(false)
                 setGaurav(true)
            }
        })
    },[]);
    useEffect(() => {
        if (gaurav) {
              gsap.to([
            letterFour.current,
            letterOne.current,
            letterThree.current,
            letterTwo.current,
            letterFive.current,
            letterSix.current,
        ], {
            y: -165,
            delay: 3,
            stagger: .1
        })
        }
    },[gaurav])
  return (
      <section className={styles["home-section-main"]}>
              {portfolio && 
          <div className={styles["holder"]}>
              <p ref={letterOne}>P</p>
              <p ref={letterTwo}>o</p>
              <p ref={letterThree}>R</p>
              <p ref={letterFour}>T</p>
              <p ref={letterFive}>F</p>
              <p ref={letterSix}>O</p>
              <p ref={letterSeven}>L</p>
              <p ref={letterEight}>I</p>
                  <p ref={letterNine}>o</p>
        </div>
                  }
              {
              gaurav && <div className={styles["holder"]}>
                  <p ref={letterOne}>G</p>
              <p ref={letterTwo}>A</p>
              <p ref={letterThree}>U</p>
              <p ref={letterFour}>R</p>
              <p ref={letterFive}>A</p>
                      <p ref={letterSix}>V</p>
                 </div>
              }
    </section>
  )
}

export default HomeSectionMain