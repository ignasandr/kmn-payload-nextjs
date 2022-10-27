'use client';

import { use, useState } from "react";
import Logo from "./logo";
import styles from './styles.module.css'

type Props = {
    menuItems: {
        label: string,
        slug: string,
        submenu: boolean,
        submenuItems: string[],
        id: string
    }[]
}

// import payload from "payload";

// async function getNavItems() {
//     let navItems = await payload.find({
//         collection: 'examples'
//     })

//     return navItems;
// } 
// async function getNavItems() {
//     let navItems = await fetch("http://localhost:3000/api/globals/menu");

//     return navItems.json();
// } 

export default function Navbar({ menuItems }: Props) {
    // const [openBurger, setOpenBurger] = useState(false);

    // let navItems = use(getNavItems());
    // const menuItems = menu.menuItems;
    // console.log(menu.menuItems);
    // const menuItems = menu.menuItems;

    return (
        <nav className={styles.nav}>
            <Logo />
            <div className={styles.container}>
                <ul className={styles.menu}>
                    {menuItems.map(item => {
                        return <li key={item.id}>{item.label}</li>
                    })}
                </ul>
                <ul className={styles.accessibility}>
                   <li>Vienas</li> 
                   <li>Du</li> 
                   <li>Trys</li> 
                </ul>
            </div>            
        </nav>
    )
}
