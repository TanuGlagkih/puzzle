import styles from './AppHeader.module.css'
import catImage from '../../images/cat.jpg'

export function AppHeader() {
    return (
        <header className={styles.header}>
            <section className={styles.box}>
                <h1 className={styles.head}> Собери котика</h1>
            </section>
            <section  className={styles.box}>
                <div className={styles.pictureBox}>
                    <img src={catImage} alt='картинка для сборки пазла' className={styles.picture}></img>
                </div>
            </section>
            <section  className={styles.box}>
                <p className={styles.timer}>00:00:00</p>
            </section>
        </header>
    )
}