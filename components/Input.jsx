import styles from "../styles/Input.module.css";

export default function Input({ type, placeholder, value = "", onChange }) {
    return (
        <div className={styles.inputContainer}>
            <input 
                type= "text"
                placeholder={placeholder}
                className={styles.input}
            />
            <button className={styles.button}>
                <img src="https://img.icons8.com/material-outlined/24/user--v1.png" alt="user--v1" />

                <img color="white" src="https://img.icons8.com/ios-glyphs/30/shopping-cart--v1.png" alt="shopping-cart--v1"/>
            </button>
        </div>
    );
}