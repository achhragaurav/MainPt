import {gsap} from 'gsap';
import React, { useEffect } from 'react'
import { useState,useRef } from 'react';
import classes from "../../styles/Contact/ContactPageMain.module.css";
import BallElasticAnimComp from '../AnimationComp/BallElasticAnimComp';

const ContactPage = () => {
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const servicesRef = useRef(null)
  const organisationRef = useRef(null)
  const messageRef = useRef(null)

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    services: "",
    organisation: "",
    message:""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({
    name: nameRef.current.value,
    email: emailRef.current.value,
    services: servicesRef.current.value,
    organisation: organisationRef.current.value,
    message:messageRef.current.value
    })
    if (formState.email.length < 1 ||
      formState.name.length < 1 ||
      formState.services.length < 1 ||
      formState.organisation.length < 1 ||
      formState.email.message < 1
       ) {
        alert("Please enter valid values")
    }
    else {
      fetch('/api/form', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({...formState}),
      }).then((res) => {
       return res.json()
      }).then((resJson) => {
        console.log(resJson);
  })
    }
  }

  const mainContactFirst = useRef(null);
    useEffect(() => {
    gsap.fromTo(mainContactFirst.current, {
      x: 50,
      opacity: 0,
    }, {
      x: 0, opacity: 1,
      delay: .7
})
   
  },[])

  return (
      <section className={classes["contact-main"]}>
          <div className={classes["contact-main-container"]}>
        <div className={classes["contact-heading"]}>
          <div ref={mainContactFirst} className={classes["contact-heading-content"]}>
            <h1>Let&apos;s start a</h1>
          <h1>project together</h1>
          </div>
          <div className={classes["contact-heading-image"]}>
            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
              </div>
        <div className={classes["contact-details"]}>
          
          <div className={classes["contact-form"]}>
            <form action="" onSubmit={handleSubmit}>
              <div className={classes["form-part"]}>
                <span></span>
                <div className={classes["form-part-1"]}>
                  <p>01</p>
                  <label htmlFor="">What is your name?</label>
                </div>
                <input ref={nameRef} type="text" placeholder='John Doe'/>
              </div>
              <div className={classes["form-part"]}>
                <span></span>
                <div className={classes["form-part-2"]}>
                  <p>02</p>
                  <label htmlFor="">What&apos;s your email?</label>
                </div>
                <input ref={emailRef} type="text" placeholder='abc@gmail.com'/>
              </div>
              <div className={classes["form-part"]}>
                <span></span>
                <div className={classes["form-part-3"]}>
                  <p>03</p>
                  <label htmlFor="">What&apos;s the name of your organization?</label>
                </div>
                <input ref={organisationRef} type="text" placeholder='John & Doe'/>
              </div>
              <div className={classes["form-part"]}>
                <span></span>
                <div className={classes["form-part-4"]}>
                  <p>04</p>
                  <label htmlFor="">What services are you looking for?</label>
                </div>
                <input ref={servicesRef} type="text" placeholder='Web Design, Web Development ...'/>
              </div>
              <div className={classes["form-part"]}>
                <span></span>
                <div className={classes["form-part-5"]}>
                  <p>05</p>
                  <label htmlFor="">Your message</label>
                </div>
                <textarea ref={messageRef} type="text" placeholder='Hello Gaurav can you help me with ...'/>
              </div>
              <div className={classes["form-button"]}>
                <span className={classes["form-button-line"]}></span>
                <button> <BallElasticAnimComp styles={classes} title="Send it!"/></button>
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
              <h3><a href="https://github.com/achhragaurav">GitHub</a></h3>
                    <h3><a href="https://www.instagram.com/achhragaurav/">Instagram</a> </h3>
                    <h3><a href="https://dribbble.com/gaurav008">Dribble</a> </h3>
                    <h3><a href="https://www.linkedin.com/in/gaurav-ashra-aaa596129/">Linkden</a> </h3>
            </div>
          </div>
              </div>
          </div>
    </section>
  )
}

export default ContactPage