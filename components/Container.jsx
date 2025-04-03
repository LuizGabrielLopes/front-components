import styles from "../styles/Container.module.css";
import Card from "./Cards"

export default function Container() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
             <div className={styles.title1}>
                <h1>Bla bla</h1>
            </div>
            <div className={styles.title2}>
                <h4>bla bla</h4>
            </div>
            </div>
            <div className={styles.content}>
                <Card 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrSjTkHNUGo4hpL_zjMyLuUsxqGb8Evh3Ejw&s"
                    text="Bla bla bla 1"
                    text2="Bla bla bla bla bla"
                />
                <Card
                 image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrSjTkHNUGo4hpL_zjMyLuUsxqGb8Evh3Ejw&s"
                 text="Bla bla bla 2"
                 text2="Bla bla bla bla bla"
                />
                <Card
                 image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrSjTkHNUGo4hpL_zjMyLuUsxqGb8Evh3Ejw&s"
                 text="Bla bla bla 3"
                 text2="Bla bla bla bla bla"
                />
                
                <Card
                 image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrSjTkHNUGo4hpL_zjMyLuUsxqGb8Evh3Ejw&s"
                 text="Bla bla bla 4"
                 text2="Bla bla bla bla bla"
                />
            </div>
        </div>
    );
}