import React from 'react'
import styles from "../../styles/Contact/ContactPage.module.css"
import BallElasticAnimComp from '../AnimationComp/BallElasticAnimComp'
import {BsArrowDown} from "react-icons/bs"
const ContactHome = () => {
    const getTime = () =>{
        let date = new Date();  
        let options = {  
            // weekday: "long", year: "numeric", month: "short",  
            // day: "numeric",
             hour: "2-digit", minute: "2-digit"  
        };  

        return date.toLocaleTimeString("en-us", options); 
       
    }
    
  return (
    <section
    className={styles["contact"]}
    >
        <div className={styles["contact-first"]}>
            <div className={styles["first-one"]}>
                <div className={styles["first-one-left"]}>
                      <div className={styles["first-one-leftHeading"]}>
                          <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                          <h1> Let's work</h1>
                    </div>
                    <h1>together</h1>
                </div>
                <div className={styles["first-one-right"]}>
                    <span><BsArrowDown /></span>
                </div>
            </div>
            <div className={styles["first-two"]}>
                <span className={styles['line2']}></span>
                <BallElasticAnimComp styles={styles} title="Get in touch"/>
            </div>
            <div className={styles["first-three"]}>
                <div className={styles["three-buttons"]}>
                      <button>
                <BallElasticAnimComp styles={styles} title="achhragaurav@gmail.com" className={`containerButton`}/>
                          </button>
                      <button>
                <BallElasticAnimComp styles={styles} title="+91 8468062832" className={`containerButton`}/>
                          </button>
                </div>
            </div>
        </div>
        <div className={styles["contact-second"]}>
            <div className={styles["contact-sec-container"]}>
                <div className={styles["vlt"]}>
                <div className={styles["version"]}>
                    <span>VERSION</span>
                    <p>2022 &#169; Edition</p>
                </div>
                <div className={styles["local-time"]}>
                <span>LOCAL TIME</span>
                    <p>{getTime()} IST</p>
                </div>
                </div>
                <div className={styles["socials"]}>
                    <span>Awwards</span>
                    <span>Instagram</span>
                    <span>Dribble</span>
                    <span>Linkden</span>
                </div>
            </div>

        </div>

    </section>
  )
}

export default ContactHome