import styles from "../styles/CategorieConteiner.module.css"

import Categories from './Categories';

export default function CategorieContainer() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.title1}>
                    <h1>Categorias</h1>
                </div>
                <div className={styles.title2}>
                <h4>Ver Categorias</h4>
            </div>
            </div>
            <div className={styles.content}>
            <Categories image="https://img.icons8.com/?size=512&id=93NyEXRZ6Rk7&format=png" title="Icon 1" />
            <Categories image="https://img.icons8.com/?size=512&id=93NyEXRZ6Rk7&format=png" title="Icon 2" />
            <Categories image="https://img.icons8.com/?size=512&id=93NyEXRZ6Rk7&format=png" title="Icon 3" />
            <Categories image="https://img.icons8.com/?size=512&id=93NyEXRZ6Rk7&format=png" title="Icon 4" />
            <Categories image="https://img.icons8.com/?size=512&id=93NyEXRZ6Rk7&format=png" title="Icon 5" />
            <Categories image="https://img.icons8.com/?size=512&id=93NyEXRZ6Rk7&format=png" title="Icon 6" />
            <Categories image="https://img.icons8.com/?size=512&id=93NyEXRZ6Rk7&format=png" title="Icon 7" />
            <Categories image="https://img.icons8.com/?size=512&id=93NyEXRZ6Rk7&format=png" title="Icon 8" />
        </div>
        </div>
    
    )
}