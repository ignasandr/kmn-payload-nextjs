'use client';

import Link from 'next/link'
import Dropdown from './dropdown'
import styles from './nav.module.css'
import { useState, useEffect, useRef } from 'react'

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
    let ref = useRef<any>();

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        setDropdown(!dropdown)
    }

    useEffect (() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };

        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        window.innerWidth > 980 && setDropdown(true);
    }

    const onMouseLeave = () => {
        window.innerWidth > 980 && setDropdown(false);
    }

    return (
            <li 
                className={styles.menuItem}
                ref={ref}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
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
