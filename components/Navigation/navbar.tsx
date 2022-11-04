import MenuItems from './menuItems'
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
    const depthLevel = 0;

    return (
        <>
            <nav>
                <ul className={styles.menu}>
                    { menuItems.map((item, index) => {
                        return (
                            <MenuItems {...item} depthLevel={depthLevel} key={index}/>
                        )
                    })}
                </ul>
            </nav>
            <ul className={styles.accessibility}>
                <li>Vienas</li> 
                <li>Du</li> 
                <li>Trys</li> 
            </ul>
        </>
    )
}
