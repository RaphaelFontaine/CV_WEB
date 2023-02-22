import * as React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "@/utils/skills"

interface SkillProps {
    name: string,
    logo: string,
}

const skillVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 }
  };

export function Skill(props: SkillProps) {
    const { name, logo } = props;
  
    return (
      <motion.div variants={skillVariants} initial="hidden" animate="visible">
        <div className="flex flex-col justify">
          <motion.div className="flex justify-center items-center w-16 h-16 md:w-20 md:h-20 rounded-full md:p-5 p-3 bg-fifth hover:shadow-xl hover:shadow-zinc-900 transition-all duration-500 hover:-translate-y-2 hover:scale-105 overflow-hidden backdrop-blur-lg bg-gradient-to-br from-[#fff]/20 to-[#fff]/0 brightness-105">
            <img src={logo} className="z-50" />
          </motion.div>
          <motion.h1 className="text-center text-skills">{name}</motion.h1>
        </div>
      </motion.div>
    );
  }
  


  export default function Skills() {
    return (
      <div id="formations">
        <motion.div
          className="flex flex-wrap justify-center gap-x-6 gap-y-12 max-w-lg px-2"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.3 }
            },
            hidden: {}
          }}
          initial="hidden"
          animate="visible"
        >
          {SKILLS.map((formation: any, index: any) => (
            <motion.div variants={skillVariants} key={index}>
              <Skill name={formation.name} logo={formation.logo} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }