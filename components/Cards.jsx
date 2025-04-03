import styles from "../styles/Cards.module.css";

export default function Card ( { image, text, text2 } ){
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <img src={image} alt="user--v1" />
                <h2>{text}</h2>
                <p>{text2}</p>
            </div>
        </div>
    );
}