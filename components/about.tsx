import BackgroundAnimation from "@/utils/backgroundAnimation";
import { Button } from "@mantine/core";

export default function About(){
    return(
        <div className="relative bg-primary min-h-screen" id='about'>

            <div className="">
                <BackgroundAnimation/>
            </div>
            <div className="flex flex-col justify-center h-screen pb-20 max-w-5xl mx-auto z-50 px-6">
                <div className="text-secondary">
                    Hi, my name is
                </div>
                <div className="font-bold text-name text-white">
                    Raphael FONTAINE
                </div>
                <div className="text-third">
                    I'm a french Data Engineer
                </div>
                <div className="flex flex-row justify-center items-center space-x-8 pt-20">
                    <a href='#contact' className="button-contact"> 
                        Contact Me
                    </a>
                    <Button className="bg-fourth">
                        Contact Me
                    </Button>
                    <Button className="bg-fourth">
                        View my work
                    </Button>

                </div>
            </div>
            
        </div>
    )
}