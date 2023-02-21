import Head from 'next/head'
import HeaderAction from '@/components/headers'
import About from '@/components/about'
import Experiences from '@/components/experiences'
import GetInTouchSimple from '@/components/contact'
import Icon from '@/components/icon'
import SocialMedia from '@/components/social-media'
import { useEffect, useState } from 'react'
import Skills from '@/components/skills'
import Portfolio from '@/components/portfolio'
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
          transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}

export default function Home() {
  const [isMounted, setisMounted] = useState(false);
  useEffect(() => {
    !isMounted &&
        setTimeout(function () {
          setisMounted(true);
        }, 1000);
  }, [isMounted]);
  return (
    <>
      <Head>
        <title>Raphael Fontaine</title>
        <meta name="description" content="Raphael Fontaine CV Data Engineer Developer" />
        <link rel="icon" href="/letter-R.png" />
      </Head>
      
      {isMounted ?
      <>
        <HeaderAction></HeaderAction>
        <SocialMedia></SocialMedia>
        
        <main className='bg-primary pt-[95px]'>
          <About></About>
          <div className='py-14'>
            <FadeIn>
              <div id="experiences" className='text-center font-bold tracking-wider text-title text-white'>
                <b className='text-secondary'>E</b>xperiences
                <Experiences></Experiences> 
              </div>
            </FadeIn>  
          </div>
          <div className="relative z-50 mx-auto max-w-5xl space-y-10">
            <FadeIn>
              <div id='skills' className="text-center font-bold tracking-wider text-title text-white">
                <b className="text-secondary text-title">S</b>kills
              </div>
            </FadeIn>
            <div className="flex flex-wrap text-white w-full px-10 justify-center items-center gap-x-10 gap-y-20 pb-28">
              <Skills></Skills>
            </div>
            <Portfolio/>
            <div className='py-16 space-y-10'>
              <FadeIn>
                <div id='contact' className="text-center font-bold text-title tracking-wider text-white">
                  Contact
                  <b className="text-secondary text-title"> Form</b>
                </div>
              </FadeIn>
              <div className='flex flex-wrap items-center justify-center gap-10'>
                <FadeIn>
                  <GetInTouchSimple/>
                </FadeIn>
                <FadeIn>
                  <Icon/>
                </FadeIn>
              </div> 
            </div>
          </div>
        </main>
        </>
      :
      <div className="absolute bg-primary z-[100] loader">
          <div className="face">
              <div className="circle"></div>
          </div>
          <div className="face">
              <div className="circle"></div>
          </div>
      </div>
      } 
    </>
  )
}
