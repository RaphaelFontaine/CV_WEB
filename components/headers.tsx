import {
    Collapse,
    Burger,
    Button,
    Group,
    Modal,
    Overlay
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
            <Link
                key={link.label}
                href={link.link}
                className="transition-all duration-500 text-white hover:text-secondary scroll-smooth"
            >
                {link.label}
            </Link>
        );
    });
  
    return (
        <div className={`flex fixed backdrop-blur-xl z-[1000] ${ scrollDirection === "down" ? "-top-24" : "top-0"} w-full border-b-[1px] border-secondary h-24 bg-primary transition-all duration-500`}>
            <div className='flex items-center justify-center w-full h-24 px-10 bg-primary border-b-[1px] border-secondary '>
                <div className='absolute left-10'>
                    <Link href={"/"}>
                        <TbLetterR className='rounded-full scroll-smooth border-2 hover:border-secondary border-white w-7 h-7 hover:text-secondary hover:scale-105 transition-all duration-500'/>
                    </Link>
                </div>
                <div className='hidden ft:flex font-normal items-center justify-center space-x-8 h-full'>
                    {items}
                </div>
                <div className='absolute ft:right-0 mx-auto'>
                    <a href="/assets/resume.pdf" className='flex justify-center ft:mr-10 items-center w-14 h-14' download>
                        <BsFillFileEarmarkPdfFill className='text-white hover:text-secondary transition-all duration-500 w-6 h-auto cursor-pointer'/>
                    </a>
                </div>
                <Burger
                    className='ft:hidden ml-auto mr-4 border-4 border-black'
                    color={opened ? '#6ee7b7' : 'white'}
                    opened={opened}
                    onClick={() => setOpened(!opened)}
                />
            </div>
            <Modal 
                classNames={{
                    root: "bg-transparent",
                    header: "bg-white ",
                    modal: "bg-primary",
                    body: "bg-primary"
                }}
                closeOnEscape={true}
                closeOnClickOutside={true}
                centered={true}
                onClose={() => setOpened(false)} 
                withCloseButton={false} 
                opened={opened} 
                className="ft:hidden absolute min-h-screen rounded-xl  flex-col hover:text-secondary max-h-[85vh] overflow-y-scroll"
            >
                {links.map(link => <Phone_menu_item link={link}/>)}
            </Modal>
        </div>
    );
}


function Phone_menu_item({link} : {link : Link}){
    return(
            <div className='flex items-center justify-center border-b-2 text-white hover:bg-fourth hover:text-secondary border-b-white transition-all duration-500'>
                <Link
                    key={link.label}
                    href={link.link}
                    className="flex items-center justify-center mx-4 my-3 scroll-smooth"
                >
                        {link.label.toUpperCase()}
                </Link> 
            </div>
    )
}