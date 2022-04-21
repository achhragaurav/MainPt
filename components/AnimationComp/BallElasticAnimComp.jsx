import React,{useRef} from 'react';
import {gsap} from "gsap";
const BallElasticAnimComp = ({children, styles,title}) => {
    const ballRef = useRef(null);
    const ballHeadingRef = useRef(null);

  return (
    <div className={styles["container"]} ref={ballRef}
    onMouseMove={(e) =>{
        let rect = ballRef.current.getBoundingClientRect();
        const center = (rect.right-rect.left)/2
        
        console.log(center);
        let x = e.clientX - rect.left; //x position within the element.
         let y = e.clientY - rect.top; //y position within the element.
        //  console.log(x,y);
         gsap.to(ballRef.current, {
           x:Math.floor(x-center),
           y:Math.floor(y-center),
         })
         gsap.to(ballHeadingRef.current, {
           x:Math.floor((x-center)/2),
           y:Math.floor((y-center)/2),
         })
       }}
       onMouseLeave={(e) =>{
         console.log(e.clientX);
         gsap.to(ballRef.current,{
           x:`0`,
           y:`0`,
           ease: "elastic.out(2, 1)"
         })
         gsap.to(ballHeadingRef.current,{
           x:`0`,
           y:`0`,
           ease: "elastic.out(2, 1)"
         })
       }}
    >
     {title && <h5 ref={ballHeadingRef}>{title}</h5>}
     {!title && children}
    </div>
  );
}

export default BallElasticAnimComp;
