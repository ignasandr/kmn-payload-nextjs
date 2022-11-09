import Image from 'next/image'
import styles from './nav.module.css'

export default function Accessibility() {
    return (
        <ul className={styles.accessibility}>
            <li>
                <a href="#">EN</a>
            </li>
            <li>
                <a href="#">
                    <Image
                        src="/svg/hearing.svg" 
                        width={35}
                        height={35}
                        alt="Hearing impairment"
                    / >
                </a>
            </li>
            <li>
                <a href="#">
                    <Image
                        src="/svg/sight.svg" 
                        width={35}
                        height={35}
                        alt="Sight impairment"
                    / >
                </a>
            </li>
        </ul>
    )
}