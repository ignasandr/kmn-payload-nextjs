import Link from 'next/link'
import Dropdown from './dropdown'
import styles from './styles.module.css'
import { useState } from 'react'

type Props = {
    label: string,
    slug: string,
    submenu: boolean,
    submenuItems: any[],
    depthLevel: number
    // isSelected: boolean,
    // onClick: React.MouseEventHandler<HTMLLIElement>,
    // dropdownVisible: boolean
}

export default function MenuItems({ label, slug, submenu, submenuItems, depthLevel}: Props) {
    const [dropdown, setDropdown] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        setDropdown(!dropdown)
    }

    return (
            <li className={styles.menuItem}>
                {submenu ? (
                    <>
                        <div 
                            className={styles.button}
                            aria-haspopup="menu"
                            aria-expanded={dropdown ? "true" : "false"}
                            onClick={(e) => handleClick(e)}
                        >
                            {label}
                            {depthLevel > 0 ? <span>&raquo;</span> : <span className={styles.arrow}></span>}
                            <Dropdown
                                submenu={submenuItems}
                                dropdown={dropdown}     
                                depthLevel={depthLevel}
                            />
                        </div>
                    </>
                ) : (
                    <Link href={slug}>{label}</Link>
                ) }
            </li>
    ) 
}
