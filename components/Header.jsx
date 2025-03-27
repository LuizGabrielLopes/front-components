import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>theme</h1>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>


        </header>
    );
}