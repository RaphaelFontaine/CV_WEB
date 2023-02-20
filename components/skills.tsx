import { SKILLS } from "@/utils/skills"
import * as React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillProps {
    name: string,
    logo: string,
}

const skillVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
  };

export function Skill(props: SkillProps){
    let {name, logo} = props

    return(
            <motion.div variants={skillVariants} initial="hidden" animate="visible">
                <div className="flex flex-col justify">
                    <motion.div className="flex justify-center items-center w-16 h-16 md:w-20 md:h-20 rounded-full md:p-5 p-3 bg-fifth hover:shadow-xl hover:shadow-zinc-900 transition-all duration-500 hover:-translate-y-2 hover:scale-105 overflow-hidden backdrop-blur-lg bg-gradient-to-br from-[#fff]/20 to-[#fff]/0 brightness-105">
                        <img src={logo} className="z-50">
                        </img>
                    </motion.div>
                    <motion.h1 className="text-center text-skills">
                        {name}
                    </motion.h1>
                </div>
            </motion.div>
    )
}

export default function Skills(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div id="formations">
            <section ref={ref}>
                <motion.div
                    className="flex flex-wrap justify-center gap-x-6 gap-y-12 max-w-lg px-2"
                    variants={{
                    visible: {
                        transition: { staggerChildren: 0.1, delayChildren: 0.3 },
                    },
                    hidden: {},
                    }}
                    initial={isInView ? "visible" : "hidden"}
                    animate={isInView ? "visible" : "hidden"}
                >
                    {SKILLS.map((formation: any, index: any) => (
                    <motion.div
                        key={index}
                        variants={skillVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <Skill name={formation.name} logo={formation.logo} />
                    </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    )
} 