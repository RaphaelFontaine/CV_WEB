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
        <div className="flex flex-wrap mt-12 items-center justify-center w-full space-x-60 px-10 gap-x-10 gap-y-10 py-10">
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
                                Conception en <b className="text-secondary"> python</b> d'un outil pour appliquer des configurations sur <b className="text-secondary"> ElasticSearch/Kibana</b> de façon automatisé.
                            </li>
                            <li>
                                Gestion d'une base de donnée non-relationnelle <b className="text-secondary"> ElasticSearch</b> : création de pipelines, rétention des données, formatage des données.
                            </li>
                            <li>
                                Création et optimisation d'outil de visualisation de données (dashboards, visualisations) sur <b className="text-secondary"> Kibana</b>.
                            </li>
                        </div>
                    </div>
                </div>
            </FadeRight>
        </div>

        <div className="flex flex-wrap items-center justify-center w-full space-x-60 px-10 gap-x-10 gap-y-10 py-10">
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
                                Conception d'un site web front-end
                            </li>
                            <li>
                                Création du site en langage <b className="text-secondary"> TypeScript </b> avec le framework <b className="text-secondary"> NextJS</b>.
                            </li>
                            <li>
                                Site disponible ici :&nbsp; 
                                <a className="text-secondary" href="https://kancoon.fr" target={"_blank"}>
                                    kancoon.fr
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
            </FadeRight>
        </div>

        <div className="flex flex-wrap items-center justify-center w-full space-x-60 px-10 gap-x-10 gap-y-10 py-10">
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
                                Traitement en <b className="text-secondary"> python</b> de données sur des émissions de carbone dans le cadre d'un projet pour la COP26 (<b className="text-secondary"> bash</b>, <b className="text-secondary"> netcdf</b> ...)
                            </li>
                            <li>
                                Visualisation des données à travers une interface web (<b className="text-secondary"> javascript</b>, <b className="text-secondary"> leaflet</b>, <b className="text-secondary"> ChartJS</b>)
                            </li>
                            <li>
                                Travail dans un environnement cloud : création de machine virtuelle, extension de disque, gestion des ressources en fonction des besoins (<b className="text-secondary">docker</b>, <b className="text-secondary"> kubernetes</b>)
                            </li>
                        </div>
                    </div>
                </div>
            </FadeRight>
        </div>

        <div className="flex flex-wrap items-center justify-center w-full space-x-60 px-10 gap-x-10 gap-y-10 py-10">
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
                <div className="container duration-500 transition-all">
                    <div className="box">
                        <div className="content text-content">
                            <li>
                                Projet de Gestion de donnéesConception et Gestion d'une base de données MySQL pour gérer les livraisons d'une entreprise avec un serveur Apache
                            </li>
                            <li>
                                Projet d'analyse de données : Prédire la température critique d'un super-conducteur en utilisant plusieurs méthodes : ACP, régression linéaire, régression polynomiale, splines, forêts aléatoires (R Studio)
                            </li>
                            <li>
                            Learnt and used most of the popular programming languages as C, Java, Python, Javascript...
                            </li>
                        </div>
                    </div>
                </div>
            </FadeRight>
        </div>
    </>
    )
} 