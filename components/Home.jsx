import styles from "../styles/Home.module.css"

export default function Home()  {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <h1>Descubra novas cartas do clash royale</h1>
                <p>Promoção ao comprar cartas novas!!</p>
                <button className={styles.botao}>Ver nossa ofertas</button>
            </div>


        </section>
    )
}