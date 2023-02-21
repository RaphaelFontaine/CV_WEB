import {
    Collapse,
    Burger,
    Button,
    Group,
} from '@mantine/core';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';
import { TbLetterR } from 'react-icons/tb';

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
        link : "#experiences",
        label : "Experiences",
    },
    {
        link : "#skills",
        label : "Skills"
    },
    {
        link : "#portfolio",
        label : "Portfolio"
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
                className="transition-all duration-500 text-white hover:text-secondary scroll-smooth"
            >
                {link.label}
            </Link>
            </>
        );
    });
  
    return (
        <div className={`flex fixed backdrop-blur-xl z-[1000] ${ scrollDirection === "down" ? "-top-24" : "top-0"} w-full border-b-[1px] border-secondary h-24 bg-primary transition-all duration-500`}>
            <div className='flex items-center h-24 min-w-3xl px-10 mx-auto space-x-40 bg-primary border-b-[1px] border-secondary '>
                <Link href={"/"}>
                    <TbLetterR className='rounded-full border-2 hover:border-secondary border-white w-7 h-7 hover:text-secondary hover:scale-105 transition-all duration-500'/>
                </Link>
                <div className='hidden ft:flex font-semibold items-center space-x-8 ml-20 h-full'>
                    {items}
                </div>
                <a href="/assets/resume.pdf" className='flex justify-center mr-10 items-center w-14 h-14' download>
                    <BsFillFileEarmarkPdfFill className='text-white hover:text-secondary transition-all duration-500 w-6 h-auto cursor-pointer'/>
                </a>
                <Burger
                    className='ft:hidden ml-auto mr-4 border-4 border-black'
                    color={opened ? '#6ee7b7' : 'white'}
                    opened={opened}
                    onClick={() => setOpened(!opened)}
                />
            </div>
            <Collapse in={opened} className="ft:hidden mx-12 flex flex-col hover:text-secondary space-x-8 max-h-[85vh] overflow-y-scroll">
                {links.map(link => <Phone_menu_item link={link}/>)}
            </Collapse>
        </div>
    );
}

function Phone_menu_item({link} : {link : Link}){
    return(
            <div className='flex border-b-2 text-white hover:text-secondary border-b-white transition-all duration-500'>
                <Link 
                    href={link.link}
                    target={link.label}
                    className="flex item-center pl-4 py-3">
                        {link.label.toUpperCase()}
                </Link> 
            </div>
    )
}