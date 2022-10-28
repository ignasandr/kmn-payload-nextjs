import { useState } from "react";
import Logo from "../logo";
import MenuItem from "./menuItem";
import styles from './styles.module.css'

type Props = {
    menuItems: {
        label: string,
        slug: string,
        submenu: boolean,
        submenuItems: any[],
        id: string
    }[]
}

export default function Navbar({ menuItems }: Props) {
    const [selected, setSelected] = useState(null);

    const handleSelected = (index: number) => {
        if (selected !== index) {
            setSelected(index);
            return true
        } else {
            setSelected(null)
            return false
        }
    }

    return (
        <nav className={styles.nav}>
            <Logo />
            <div className={styles.menuContainer}>
                <ul className={styles.menu}>
                    {menuItems.map((item, index) => {
                        return <MenuItem
                                    key={item.id}
                                    label={item.label}
                                    slug={item.slug}
                                    isSelected={index === selected}
                                    onClick={() => handleSelected(index)}/>
                                })}
                </ul>
            </div>            
            <ul className={styles.accessibility}>
                <li>Vienas</li> 
                <li>Du</li> 
                <li>Trys</li> 
            </ul>
        </nav>
    )
}
