import { useState } from "react";
import { useRouter } from "next/router";
import Logo from "../logo";
import MenuItem from "./menuItemOLD";
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
    const router = useRouter();
    const path = router.pathname.replaceAll("/", "");

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
            <Logo onClick={() => setSelected(null)}/>
            <div className={styles.menuContainer}>
                <ul className={styles.menu}>
                    {menuItems.map((item, index) => {
                        return <MenuItem
                                    key={index}
                                    {...item}
                                    isSelected={path === item.slug ? true : false }
                                    dropdownVisible={index === selected}
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
