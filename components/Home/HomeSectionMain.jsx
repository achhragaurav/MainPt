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
    const letterTen = useRef(null)
    const letterEleven = useRef(null)
    const letterTwelve = useRef(null)
    const homeSectionMainC = useRef(null)

//     const fontRandomiser = () => {
//         const randomNumber = Math.floor(Math.random() * 13);
//         const obj = {
//             1: `'Bellota', cursive;`,
//          2 : `'Comfortaa', cursive;`,
//          3 : `'Forum', cursive;`,
//          4 : `'Libre Barcode 39 Text', cursive;`,
//          5 : `'Londrina Outline', cursive;`,
//          6 : `'Megrim', cursive;`,
//          7 : `'Monofett', cursive;`,
//          8 : `'Monoton', cursive;`,
//          9 : `'Poiret One', cursive;`,
//          10 : `'Press Start 2P', cursive;`,
//          11 : `'Righteous', cursive;`,
//          12 : `'Uncial Antiqua', cursive;`,
//          13 : `'Zilla Slab Highlight', cursive;`}
//         const statement = obj[randomNumber];
//       return statement
//     }
//     const fontStyle = {
//     fontFamily: `${fontRandomiser()} !important`
//     }
//     console.log(fontStyle);
//     useEffect(() => {
//  fontRandomiser()

// },[])
const lockScroll = (lock) =>{
    if(lock){

     return document.body.style.overflow = "hidden";
    }
    document.body.style.overflow = "scroll";
  }

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
            stagger: .1,
            onStart: () => {
                lockScroll(true);
            }
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
            letterSeven.current,
            letterEight.current,
            letterNine.current,
            letterTen.current,
            letterEleven.current,
            letterTwelve.current,
        ], {
            y: -200,
            delay: .5,
                  stagger: .1,
                  onComplete: () => {
                      gsap.to(homeSectionMainC.current, {
                          backgroundColor: "black",
                          color:"white"
                          
                      })
                lockScroll(false)
                      
            }
        })
        }
    },[gaurav])
  return (
      <section className={styles["home-section-main"]} ref={homeSectionMainC}>
              {portfolio && 
          <div className={styles["holder"]}>
              <p  ref={letterOne}>P</p>
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
              gaurav && <div className={styles["holder-container"]}>
              <div className={styles["holder"]}>
                  <p ref={letterOne}>G</p>
              <p ref={letterTwo}>A</p>
              <p ref={letterThree}>U</p>
              <p ref={letterFour}>R</p>
              <p ref={letterFive}>A</p>
                      <p ref={letterSix}>V</p>
                  </div>
                  <div className={styles["holder"]}>
                  <p ref={letterSeven}>A</p>
              <p ref={letterEight}>C</p>
              <p ref={letterNine}>H</p>
              <p ref={letterTen}>H</p>
              <p ref={letterEleven}>R</p>
                      <p ref={letterTwelve}>A</p>
                 </div>
              </div>
              }
    </section>
  )
}

export default HomeSectionMain