import React from 'react'
import classes from "../../styles/About/AboutPageLayout.module.css";

const AboutPageLayout = () => {
  return (
    <section className={classes["about-page-layout"]}>
      <div className={classes["about-page-container"]}>
        <div className={classes["hero-heading"]}>
        <h1>Helping brands thrive
          in the digital world</h1>
      </div>
      <div className={classes["earth-sec"]}>
        <span></span>
        <div className={classes["earth"]}></div>
      </div>
      <div className={classes["desc-image"]}>
        <div className={classes["desc-content"]}>
          <p>I help companies from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.</p>
          <p>Always Exploring ...</p>
        </div>
        <div className={classes["desc-image-img"]}>
          <img src="https://images.pexels.com/photos/10931575/pexels-photo-10931575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
        </div>
      </div>
      <div className={classes["packages"]}>
        <div className={classes["packages-heading"]}>
          <h1>I can help you with ...</h1>
        </div>
        <div className={classes["packages-content"]}>
          <div className={classes["pc-card"]}>
            <p>01</p>
            <span></span>
            <h1>Design</h1>
            <p>With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs.
              Solid company branding is the foundation of any succesful website.</p>
          </div>
           <div className={classes["pc-card"]}>
            <p>01</p>
            <span></span>
            <h1>Development</h1>
            <p>I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations,
                transitions and interaction. F this
                or content management I use Kirby CMS.</p>
          </div>
           <div className={classes["pc-card"]}>
            <p>01</p>
            <span></span>
            <h1>* The full package</h1>
            <p>A complete website from concept to implementation,
              that's what makes me stand out. My great sense for design and my
                development skills enable me to create kick-ass projects.
               
              </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default AboutPageLayout