import styles from './styles.module.css'

export default function Burger() {
    return (
        <div className={styles.burger}>
            <div className={styles.burgerLine} />
            <div className={styles.burgerLine} />
            <div className={styles.burgerLine} />
        </div>
    )
}