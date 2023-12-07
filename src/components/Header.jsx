import styles from './Header.module.css'

import logo from '../../public/vite.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo"/>
        </header>
    )
}