import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Modal, Button, Group, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';


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
  const [opened, { open, close }] = useDisclosure(false);
    return(
        <div className="flex flex-col items-center justify-center space-y-28">
            <FadeIn>
                <div id="portfolio" className='text-center font-bold tracking-wider text-title text-white'>
                    My Creative <b className='text-secondary'>Portfolio</b>
                </div>
            </FadeIn>
            <FadeIn>
              <div className="flex flex-wrap items-center justify-center gap-24">
                <a className="cursor-pointer" href="https://kancoon.fr" target={"_blank"}>
                  <div className="portfolio1">
                    <div className="portfolio2">
                      <div className="portfolio3">
                        <img src="./assets/companies/kancoon.png" className="z-150"/>
                      </div>
                    </div>
                  </div>
                </a>
                <a onClick={open} className="cursor-pointer"  target={"_blank"}>
                  <div className="portfolio1">
                    <div className="portfolio2">
                      <div className="portfolio3">
                        <Modal 
                          className="z-[3000]"
                          classNames={{
                            modal:"relative max-h-screen min-w-full ft:min-w-[35vh] overflow-x-hidden overflow-y-scroll pb-16 bg-primary",
                            body: "w-full relative"
                          }}
                          style={{
                            background:"#232323",
                          }}
                          opened={opened} 
                          size='xl'
                          lockScroll={true}
                          onClose={close} 
                          closeOnClickOutside={true}
                          closeOnEscape={true}
                        >
                        <div className="space-y-12 max-w-2xl mx-auto text-white text-modal tracking-wide">
                          <div className="space-y-8 ">
                            <img src="./assets/companies/binance.png" alt="binance" className="w-44 mx-auto"/>
                            <h1 className="text-company font-semibold tracking-wider mx-auto max-w-2xl text-center">
                              Creation of my crypto wallet charts from Binance APIs
                            </h1>
                          </div>
                          <div className="flex flex-wrap justify-center items-center py-6 gap-4">
                            <div className="flex justify-center items-center w-16 h-16 rounded-full md:p-5 p-3 bg-[#243949] overflow-hidden backdrop-blur-lg bg-gradient-to-br from-[#fff]/20 to-[#fff]/0 brightness-105">
                              <img src="./assets/skills/python.png" alt="python"></img>
                            </div>
                            <div className="flex justify-center items-center w-16 h-16 rounded-full md:p-5 p-3 bg-[#243949] overflow-hidden backdrop-blur-lg bg-gradient-to-br from-[#fff]/20 to-[#fff]/0 brightness-105">
                              <img src="./assets/skills/bash.png" alt="bash"></img>
                            </div>
                            <div className="flex justify-center items-center w-16 h-16 rounded-full md:p-5 p-3 bg-[#243949] overflow-hidden backdrop-blur-lg bg-gradient-to-br from-[#fff]/20 to-[#fff]/0 brightness-105">
                              <img src="./assets/skills/prometheus.png" alt="prometheus"></img>
                            </div>
                            <div className="flex justify-center items-center w-16 h-16 rounded-full md:p-5 p-3 bg-[#243949] overflow-hidden backdrop-blur-lg bg-gradient-to-br from-[#fff]/20 to-[#fff]/0 brightness-105">
                              <img src="./assets/skills/grafana.png" alt="grafana"></img>
                            </div>
                            <div className="flex justify-center items-center w-16 h-16 rounded-full md:p-5 p-3 bg-[#243949] overflow-hidden backdrop-blur-lg bg-gradient-to-br from-[#fff]/20 to-[#fff]/0 brightness-105">
                              <img src="./assets/skills/git.png" alt="git"></img>
                            </div>
                          </div>
                          <p>
                            Being interested in the financial markets, and having a cryptocurrency portfolio, I wanted to carry out a project allowing me to observe the evolution of my portfolio over time.
                          </p>
                          <p>
                            For this, I contacted the Binance APIs using my token allowing me to have read access to my account. From this data I created graphs in 2 ways. At first, in python with Matplotlib. Then  I sent a data stream to Prometheus, and I added it as a data source to Grafana to build my graphics with this tool, which allows for more aesthetic graphics.
                          </p>
                          <p>
                            Finally, I did some code optimization work because requests to the Binance API are limited per day and are long when you request data over several years. So, I stored the data already requested in json and to make API calls only to acquire new data.
                          </p>
                          <img className="w-full" src="./assets/binance_project/wallet_repartition.png">
                          </img>
                          
                        </div>
                        </Modal>
                        <img src="./assets/companies/binance.png" className="z-150"/>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </FadeIn>
        </div>
    )
} 