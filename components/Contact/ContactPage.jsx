import React from 'react'
import classes from "../../styles/Contact/ContactPageMain.module.css";

const ContactPage = () => {
  return (
      <section className={classes["contact-main"]}>
          <div className={classes["contact-main-container"]}>
        <div className={classes["contact-heading"]}>
          <div className={classes["contact-heading-content"]}>
            <h1>Let&apos;s start a</h1>
          <h1>project together</h1>
          </div>
          <div className={classes["contact-heading-image"]}>
            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
              </div>
        <div className={classes["contact-details"]}>
          
          <div className={classes["contact-form"]}>
            <form action="">
              <div className={classes["form-part"]}>
                <span></span>
                <div className={classes["form-part-1"]}>
                  <p>01</p>
                  <label htmlFor="">What is your name?</label>
                </div>
                <input type="text" placeholder='John Doe'/>
              </div>
              <div className={classes["form-part"]}>
                <span></span>
                <div className={classes["form-part-2"]}>
                  <p>02</p>
                  <label htmlFor="">What&apos;s your email?</label>
                </div>
                <input type="text" placeholder='abc@gmail.com'/>
              </div>
              <div className={classes["form-part"]}>
                <span></span>
                <div className={classes["form-part-3"]}>
                  <p>03</p>
                  <label htmlFor="">What&apos;s the name of your organization?</label>
                </div>
                <input type="text" placeholder='John & Doe'/>
              </div>
              <div className={classes["form-part"]}>
                <span></span>
                <div className={classes["form-part-4"]}>
                  <p>04</p>
                  <label htmlFor="">What services are you looking for?</label>
                </div>
                <input type="text" placeholder='Web Design, Web Development ...'/>
              </div>
              <div className={classes["form-part"]}>
                <span></span>
                <div className={classes["form-part-5"]}>
                  <p>05</p>
                  <label htmlFor="">Your message</label>
                </div>
                <textarea  type="text" placeholder='Hello Gaurav can you help me with ...'/>
              </div>
              <div className={classes["form-button"]}>
                <span></span>
                <button>Send it!</button>
              </div>
            </form>
          </div>
          <div className={classes["contact-details-socials"]}>

            <div className={classes["contact-details-holder"]}>
              <p>CONTACT DETAILS</p>
              <h3>achhragaurav@gmail.com</h3>
              <h3>+91 8468062832</h3>
              </div>
            <div className={classes["bussiness-details"]}>
              <p>BUSSINESS DETAILS</p>
              <h3>Location : India</h3>
            </div>
            <div className={classes["socials-holder"]}>
              <p>SOCIALS</p>
              <h3>Awwwards</h3>
              <h3>Instagram</h3>
              <h3>Dribble</h3>
              <h3>Linkden</h3>
            </div>
          </div>
              </div>
          </div>
    </section>
  )
}

export default ContactPage