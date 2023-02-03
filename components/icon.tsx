import { GrMapLocation } from 'react-icons/gr';

export default function Icon() {
    return (
      <div className="flex flex-col gap-12 items-center justify-center text-white"> 
        <a href="tel:+33251959400">
          <div className="card group">
              <div className='flex flex-col items-center justify-center space-y-6'>
                  <div className="p-1 flex items-center justify-center group-hover:bg-secondary transition-all duration-500 rounded-full h-20 w-20">
                      <img 
                      src="/assets/contact/tel.png"
                      loading="lazy"
                      >
                    </img>
                  </div>
                  <div>
                      <a className="transition-all duration-500 flex items-center justify-center" href="tel:+33251959400">07 62 88 80 22</a> 
                  </div>
              </div>
            </div>
          </a>

          <a href="mailto:contact@kancoon.fr">
            <div className="card group">
              <div className='flex flex-col items-center justify-center space-y-6'>
                    <div className="p-1 flex items-center justify-center group-hover:bg-secondary transition-all duration-500 rounded-full h-20 w-20">
                        <img className=""
                          src="/assets/contact/mail.png"
                          loading="lazy"
                          >
                        </img>
                    </div>
                  
                  <div className="px-[15%]">
                      <a className="hover:text-green transition-all duration-500" href="mailto:contact@kancoon.fr">raphaelfontaine.pro@gmail.com</a>
                  </div>
                </div>
            </div>
          </a>
      </div>
    );
  }
  
