import React, { useRef } from "react";
import { gsap } from "gsap";
import { useEffect } from "react";
const BallElasticAnimComp = ({
  children,
  styles,
  title,
  className,
  navState
}) => {
 
  const ballRef = useRef(null);
  const ballHeadingRef = useRef(null);
  const ballSpan = useRef(null);
  return (
    <div
      className={className ? styles[className] : styles["container"]}
      ref={ballRef}
      onMouseMove={e => {
        let rect = ballRef.current.getBoundingClientRect();
        const center = (rect.right - rect.left) / 2;

        console.log(center);
        let x = e.clientX - rect.left; //x position within the element.
        let y = e.clientY - rect.top; //y position within the element.
        //  console.log(x,y);
        gsap.to(ballRef.current, {
          x: Math.floor(x - center),
          y: Math.floor(y - center)
        });
        if (!title) {
          return gsap.to(ballRef.current.childNodes[0], {
            x: Math.floor((x - center) / 2),
            y: Math.floor((y - center) / 2)
          });
        }
        gsap.to(ballHeadingRef.current, {
          x: Math.floor((x - center) / 2),
          y: Math.floor((y - center) / 2)
        });
      }}
      onMouseEnter={e => {
        if (!navState) {
          gsap.to(ballSpan.current, {
            y: -23,
            duration: 1
          });
        }
      }}
      onMouseLeave={e => {
        console.log(e.clientX);
        gsap.to(ballRef.current, {
          x: `0`,
          y: `0`,
          ease: "elastic.out(2, 1)"
        });
        if (!navState) {
          gsap.to(ballSpan.current, {
            y: "100%",
            duration: 1
          });
          console.log(ballRef.current.childNodes[0]);
          gsap.to(ballRef.current.childNodes[0], {
            x: `0px`
          });
        }

        if (!title) {
          return gsap.to(ballRef.current.childNodes[0], {
            x: `-5px`,
            y: `0`,
            ease: "elastic.out(2, 1)"
          });
        }
        gsap.to(ballHeadingRef.current, {
          x: `0`,
          y: `0`,
          ease: "elastic.out(2, 1)"
        });
      }}
    >
      {title && <h5 ref={ballHeadingRef}>{title}</h5>}
      {!title && children}
      <span ref={ballSpan}></span>
    </div>
  );
};

export default BallElasticAnimComp;
