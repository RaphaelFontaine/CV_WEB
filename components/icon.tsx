import { GoMail } from 'react-icons/go'
import { BsTelephoneOutbound } from 'react-icons/bs'

export default function Icon() {
    return (
      <div className="flex flex-col gap-6 items-center justify-center text-white"> 
        <a href="tel:+33251959400">
          <div className="card overflow-hidden duration-500 transition-all group">
              <div className='flex flex-col items-center justify-center space-y-6'>
                  <div className="p-1 flex items-center justify-center h-20 w-20">
                      <BsTelephoneOutbound className='h-8 w-8 group-hover:text-secondary transition-all duration-500'/>
                  </div>
                  <div>
                      <a className="transition-all duration-500 flex items-center justify-center group-hover:text-secondary" href="tel:+33251959400">07 62 88 80 22</a> 
                  </div>
              </div>
            </div>
          </a>

          <a href="mailto:raphaelfontaine.pro@gmail.com">
            <div className="card group overflow-hidden duration-500 transition-all">
                <div className='flex flex-col items-center justify-center space-y-6'>
                      <div className="p-1 flex items-center justify-center h-20 w-20">
                        <GoMail className='h-10 w-10 group-hover:text-secondary transition-all duration-500'/>
                      </div>
                    
                    <div className="px-[15%]">
                        <a className="hover:text-green transition-all duration-500 group-hover:text-secondary" href="mailto:contact@kancoon.fr">raphaelfontaine.pro@gmail.com</a>
                    </div>
                  </div>
            </div>
          </a>
      </div>
    );
  }
  
