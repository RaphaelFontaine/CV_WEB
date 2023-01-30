import { GrMapLocation } from 'react-icons/gr';

export default function Icon() {
    return (
      <div className="flex flex-col gap-6 items-center justify-center text-white"> 
          <div className="flex flex-col hover:scale-105 space-y-8 items-center justify-center hover:bg-dark-grey w-[330px] h-[200px] bg-light-grey border-2 border-white hover:border-green transition-all duration-500 rounded-xl">
          <a href="tel:+33251959400">
            <div className="p-1 flex items-center justify-center rounded-full bg-green h-20 w-20">
                <img className=""
                 src="/assets/contact/tel.png"
                 loading="lazy"
                 >
              </img>
            </div>
            </a>
            <div className="px-[15%]">
                <a className="hover:text-green transition-all duration-500 flex items-center justify-center" href="tel:+33251959400">02 51 95 94 00 <br/> <br/></a> 
            </div>
          </div>
          <div className="flex flex-col hover:scale-105 space-y-6 items-center justify-center hover:bg-dark-grey w-[330px] h-[200px] bg-light-grey border-2 border-white hover:border-green transition-all duration-500 rounded-xl">
          <a href="mailto:contact@kancoon.fr">
            <div className="p-1 flex items-center justify-center rounded-full bg-green h-20 w-20">
                <img className=""
                  src="/assets/contact/mail.png"
                  loading="lazy"
                  >
                </img>
            </div>
            </a>
            <div className="px-[15%]">
                <a className="hover:text-green transition-all duration-500" href="mailto:contact@kancoon.fr">contact@kancoon.fr</a>
            </div>
          </div>
          
      </div>
    );
  }
  
