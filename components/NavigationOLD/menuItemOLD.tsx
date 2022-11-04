import Link from 'next/link'
import Dropdown from './dropdownOLD';
import styles from './styles.module.css'

type Props = {
    label: string,
    slug: string,
    submenu: boolean,
    submenuItems: any[],
    isSelected: boolean,
    onClick: React.MouseEventHandler<HTMLLIElement>,
    dropdownVisible: boolean
}

export default function MenuItem({ label, slug, submenu, submenuItems, isSelected, onClick, dropdownVisible }: Props) {
    return (
        <li className={styles.menuItem} onClick={onClick}>
            {
                submenu
                ?
                (
                    <>
                        <span>{label}</span>
                        <Dropdown
                            submenuItems={submenuItems}
                            isVisible={dropdownVisible}
                        />
                    </>
                )
                :
                <Link href={slug}>
                    <span className={isSelected ? styles.selected : ' '}>{label}</span>
                </Link>

            }
        </li>)
}