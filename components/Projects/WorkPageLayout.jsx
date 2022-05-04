import React from 'react'
import classes from "../../styles/Work/WorkPageLayout.module.css";
import BallElasticAnimComp from '../AnimationComp/BallElasticAnimComp';

const WorkPageLayout = () => {
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
                      <button className={classes["dev-button"]}>
                          <BallElasticAnimComp centerTwoStat={true} title="Design" styles={classes}/>
                      </button>
                  </div>
                  <div className={classes["buttons-right"]}>
                      <BallElasticAnimComp centerTwoStat={true} title="All" styles={classes} className={`containerTwo`}/>
                  </div>
              </div>
              <div className={classes["work-page-projects"]}>
                  <ul>
      <li>
        <img src="https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <h1>Ecommerce Website</h1>
        <span></span>
        <div className={classes["cat"]}>
          <p>Interation and shopping</p>
          <p>2021</p>
        </div>
      </li>
      <li>
        <img src="https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <h1>Netflix Clone</h1>
        <span></span>
        <div className={classes["cat"]}>
          <p>Details and reviews</p>
          <p>2022</p>
        </div>
      </li>
      <li>
        <img src="https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <h1>Airbnb Clone</h1>
        <span></span>
        <div className={classes["cat"]}>
          <p>Browse and Book</p>
          <p>2022</p>
        </div>
                      </li>
                      <li>
        <img src="https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <h1>Airbnb Clone</h1>
        <span></span>
        <div className={classes["cat"]}>
          <p>Browse and Book</p>
          <p>2022</p>
        </div>
                      </li>
                      <li>
        <img src="https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <h1>Airbnb Clone</h1>
        <span></span>
        <div className={classes["cat"]}>
          <p>Browse and Book</p>
          <p>2022</p>
        </div>
                      </li>
                      <li>
        <img src="https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <h1>Airbnb Clone</h1>
        <span></span>
        <div className={classes["cat"]}>
          <p>Browse and Book</p>
          <p>2022</p>
        </div>
      </li>
    </ul>
              </div>
          </div>
    </section >
  )
}

export default WorkPageLayout