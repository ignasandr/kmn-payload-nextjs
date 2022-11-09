import MenuItems from './menuItems'
import styles from './nav.module.css'

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
    depthLevel = depthLevel + 1;
    const dropDownClass = depthLevel > 1 ? [styles.dropdown, styles.dropdownSubmenu].join(' ') : styles.dropdown;

    return (
        <ul className={dropdown ? [dropDownClass, styles.show].join(' ') : dropDownClass }>
            {submenu.map((subitem, index) => {
                return (
                    <MenuItems {...subitem} depthLevel={depthLevel} key={index} />
                )
            })}

        </ul>
    )    
}
