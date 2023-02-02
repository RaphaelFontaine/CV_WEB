import {
    Collapse,
    Burger,
    Modal,
    Button,
    Group,
} from '@mantine/core';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';

interface Link {
    link: string;
    label: string;
}

const links : Link[]=[
    {
        link : "#about",
        label : "About"
    },
    {
        link : "#formations",
        label : "Formations"
    },
    {
        link : "#experiences",
        label : "Experiences",
    },
    {
        link : "#contact",
        label : "Contact",
    }
]

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState<string|undefined>();
  
    useEffect(() => {
      let lastScrollY = window.pageYOffset;
  
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
          setScrollDirection(direction);
        }
        console.log(scrollDirection)
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      }
    }, [scrollDirection]);

    return scrollDirection;
};

export default function HeaderAction() {
    const scrollDirection = useScrollDirection();
    const [opened, setOpened] = useState(false);
    const items = links.map((link) => {
        return (
            <>
            <div className="loader">
                <div className="circle"></div>
            </div>
            <Link
                key={link.label}
                href={link.link}
                className="transition-all duration-500 text-white hover:text-secondary"
            >
                {link.label}
            </Link>
            </>
        );
    });
  
    return (
        <div className={`flex fixed z-[1000] ${ scrollDirection === "down" ? "-top-24" : "top-0"} w-full border-b-[1px] border-secondary h-24 bg-primary transition-all duration-500`}>
            <div className='flex items-center h-24 max-w-6xl mx-auto space-x-40 bg-primary border-b-[1px] border-secondary '>
                <Link href={"/"}>
                    <img src="/letter-R.png" alt={"R"} className="mx-2 h-14"/>
                </Link>
                <div className='hidden lg:flex items-center space-x-8 ml-20 h-full'>
                    {items}
                </div>
                <a href="/assets/resume.pdf" className='w-14 h-14 text-white group-hover:text-secondary justify-center items-center flex transition-all duration-500' download>
                    <BsFillFileEarmarkPdfFill className='text-white w-6 h-auto hover:text-secondary transition-all duration-500 cursor-pointer'/>
                </a>
                <Burger
                    className='lg:hidden ml-auto mr-4 border-4 border-black'
                    color={opened ? '#ADC906' : 'white'}
                    opened={opened}
                    onClick={() => setOpened(!opened)}
                />
            </div>
            <Collapse in={opened} className="lg:hidden mx-12 flex flex-col bg-footer-grey space-x-8 max-h-[85vh] overflow-y-scroll">
                {links.map(link => <Phone_menu_item link={link}/>)}
            </Collapse>
        </div>
    );
}


function Phone_menu_item({link} : {link : Link}){
    return(
            <div className='flex border-b-2 text-white border-b-white hover:bg-white/20'>
                <Link 
                    href={link.link}
                    target={link.label == 'Menuiserie IZY' ? "_blank" : "_self"}
                    className="flex item-center pl-4 py-3 hover:text-secondary transition-all">
                        {link.label.toUpperCase()}
                </Link> 
            </div>
    )
}