import { FORMATIONS } from "../utils/formations"

interface FormationsProps {
    title: string,
    date: string,
    text: string
}

export function Formation(props: FormationsProps){
    let {title, date, text} = props
    return(
        <div id='formations'>
            <div>
                <div className='bg-third'>
                    {title}
                </div>
                <div className="bg-secondary">
                    {date}
                </div>
                <div className="bg-primary">
                    {text}
                </div>
            </div>
        </div>
    )
}

export default function Formations(){
    return (
        <>
            {FORMATIONS.map((formation : any, index : any) => 
                <Formation 
                    key={index}
                    title={formation.title}
                    date={formation.date}
                    text={formation.text}
                />
            )}
        </>
    )
} 