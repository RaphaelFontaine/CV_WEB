import Head from 'next/head'
import HeaderAction from '@/components/headers'
import About from '@/components/about'
import Formations from '@/components/formations'
import Experiences from '@/components/experiences'
import GetInTouchSimple from '@/components/contact'
import Icon from '@/components/icon'
import SocialMedia from '@/components/social-media'
import { useEffect, useState } from 'react'
import Skills from '@/components/skills'

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
          <div className="relative z-50 mx-auto max-w-5xl space-y-20">
            <div className="flex flex-wrap w-full pt-16 px-10 justify-center items-center gap-x-10 gap-y-20">
              <Formations></Formations>
              <Skills></Skills>
            </div>
            {/* <Experiences></Experiences>  */}
            <div className='flex flex-wrap items-center justify-center gap-10 py-16'>
              <GetInTouchSimple></GetInTouchSimple>
              <Icon></Icon>
            </div> 
          </div>
        </main>
        </>
      :
      <div className="absolute bg-primary loader">
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
