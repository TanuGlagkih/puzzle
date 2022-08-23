import { Puzzle } from '../Puzzle/Puzzle'
import styles from './Main.module.css'

export function Main() {

    return (
        <section className={styles.box}>
            <Puzzle />
        </section>
    )
}