import Navbar from './navbar'
import Logo from '../logo'
import styles from './styles.module.css'
import Burger from './burger'
import Accessibility from './accessibility'

type Props = {
    menuItems: {
        label: string,
        slug: string,
        submenu: boolean,
        submenuItems: any[],
        id: string
    }[]
}

export default function Header({ menuItems }: Props) {
    return (
        <header>
            <div className={styles.header}>
                <Burger />
                <Logo />
                <Navbar menuItems={menuItems}/>
                <Accessibility />
            </div>
        </header>
    )
}