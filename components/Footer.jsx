import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <img src="/logoClashRoyale.png" alt="Clash Royale Logo" className={styles.imagem} />
            <p>&copy; 2025 Clash Royale. Todos os direitos reservados.</p>
            </div>
            <div className={styles.texto}>
            <h1>Redes Sociais</h1>
            <a href="https://www.instagram.com/clashroyale/">Instagram</a>
            <a href="https://twitter.com/clashroyale?lang=bn">Twitter</a>
            <p href="https://www.youtube.com/channel/UC_F8DoJf9MZogEOU51TpTbQ">Youtube</p>
            </div>
        </footer>
    );
}