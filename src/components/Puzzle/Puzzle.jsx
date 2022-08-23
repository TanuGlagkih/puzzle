import styles from './Puzzle.module.css';
import { Element } from '../Elements/Element';
import update from 'immutability-helper';
import { pieces } from '../../images/pieces/pieces.js'
import { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';

export function Puzzle() {

    const [boxes, setBoxes] = useState(pieces)
    console.log(boxes)
    const moveBox = useCallback(
        (id, left, top) => {
            console.log(id, left, top)
            const a = boxes.findIndex(box => box.id === id)
            console.log(a)
            setBoxes(
                    update(boxes, {[a]: { $merge: { left, top } }}) 
                
            )
        },
        [boxes, setBoxes],
    )
    const [, drop] = useDrop(
        () => ({
            accept: 'puzzle',
            drop(item, monitor) {
                const delta = monitor.getDifferenceFromInitialOffset()
                const left = Math.round(item.left + delta.x)
                const top = Math.round(item.top + delta.y)
                console.log(item.id, left, top)
                moveBox(item.id, left, top)

                return undefined
            },
        }),
        [moveBox],
    )
    console.log(boxes)
    return (
        <ul className={styles.elemBox} ref={drop}>
            {boxes ?
                boxes.map(box =>
                    <Element
                        el={box.el}
                        key={box.id}
                        id={box.id}
                        left={box.left}
                        top={box.top} />

                ) : (
                    <></>
                )
            }
        </ul>
    )
}