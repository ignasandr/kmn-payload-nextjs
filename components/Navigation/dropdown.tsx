import MenuItems from './menuItems'
import styles from './styles.module.css'

type Props = {
    submenu: {
        label: string,
        slug: string,
        submenu: boolean,
        submenuItems: any[],
        id: string
    }[],
    dropdown: boolean,
    depthLevel: number
}

export default function Dropdown({ submenu, dropdown, depthLevel }: Props) {
    return (
        <ul className={dropdown ? [styles.dropdown, styles.show].join(' ') : styles.dropdown }>
            {submenu.map((subitem, index) => {
                return (
                    <MenuItems {...subitem} depthLevel={depthLevel + 1} key={index} />
                )
            })}

        </ul>
    )    
}
