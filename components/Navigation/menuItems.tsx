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

    return (
            <li className={styles.menuItem}>
                {submenu ? (
                    <>
                        <button 
                            type="button"
                            aria-haspopup="menu"
                            aria-expanded={dropdown ? "true" : "false"}
                            onClick={() => setDropdown((prev) => !prev)}
                        >
                            {label}
                            <Dropdown
                                submenu={submenuItems}
                                dropdown={dropdown}     
                                depthLevel={depthLevel}
                            />
                        </button>
                    </>
                ) : (
                    <Link href={slug}>{label}</Link>
                ) }
            </li>
    ) 
}
