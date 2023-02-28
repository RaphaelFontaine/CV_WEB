import BackgroundAnimation from "@/components/backgroundAnimation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FadeIn({children} : any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <motion.div
          style={{
            transform: isInView ? "none" : "translateY(5vw)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1)"
          }}
        >
          {children}
        </motion.div>
      </section>
    );
  }

  function FadeLeft({children} : any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <motion.div
          style={{
            transform: isInView ? "none" : "translateX(-5vw)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
          }}
        >
          {children}
        </motion.div>
      </section>
    );
  }

  function FadeRight({children} : any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <motion.div
          style={{
            transform: isInView ? "none" : "translateX(5vw)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
          }}
        >
          {children}
        </motion.div>
      </section>
    );
  }

export default function About(){
    return(
        <FadeIn>
            <div className="relative bg-primary min-h-screen" id='about'>
                <div className="">
                    <BackgroundAnimation/>
                </div>
                
                <div className="flex flex-col ml-auto ft:ml-16 justify-center h-screen pb-14 max-w-5xl mx-auto z-50 px-6">
                    <h1 className="text-secondary">
                        Hi, my name is
                    </h1>
                    <h1 className="font-bold text-name text-white">
                        Raphael FONTAINE
                    </h1>
                    <h2 className="text-third max-w-lg">
                        I'm a french Data Engineer who learn full stack development to build optimized solutions. I worked in the fields of cyber-security and aerospace.
                    </h2>
                    <FadeLeft>
                    <div className="flex flex-wrap items-center justify-center ft:items-start ft:justify-start gap-10 pt-20">
                        <a href="#contact" className="button-contact flex items-center justify-center transition-all duration-500 scroll-smooth"> 
                            Contact Me
                        </a>
                        <a href='#experiences' className="button-contact flex items-center justify-center group transition-all duration-500 scroll-smooth"> 
                            <span className="flex flex-row">
                                View my work
                                <svg width="20px" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex justify-center items-center ml-4 items-center transition-all duration-500 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                    </FadeLeft>
                </div>
            </div>
        </FadeIn>
    )
}