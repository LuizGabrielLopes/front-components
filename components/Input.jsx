import styles from "../styles/Input.module.css";
import { IconName } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { AiFillShopping } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

export default function Input({ placeholder }) {
    return (
        <div className={styles.Container}>
            <div className={styles.inputContainer}>
            <button className={styles.buttonInput}>
            <AiOutlineSearch />
            </button>
            </div>

            <input 
                type= "text"
                placeholder={placeholder}
                className={styles.input}
            />
            <button className={styles.button}>
                <VscAccount color="white" />

                <AiFillShopping color="white" />

                <AiOutlineHeart color="white" />
            </button>
        </div>
    );
}