import React from 'react'
import classes from "../../styles/Work/WorkPageLayout.module.css";
import BallElasticAnimComp from '../AnimationComp/BallElasticAnimComp';
import {gsap} from "gsap"

export const data = [
  {
    heading: "Ecommerce Website",
    img: "https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cat: "Interation and shopping",
    year:"2022"
  },
{
    heading: "Netflix Clone",
    img: "https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cat: "Interation and shopping",
    year:"2022"
  },
  {
    heading: "Airbnb Clone",
    img: "https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cat: "Interation and shopping",
    year:"2022"
  },
  {
    heading: "Ecommerce Website",
    img: "https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cat: "Interation and shopping",
    year:"2022"
  },
  {
    heading: "Ecommerce Website",
    img: "https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cat: "Interation and shopping",
    year:"2022"
  },
  {
    heading: "Ecommerce Website",
    img: "https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cat: "Interation and shopping",
    year:"2022"
  },
]

const WorkPageLayout = () => {
  const animProjectHover = (e) => {
     
    console.log(e.target.closest("li"));
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
  return (
      <section className={classes["work-page-layout"]}>
          <div className={classes["work-page-container"]}>
              <div className={classes["work-page-heading"]}>
                  <h1>Creating next level</h1>
                  <h1>digital products</h1>
              </div>
              <div className={classes["work-page-buttons"]}>
                  <div className={classes["buttons-left"]}>
                      <button className={classes["design-button"]}>
                          <BallElasticAnimComp centerTwoStat={true} title="Development" styles={classes}/>
                      </button>
                      
          </div>
          <div className={classes["button-middle"]}>
            <button className={classes["dev-button"]}>
                          <BallElasticAnimComp centerTwoStat={true} title="Design" styles={classes}/>
                      </button>
          </div>
          <div className={classes["buttons-right"]}>
            <button className={classes["dev-button"]}>
                      <BallElasticAnimComp centerTwoStat={true} title="All" styles={classes} className={`containerTwo`}/>
                      </button>
                 
          </div>
              </div>
              <div className={classes["work-page-projects"]}>
                  <ul>
            {data.map((item,index) => {
              return (<li key={index} onMouseEnter={(e) =>{animProjectHover(e)}}
              onMouseLeave={(e) =>{animProjectHoverRet(e)}}
              >
        <img src={`${item.img}`} alt="" />
        <h1>{item.heading}</h1>
        <span></span>
        <div className={classes["cat"]}>
          <p>{item.cat}</p>
          <p>{item.year}</p>
        </div>
      </li>)
      })}
      
    </ul>
              </div>
          </div>
    </section >
  )
}

export default WorkPageLayout