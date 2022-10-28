import Link from 'next/link'
import styles from './styles.module.css'

type Props = {
    label: string,
    slug: string,
    isSelected: boolean
    onClick: React.MouseEventHandler<HTMLLIElement>;
}

export default function MenuItem({ label, slug, isSelected }: Props) {
    return (
        <li className={styles.menuItem + (isSelected ? styles.selected : "")}>
            <Link href={slug}>
                {label}
            </Link>
        </li>)
}