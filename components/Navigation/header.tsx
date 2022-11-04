import Navbar from './navbar'
import Logo from '../logo'
import menu from "../../data/nav.json"
import styles from './styles.module.css'

export default function Header() {
    return (
        <header>
            <div className={styles.header}>
                <Logo />
                <Navbar menuItems={menu.menuItems}/>
            </div>
        </header>
    )
}