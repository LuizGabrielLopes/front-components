import styles from "../styles/Header.module.css";
import Input from "./Input";
import { icons } from "../data/icons";

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>theme</h1>
            <nav className={styles.navigation}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>

            <Input type="text" placeholder="Search" value="" />

        </header>
    );
}