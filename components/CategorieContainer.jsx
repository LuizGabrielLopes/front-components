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
            <Categories image="/icons8-confronto-royal-vermelho-48.png" title="Icon 2" />
            <Categories image="/32-328171_1899533-champion-league-clash-royale.png" title="Icon 3" />
            <Categories image="/a264ab52-7255-44ba-a496-fabd3e64e602_league1-fs8.png" title="Icon 4" />
            <Categories image="/league3-fs8.png" title="Icon 5" />
            <Categories image="/league4-fs8.png" title="Icon 6" />
            <Categories image="https://media.stickerswiki.app/clashroyaleemoji1/3241409.512.webp" title="Icon 7" />
            <Categories image="https://cdn.royaleapi.com/static/img/arenas-fs8/256x256/league6-fs8.png?t=6da824b2c" title="Icon 8" />
        </div>
        </div>
    
    )
}