'use client';

import { useState } from "react";
import Logo from "./logo";
import styles from './styles.module.css'

export default function Navbar() {
    const [openBurger, setOpenBurger] = useState(false);

    return (
        <nav className={styles.nav}>
            <Logo />
            <div className={styles.container}>
                <ul className={styles.menu}>
                   <li>Vienas</li> 
                   <li>Du</li> 
                   <li>Trys</li> 
                   <li>Keturi</li> 
                   <li>Penki</li> 
                   <li>Šeši</li> 
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
