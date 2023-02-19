import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FadeIn({children} : any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <motion.div
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
          }}
        >
          {children}
        </motion.div>
      </section>
    );
  }

export default function Portfolio(){
    return(
        <div className="flex flex-col items-center justify-center space-y-28">
            <FadeIn>
                <div id="portfolio" className='text-center font-bold tracking-wider text-title text-white'>
                    My Creative<b className='text-secondary'>Portfolio</b>
                </div>
            </FadeIn>
            <FadeIn>
                <div className="flex flex-wrap items-center justify-center">
                    <div className="portfolio1">
                        <div className="portfolio2">
                            <div className="portfolio3">
                                <a className="cursor-pointer" href="https://kancoon.fr" target={"_blank"}>
                                    <img src="/assets/companies/kancoon.png" className="z-150"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    )
} 