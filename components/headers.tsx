import {
    Collapse,
    Burger,
    Modal,
    Button,
    Group,
} from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';

interface Link {
    link: string;
    label: string;
}

const links : Link[]=[
    {
        link : "/",
        label : "About"
    },
    {
        link : "/",
        label : "Formations"
    },
    {
        link : "/",
        label : "Experiences",
    },
    {
        link : "",
        label : "Contact",
    }
]

export default function HeaderAction() {
    const [opened, setOpened] = useState(false);
    const items = links.map((link) => {
        return (
            <Link
                key={link.label}
                href={link.link}
                className="transition-all duration-500 text-white hover:text-third"
            >
                {link.label}
            </Link>
        );
    });
  
    return (
        <div className='fixed top-0 lg:bg-secondary inset-x-0 z-50'>
            <div className='h-24 max-w-6xl mx-auto bg-secondary flex items-center'>
                <Link href={"/"}>
                    <img src="/letter-R.png" alt={"R"} className="mx-2 h-14"/>
                </Link>
                <div className='hidden lg:flex items-center space-x-8 ml-20 h-full'>
                    {items}
                </div>
                <Modal
                    className='bg-transparent transition-all duration-1000'
                    classNames={{
                        'root': "bg-transparent",
                        'modal': "h-full w-[40vw] bg-transparent",
                        'header': "hidden",
                        'body': "h-full w-auto bg-fff0000 flex justify-center"
                    }}
                    opened={opened}
                    onClose={() => setOpened(false)}
                >
                    {/* <img src="/assets/resume.png"/> */}
                    <iframe className='w-full' src="/assets/resume.pdf"/>
                </Modal>
                <Group position="center" className='transition-all duration-1000'>
                    <Button className="hover:bg-primary hover:text-third transition-all duration-1000" onClick={() => setOpened(true)}>
                        My PDF Resume
                    </Button>
                </Group>
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
                    className="flex item-center pl-4 py-3 hover:text-third transition-all">
                        {link.label.toUpperCase()}
                </Link> 
            </div>
    )
}