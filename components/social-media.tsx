import { SlSocialLinkedin } from 'react-icons/sl';
import { FiGithub } from'react-icons/fi';
import { GoMail } from'react-icons/go';
import { BsTelephoneOutbound } from 'react-icons/bs'
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';
  
function FadeIn1({children} : any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <motion.div
          style={{
            transform: isInView ? "none" : "translateY(5vw)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5"
          }}
        >
          {children}
        </motion.div>
      </section>
    );
  }
function FadeIn2({children} : any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <motion.div
          style={{
            transform: isInView ? "none" : "translateY(5vw)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 2s"
          }}
        >
          {children}
        </motion.div>
      </section>
    );
  }

  function FadeIn3({children} : any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <motion.div
          style={{
            transform: isInView ? "none" : "translateY(5vw)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 2.5s"
          }}
        >
          {children}
        </motion.div>
      </section>
    );
  }

  function FadeIn4({children} : any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <motion.div
          style={{
            transform: isInView ? "none" : "translateY(5vw)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 3s"
          }}
        >
          {children}
        </motion.div>
      </section>
    );
  }

  function FadeIn5({children} : any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <motion.div
          style={{
            transform: isInView ? "none" : "translateY(5vw)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 3.5s"
          }}
        >
          {children}
        </motion.div>
      </section>
    );
  }

export default function SocialMedia(){
    return (
        
            <div className="hidden ft:flex flex-col fixed bottom-0 z-50 left-8 space-y-8 items-center justify-center">
                <FadeIn5>
                    <div>
                        <a href='tel:+33762888022'>
                            <BsTelephoneOutbound className="w-5 h-5 text-white hover:-translate-y-2 hover:text-secondary transition-all duration-500"/>
                        </a>
                    </div>
                </FadeIn5>
                <FadeIn4>
                    <div>
                        <a href='mailto:raphaelfontaine.pro@gmail.com'>
                            <GoMail className="w-6 h-6 text-white hover:-translate-y-2 hover:text-secondary transition-all duration-500"/>
                        </a>
                    </div>
                </FadeIn4>
                <FadeIn3>
                    <div>
                        <a href='https://github.com/RaphaelFontaine' target='_blank'>
                            <FiGithub className="relative w-6 h-6 text-white hover:-translate-y-2 hover:text-secondary transition-all duration-500"/>
                        </a>
                    </div>
                </FadeIn3>
                <FadeIn2>
                    <div>
                        <a href='https://www.linkedin.com/in/raphael-fontaine-2622321b8/' target='_blank'>
                            <SlSocialLinkedin className="w-5 h-5 text-white hover:-translate-y-2 hover:text-secondary transition-all duration-500"/>
                        </a>
                    </div>
                </FadeIn2>
                <div className="w-[1px] h-[150px] bg-white">
                </div>
            </div>
    )
} 