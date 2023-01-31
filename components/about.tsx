import BackgroundAnimation from "@/utils/backgroundAnimation";
import { Button } from "@mantine/core";

export default function About(){
    return(
        <div className="bg-primary flex min-h-screen" id='about'>
            <div>
                <BackgroundAnimation/>
            </div>
            <div className="flex flex-col justify-center h-screen pb-20 max-w-5xl mx-auto z-50 px-6">
                <div className="text-secondary">
                    Hi, my name is
                </div>
                <div className="font-bold text-name">
                    Raphael FONTAINE
                </div>
                <div className="text-third">
                    I'm a french Data Engineer
                </div>
                <div className="flex flex-row justify-center items-center pt-20">
                    <Button>
                        Contact Me
                    </Button>
                    <Button>
                        View my work
                    </Button>

                </div>
            </div>
        </div>
    )
}