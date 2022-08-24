import styles from './AppHeader.module.css'
import catImage from '../../images/cat.jpg'
import { Button } from '../Button/Button'

export function AppHeader({ mixed, setMixed }) {
    return (
        <header className={styles.header}>
            <section className={styles.box}>
                <h1 className={styles.head}> Собери котика</h1>
            </section>
            <section className={styles.box}>
                <div className={styles.pictureBox}>
                    <img src={catImage} alt='картинка для сборки пазла' className={styles.picture}></img>
                </div>
            </section>
            <section className={styles.box}>
                <Button mixed={mixed} setMixed={setMixed} />
            </section>
        </header>
    )
}