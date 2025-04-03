import styles from "../styles/Categorie.module.css";

export default function Categories ({ image, title}) {
    return (
        <div className={styles.categories}>
            <div className={styles.content}>
                <img className={styles.image} src={image} />
                <h3 className={styles.title}>{title}</h3>
            </div>
        </div>
    )
}