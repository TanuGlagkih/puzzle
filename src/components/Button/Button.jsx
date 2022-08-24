import styles from './Button.module.css';

export function Button({ setMixed }) {
    const click = () => {
        setMixed(!setMixed)
    }
    return (
        <button className={styles.btn} onClick={click}>
            Перемешать
        </button>

    )
}