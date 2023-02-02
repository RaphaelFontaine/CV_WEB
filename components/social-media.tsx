import { SlSocialLinkedin } from 'react-icons/sl';
import { FiGithub } from'react-icons/fi';
import { GoMail } from'react-icons/go';
import { BsTelephoneOutbound } from 'react-icons/bs'

export default function SocialMedia(){
    return (
        <>
            <div className="flex flex-col fixed bottom-0 z-50 left-8 space-y-8 items-center justify-center">
                <div>
                    <a href='tel:+33762888022'>
                        <BsTelephoneOutbound className="w-5 h-5 text-white hover:-translate-y-2 hover:text-secondary transition-all duration-500"/>
                    </a>
                </div>
                <div>
                    <a href='mailto:raphaelfontaine.pro@gmail.com'>
                        <GoMail className="w-6 h-6 text-white hover:-translate-y-2 hover:text-secondary transition-all duration-500"/>
                    </a>
                </div>
                <div>
                    <a href='https://github.com/RaphaelFontaine' target='_blank'>
                        <FiGithub className="relative w-6 h-6 text-white hover:-translate-y-2 hover:text-secondary transition-all duration-500"/>
                    </a>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/raphael-fontaine-2622321b8/' target='_blank'>
                        <SlSocialLinkedin className="w-5 h-5 text-white hover:-translate-y-2 hover:text-secondary transition-all duration-500"/>
                    </a>
                </div>
                <div className="w-[1px] h-[150px] bg-white">
                </div>
            </div>
        </>
    )
} 