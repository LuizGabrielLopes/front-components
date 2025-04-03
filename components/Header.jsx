import styles from "../styles/Header.module.css";
import Input from "./Input";
import { icons } from "../data/icons";


export default function Header() {
    return (
        <header className={styles.header}>
            <a href="https://play.google.com/store/apps/details?id=com.supercell.clashroyale&pcampaignid=web_share"><img src="/logoClashRoyale.png" alt="Clash Royale Logo" className={styles.logo} /></a>
            <nav className={styles.navigation}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Cards</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>

            <Input placeholder="🔍 Search"/>

        </header>
    );
}