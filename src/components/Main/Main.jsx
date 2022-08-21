import { Puzzle } from '../Puzzle/Puzzle'
import { PuzzleField } from '../PuzzleField/PuzzleField'
import styles from './Main.module.css'
import { useDispatch } from 'react-redux';
import { pieces } from '../../images/pieces/pieces.js'
import { setPieses } from '../../services/actions/puzzle';
import { useEffect } from 'react';

export function Main() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPieses(pieces))
    }, [])

    return (
        <section className={styles.box}>
            {/* <PuzzleField /> */}
            <Puzzle />
        </section>
    )
}