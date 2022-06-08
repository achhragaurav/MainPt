import React, { useRef } from "react";
import { gsap } from "gsap";
import { useEffect } from "react";
import Link from "next/link";
const BallElasticAnimComp = ({
  children,
  styles,
  title,
  className,
  navState,
  centerTwoStat,
  spanAnimDot,
  link,
  spanElement
}) => {
 
  const ballRef = useRef(null);
  const ballHeadingRef = useRef(null);
  const ballSpan = useRef(null);
  const ballContent = <div
      className={className ? styles[className] : styles["container"]}
      ref={ballRef}
      onMouseMove={e => {
        let rect = ballRef.current.getBoundingClientRect();
        const center = centerTwoStat ? centerTwoStat && -(rect.top - rect.bottom)/2 :  (rect.right - rect.left) / 2;
        let x = e.clientX - rect.left; //x position within the element.
        let y = e.clientY - rect.top; //y position within the element.
        const divideValue = centerTwoStat ? 4 : 2
        gsap.to(ballRef.current, {
          x: Math.floor(x - center),
          y: Math.floor(y - center)
        });
        if (!title) {
          return gsap.to(ballRef.current.childNodes[0], {
            x: Math.floor((x - center) / divideValue),
            y: Math.floor((y - center) / divideValue)
          });
        }
        gsap.to(ballHeadingRef.current, {
          x: Math.floor((x - center) / divideValue),
          y: Math.floor((y - center) / divideValue)
        });
      }}
      onMouseEnter={e => {
        if (!navState) {
          if (spanAnimDot) {
            gsap.fromTo(ballSpan.current,
              {
            opacity:0,
          },
              {
                opacity: 1,
            duration: ".3s"
              });
            return
          }
          gsap.to(ballSpan.current, {
            y: -23,
            duration: 1
          });
        }
      }}
      onMouseLeave={e => {
        gsap.to(ballRef.current, {
          x: `0`,
          y: `0`,
          ease: "elastic.out(2, 1)"
        });
        if (!navState) {
          if (spanAnimDot) {
            gsap.to(ballSpan.current, {
              ease: "power2.out",
              opacity: 0,
               duration: .5
            })
          }
          gsap.to(ballSpan.current, {
            y: "100%",
            duration: 1
          });
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
    {!spanElement && <span ref={ballSpan}></span>}
    {spanElement && <span ref={ballSpan}>{spanElement}</span>}
    
    </div>
  if (link) {
    return <Link href={link}>
    {ballContent}
    </Link>
  }

  return (
    ballContent
  );
};

export default BallElasticAnimComp;
