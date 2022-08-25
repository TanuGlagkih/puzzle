import styles from './Button.module.css';

export function Button({ mixed, setMixed }) {
    const click = () => {
        setMixed(!mixed)
    }

    return (
        <button className={styles.btn} onClick={click}>
            Перемешать
        </button>

    )
}