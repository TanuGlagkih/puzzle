import styles from './Puzzle.module.css';
import { Element } from '../Elements/Element';
import { useSelector } from 'react-redux';

export function Puzzle() {
    const { pieces } = useSelector(state => state.puzzle)
    console.log(pieces)
    return (
        <ul className={styles.elemBox}>
            {pieces ? (
                pieces.map((el, index) => (
                    <Element el={el} key={el.id} id={el.id} index={index} />
                ))
            ) : (
                <></>
            )}
        </ul>
    )
}