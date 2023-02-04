import { SKILLS } from "@/utils/skills"

interface SkillProps {
    name: string,
    logo: string,
}

export function Skill(props: SkillProps){
    let {name, logo} = props
    return(
        <div className="flex flex-col justify">
            <div className="flex justify-center items-center w-16 h-16 md:w-20 md:h-20 rounded-full md:p-5 p-3 bg-[#243949] hover:shadow-xl hover:shadow-zinc-900 transition-all duration-500 hover:-translate-y-2 hover:scale-105 overflow-hidden backdrop-blur-lg bg-gradient-to-br from-[#fff]/20 to-[#fff]/0 brightness-105">
                <img src={logo} className="z-50">
                </img>
            </div>
            <h1 className="text-center">
                {name}
            </h1>
        </div>
    )
}

export default function Skills(){
    return (
        <div id='formations'>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-12 max-w-lg px-2">
                {SKILLS.map((formation : any, index : any) => 
                    <Skill 
                        key={index}
                        name={formation.name}
                        logo={formation.logo}
                    />
                )}
            </div>
        </div>
    )
} 