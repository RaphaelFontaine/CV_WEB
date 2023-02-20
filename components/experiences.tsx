import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FadeRight({children} : any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <motion.div
          style={{
            transform: isInView ? "none" : "translateX(50vw)",
            opacity: isInView ? 1 : 0,
            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          {children}
        </motion.div>
      </section>
    );
  }

function FadeIn({children} : any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <motion.div
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          {children}
        </motion.div>
      </section>
    );
  }

export default function Experiences(){
    return(
        <>
        <div className="flex flex-wrap mt-12 items-center justify-center w-full px-10 gap-x-60 gap-y-10 py-10">
            <FadeIn>
                <div className="flex flex-row space-x-20">
                    <a href="https://tehtris.com/en/" target={"_blank"}>
                        <div className="flex flex-row justify-center items-center w-16 h-16 md:w-24 md:h-24 rounded-full md:p-5 p-3 bg-fifth hover:shadow-xl hover:shadow-zinc-900 transition-all duration-500 hover:-translate-y-2 hover:scale-105 overflow-hidden backdrop-blur-lg bg-gradient-to-br from-[#fff]/20 to-[#fff]/0 brightness-105">
                                <img src="/assets/companies/tehtris.png" className="z-50">
                                </img>
                        </div>
                    </a>
                    
                    <div className="flex flex-col space-y-4">
                        <div className="text-date text-secondary">
                            OCT 2021 - JAN 2023 <br/> Bordeaux
                        </div>
                        <div className="text-company font-bold uppercase">
                            Tehtris
                        </div>
                    </div>
                </div>
            </FadeIn>
            <FadeRight>
                <div className="container duration-500 transition-all">
                    <div className="box">
                        <div className="content text-content">
                            <li>
                                Designing a tool in <b className="text-secondary">Python</b> for applying configurations on <b className="text-secondary">ElasticSearch/Kibana</b> in an automated way.
                            </li>
                            <li>
                                Managing a non-relational database <b className="text-secondary">ElasticSearch</b>: creating pipelines, data retention, data formatting.
                            </li>
                            <li>
                                Creating and optimizing data visualization tools (dashboards, visualizations) on <b className="text-secondary">Kibana</b>.
                            </li>
                        </div>
                    </div>
                </div>
            </FadeRight>
        </div>

        <div className="flex flex-wrap items-center justify-center w-full px-10 gap-x-60 gap-y-10 py-10">
            <FadeIn>
                <div className="flex flex-row space-x-20">
                    <a href="https://kancoon.fr" target={"_blank"}>
                        <div className="flex flex-row justify-center items-center w-16 h-16 md:w-24 md:h-24 rounded-full md:p-5 p-3 bg-fifth hover:shadow-xl hover:shadow-zinc-900 transition-all duration-500 hover:-translate-y-2 hover:scale-105 overflow-hidden backdrop-blur-lg bg-gradient-to-br from-[#fff]/20 to-[#fff]/0 brightness-105">
                                <img src="/assets/companies/kancoon.png" className="z-50">
                                </img>
                        </div>
                    </a>
                    <div className="flex flex-col space-y-4">
                        <div className="text-date text-secondary">
                            NOV 2022 - JAN 2023 <br/> Bordeaux
                        </div>
                        <div className="text-company font-bold uppercase">
                            Kancoon
                        </div>
                    </div>
                </div>
            </FadeIn>
            <FadeRight>
                <div className="container duration-500 transition-all">
                    <div className="box">
                        <div className="content text-content">
                            <li>
                                Design of a front-end website.
                            </li>
                            <li>
                                Creation of the website using <b className="text-secondary">TypeScript</b> language with the<b className="text-secondary">NextJS</b> framework.
                            </li>
                            <li>
                                Site available here :&nbsp; 
                                <a className="text-secondary" href="https://kancoon.fr" target={"_blank"}>
                                    kancoon.fr
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
            </FadeRight>
        </div>

        <div className="flex flex-wrap items-center justify-center w-full px-10 gap-x-60 gap-y-10 py-10">
            <FadeIn>
                <div className="flex flex-row space-x-20">
                    <a href="https://atos.net/en/" target={"_blank"}>
                        <div className="flex flex-row justify-center items-center w-16 h-16 md:w-24 md:h-24 rounded-full md:p-5 p-3 bg-fifth hover:shadow-xl hover:shadow-zinc-900 transition-all duration-500 hover:-translate-y-2 hover:scale-105 overflow-hidden backdrop-blur-lg bg-gradient-to-br from-[#fff]/20 to-[#fff]/0 brightness-105">
                                <img src="/assets/companies/atos.png" className="z-50">
                                </img>
                        </div>
                    </a>
                    <div className="flex flex-col space-y-4">
                        <div className="text-date text-secondary">
                            FEB 2021 - AUG 2021 <br/> Toulouse
                        </div>
                        <div className="text-company font-bold uppercase">
                            Atos
                        </div>
                    </div>
                </div>
            </FadeIn>
            <FadeRight>
                <div className="container duration-500 transition-all">
                    <div className="box">
                        <div className="content text-content">
                            <li>
                                <b className="text-secondary">Python</b> data processing for carbon emissions data as part of a project for COP26. (<b className="text-secondary"> bash</b>, <b className="text-secondary"> netcdf</b> ...)
                            </li>
                            <li>
                                Web interface creation for data visualization. (<b className="text-secondary"> javascript</b>, <b className="text-secondary"> leaflet</b>, <b className="text-secondary"> ChartJS</b>)
                            </li>
                            <li>
                                Work in a cloud environment: virtual machines creation, disk extension, resource management based on needs. (<b className="text-secondary">docker</b>, <b className="text-secondary"> kubernetes</b>)
                            </li>
                        </div>
                    </div>
                </div>
            </FadeRight>
        </div>

        <div className="flex flex-wrap items-center justify-center w-full px-10 gap-x-60 gap-y-10 py-10">
            <FadeIn>
                <div className="flex flex-row space-x-20">
                    <a href="https://enseirb-matmeca.bordeaux-inp.fr/fr" target={"_blank"}>
                        <div className="flex flex-row justify-center items-center w-16 h-16 md:w-24 md:h-24 rounded-full md:p-5 p-3 bg-fifth hover:shadow-xl hover:shadow-zinc-900 transition-all duration-500 hover:-translate-y-2 hover:scale-105 overflow-hidden backdrop-blur-lg bg-gradient-to-br from-[#fff]/20 to-[#fff]/0 brightness-105">
                                <img src="/assets/companies/enseirb.png" className="z-50">
                                </img>
                        </div>
                    </a>
                    <div className="flex flex-col space-y-4">
                        <div className="text-date text-secondary">
                            SEP 2018 - FEB 2021 <br/> Bordeaux
                        </div>
                        <div className="text-company font-bold uppercase">
                            Enseirb
                        </div>
                    </div>
                </div>
            </FadeIn>
            <FadeRight>
                <div className="container flex items-center justify-center duration-500 transition-all">
                    <div className="box">
                        <div className="content text-content">
                            <li>
                                Data Management Project: Designing and Managing a <b className="text-secondary">MySQL</b> Database to Handle Deliveries for a Company Using an <b className="text-secondary">Apache</b> Server.
                            </li>
                            <li>
                                Data Analysis Project: Predicting the critical temperature of a superconductor using multiple methods including PCA, linear regression, polynomial regression, splines, and random forests (<b className="text-secondary">R Studio</b>)
                            </li>
                            <li>
                                Learnt and used most of the popular programming languages as <b className="text-secondary">C</b>, <b className="text-secondary">Java</b>, <b className="text-secondary">Python</b>, <b className="text-secondary">Javascript</b>...
                            </li>
                        </div>
                    </div>
                </div>
            </FadeRight>
        </div>
    </>
    )
} 