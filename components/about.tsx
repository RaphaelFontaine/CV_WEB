import BackgroundAnimation from "@/utils/backgroundAnimation";

export default function About(){
    return(
        <div className="relative bg-primary min-h-screen" id='about'>
            <div className="h-full w-full absolute">
            <BackgroundAnimation/>
            </div>
            
            <div className="flex flex-col justify-center h-screen pb-20 max-w-5xl mx-auto z-50 px-6">
                <h1 className="text-secondary">
                    Hi, my name is
                </h1>
                <h1 className="font-bold text-name text-white">
                    Raphael FONTAINE
                </h1>
                <h2 className="text-third">
                    I'm a french Data Engineer
                </h2>
                <div className="flex flex-row pt-20 space-x-10">
                    <a href='#contact' className="button-contact transition-all duration-500"> 
                        Contact Me
                    </a>
                    <a href='#formations' className="button-contact group transition-all duration-500"> 
                        <span className="flex flex-row">
                            View my work
                            <svg width="20px" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex justify-center ml-4 items-center transition-all duration-500 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}