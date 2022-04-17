import React,{useState} from 'react';
import { motion } from 'framer-motion';

const Layout = ({children}) => {
  const [display, setDisplay] = useState("none")
    const variants = {
        hidden: { opacity: 1, x: 0, y: -0,  transition: { duration: 1 } },
        enter: { opacity: 1, x: 0, y: 0,  transition: { duration: 1 } },
        exit: { opacity: 1, x: 0, y: -0,  transition: { duration: 1, 
         } },
      }
      const variants2 = {
        hidden: { opacity: 1, x: 0, height: "120vh",  transition: { duration: .5,} },
        enter: { opacity: 1, x: 0, height: "0vh",  transition: { duration: .5, delay:.3 } },
        exit: { opacity: 1, x: 0,height: "120vh",  transition: { duration: .5,} },
      }
      const variants3 = {
        hidden: { opacity: 1, x: 0, height: "120vh",  transition: { duration: .5 } },
        enter: { opacity: 1, x: 0, height:"0vh",  transition: { duration: .5, delay:.2 } },
        exit: { opacity: 1, x: 0, height: "120vh",  transition: { duration: .5, delay: 0.2} },
      }
      const variants4 = {
        hidden: { opacity: 1, x: 0, height: "120vh",  transition: { duration: .5 } },
        enter: { opacity: 1, x: 0, height:"0vh",  transition: { duration: .5, delay:.1 } },
        exit: { opacity: 1, x: 0, height: "120vh",  transition: { duration: .5, delay: 0.3} },
      }
      const variants5 = {
        hidden: { opacity: 1, x: 0, height: "120vh",  transition: { duration: .5 } },
        enter: { opacity: 1, x: 0, height:"0vh",  transition: { duration: .5, delay:0 } },
        exit: { opacity: 1, x: 0, height: "120vh",  transition: { duration: .5,delay: 0.4} },
      }
  return (
    <motion.div
    variants={variants} // Pass the variant object into Framer Motion 
    initial="hidden" // Set the initial state to variants.hidden
    animate="enter" // Animated state to variants.enter
    exit="exit" // Exit state (used later) to variants.exit
    transition={{ type: 'spring' }} // Set the transition to linear

    onAnimationStart={() =>{
      setDisplay("visible")
     }}
    style={{
      width:"100vw",
       height:"0vh",
        background:"transparent", 
        position:"absolute",
    left:"0",
    zIndex:"600",
    display:"fixed",
    visibility:`${display}`,
    
    }}
    
  >
    <motion.div
    variants={variants2} // Pass the variant object into Framer Motion 
    initial="hidden" // Set the initial state to variants.hidden
    animate="enter" // Animated state to variants.enter
    exit="exit" // Exit state (used later) to variants.exit
    transition={{ type: 'linear' }} // Set the transition to linear
    style={{width:"500px", height:"150vh", background:"black", position:"absolute",
    top:"50%",
    left:"0",
    display: 'block',
    }}
    
  />
    
    <motion.div
    variants={variants3} // Pass the variant object into Framer Motion 
    initial="hidden" // Set the initial state to variants.hidden
    animate="enter" // Animated state to variants.enter
    exit="exit" // Exit state (used later) to variants.exit
    transition={{ type: 'linear' }} // Set the transition to linear
    style={{width:"500px", height:"150vh", background:"black", position:"absolute",
    top:"50%",
    left:"500px",
    display: 'block',
    }}
    
  />
      <motion.div
    variants={variants4} // Pass the variant object into Framer Motion 
    initial="hidden" // Set the initial state to variants.hidden
    animate="enter" // Animated state to variants.enter
    exit="exit" // Exit state (used later) to variants.exit
    transition={{ type: 'linear' }} // Set the transition to linear
    style={{width:"500px", height:"150vh", background:"black", position:"absolute",
    top:"50%",
    left:"1000px",
    display: 'block',
    }}
    
  />
      <motion.div
    variants={variants5} // Pass the variant object into Framer Motion 
    initial="hidden" // Set the initial state to variants.hidden
    animate="enter" // Animated state to variants.enter
    exit="exit" // Exit state (used later) to variants.exit
    transition={{ type: 'linear' }} // Set the transition to linear
    style={{width:"500px", height:"150vh", background:"black", position:"sticky",
    top:"50%",
    left:"1500px",
    display: 'block',
    }}
    onAnimationComplete={() => {
      setTimeout(() => {
        setDisplay("hidden");
        console.log("hello");
      },300)
    }}
  />
  </motion.div>
  );
}

export default Layout;
