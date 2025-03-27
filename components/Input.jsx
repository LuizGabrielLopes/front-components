import styles from "../styles/Input.module.css";

export default function Input({ type, placeholder, value }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            className={styles.input}
        />,

        <button className={styles.button}>
            <img src="https://img.icons8.com/material-outlined/24/user--v1.png" alt="user--v1" />
        </button>
    );
}